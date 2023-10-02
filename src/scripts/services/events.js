
async function getEvents(name){
    const response = await fetch(`https://api.github.com/users/${name}/events?per_page=10`)
    return await response.json()
}

export { getEvents }