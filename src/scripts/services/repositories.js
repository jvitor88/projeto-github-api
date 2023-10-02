
async function getRepositories(name){
    const response = await fetch(`https://api.github.com/users/${name}/repos?per_page=10`)
    return await response.json()
}

export { getRepositories }