import { UserModel } from "../models/index.js";

async function register(request, response, next) {
    try {
        const user = await UserModel.create(request.body);

        response.status(201).json({ user });
    }
    catch(error) {
        next(error);
    }
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