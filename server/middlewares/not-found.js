const notFoundMiddleware = (request, response) => {
    response.status(404).send("Route does not exit");
}

export default notFoundMiddleware;