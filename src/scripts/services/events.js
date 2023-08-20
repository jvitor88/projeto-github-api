import { baseUrl, repositoriesQuantity } from "/src/scripts/variables.js"

async function getEvents(name){
    const response = await fetch(`${baseUrl}/${name}/events?per_page=${repositoriesQuantity}`)
    return await response.json()
}

export { getEvents }