function errorHandlerMiddleware(error, request, response, next) {
    response.status(500).json({ message:  "There was an error."})
}

export default errorHandlerMiddleware;