const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img class="profile-photo" src="${user.avatarUrl}" alt="Foto de perfil do usuário">
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada'}</p>
                                            <div class="follows">
                                                <p>👥Seguidores: <span>${user.followers}</span></p>
                                                <p>👥Seguindo: <span>${user.following}</span></p>
                                            </div>
                                        </div>
                                    </div>`
        let reposItens = ''
        user.repositories.forEach(repo => reposItens += `<li>
                                                            <a href="${repo.html_url}" target="_blank">
                                                                <h3>${repo.name}</h3> 
                                                                <div>
                                                                    <span>🍴 ${repo.forks}</span> 
                                                                    <span>⭐ ${repo.stargazers_count ?? '0'}</span> 
                                                                    <span>👀 ${repo.watchers}</span> 
                                                                    <span>👨🏻‍💻 ${repo.language}</span>
                                                                </div>
                                                            </a>
                                                        </li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories">
                                                <h2>Repositórios</h2>
                                                <ul>${reposItens}</ul>
                                            </div>`
        }    
        let eventList = ''
        user.events.forEach(event => { 
            if(event.type === 'CreateEvent'){
            eventList += `<li>
                            <span>${event.repo.name}</span> - ${event.payload.description}
                          </li>`
            }
            if(event.type === 'PushEvent'){
                eventList += `<li>
                                <span>${event.repo.name}</span> - ${event.payload.commits[0].message}
                              </li>`
            }                   
        })
        if(eventList.length > 0){
            this.userProfile.innerHTML += `<div class="events">
                                                <h2>Eventos</h2>
                                                <ul>${eventList}</ul>
                                           </div>`
        }                             
    },
    renderNotFound(){
        this.userProfile.innerHTML = '<h2>Usuário não encontrado</h2>'
    }
}

export { screen }