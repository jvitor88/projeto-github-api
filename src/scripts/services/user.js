
async function getUser(name){
    const response = await fetch(`https://api.github.com/users/${name}`)
    return await response.json()
}

export { getUser }