export const searchUserService = async (username) => {
    return await fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
}