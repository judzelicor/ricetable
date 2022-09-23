function register(request, response) {
    response.send("User sucessfully registered!")
}

function login(request, response) {
    response.send("User successfully logged in!")
}

function updateUser(request, response) {
    response.send("User successfully updated!")
}

export { 
    register, 
    login, 
    updateUser 
};