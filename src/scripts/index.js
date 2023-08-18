let searchName = document.querySelector('#input-search')
let profileData = document.querySelector('.profile-data')
let profileImage = document.querySelector('.profile-photo')
let profileName = document.querySelector('.name')
let profileBio = document.querySelector('.bio')

const button = document.querySelector('#btn-search').addEventListener("click", () => getUser(searchName.value.toLowerCase()))

// async function getUser(name){
//     const response = await fetch(`https://api.github.com/users/${name}`)
//     return await response.json()
// }

// async function getRepos(name){
//     const response = await fetch(`https://api.github.com/users/${name}/repos`)
//     return await response.json()
// }

async function getUser(name){
    const response = await fetch(`https://api.github.com/users/${name}`)
    const user = await response.json()
    profileImage.setAttribute("src", user.avatar_url)
    profileName.innerHTML = `${user.name ?? 'Não possui nome cadastrado'}`
    profileBio.innerHTML = `${user.bio ?? 'Não possui bio cadastrada'}`
    profileData.classList.remove('hide')
}

// async function getUser(name){
//     const response = await fetch(`https://api.github.com/users/${name}/repos`)
//     const user = await response.json()
//     profileImage.setAttribute("src", user.avatar_url)
//     profileName.innerHTML = `${user.name ?? 'Não possui nome cadastrado'}`
//     profileBio.innerHTML = `${user.bio ?? 'Não possui bio cadastrada'}`
// }
