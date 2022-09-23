function errorHandlerMiddleware(error, request, response, next) {
    console.log(error)
    response.status(500).json({ message:  "There was an error."})
}

export default errorHandlerMiddleware;