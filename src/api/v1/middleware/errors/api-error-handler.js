const ApiError = require("./api-error");

function apiErrorHandler(err, req, res, next) {
    //just in dev, not in prod because console.error isn't async
    console.error(err);

    if (err instanceof ApiError) {
        res.status(err.code).json(err.message);
        return;
    }

    res.status(500).json('something went wrong');
}

module.exports = apiErrorHandler;