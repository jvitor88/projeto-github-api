const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    profile: '',
    followers: '',
    following: '',
    repositories: [],
    events: [],
    setInfo(githubUser){
        this.avatarUrl = githubUser.avatar_url
        this.name = githubUser.name
        this.bio = githubUser.bio
        this.userName = githubUser.userName
        this.profile = githubUser.html_url
        this.followers = githubUser.followers
        this.following = githubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setEvents(events){
        this.events = events
    }
}

export { user }