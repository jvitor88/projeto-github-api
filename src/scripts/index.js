import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"
import { getEvents } from "./services/events.js"
import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

document.querySelector('#btn-search').addEventListener("click", () => {
    const userName = document.querySelector('#input-search').value.toLowerCase()
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})
document.getElementById('input-search').addEventListener("keypress", (click) => {
    if(click.key === 'Enter'){
        const userName = document.querySelector('#input-search').value.toLowerCase()
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

async function getUserData(userName){
    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getEvents(userName)
    console.log(eventsResponse)
    if(userResponse.message === 'Not Found'){
        screen.renderNotFound()
        return
    }   

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)
    screen.renderUser(user)
    }

function validateEmptyInput(userName){
    if(userName.length === 0) {
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}