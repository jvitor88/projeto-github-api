import { baseUrl, repositoriesQuantity } from "/src/scripts/variables.js"

async function getRepositories(name){
    const response = await fetch(`${baseUrl}/${name}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

export { getRepositories }