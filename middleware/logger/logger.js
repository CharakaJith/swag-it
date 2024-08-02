const loggerIndex = require('./index');

const logger = (logType, resStatus, statusCode, message, req, stack) => {
    const logBody = {
        logType: logType,
        endpoint: req.originalUrl,
        request: {
            request: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
            method: req.method,
        },
        response: {
            success: resStatus,
            statusCode: statusCode,
            message: {
                message,
            },
            ...(stack && {
                stack: stack,
            })
        },
    };

    const logString = JSON.stringify(logBody).split('\n');

    if (logType === 'info') {
        loggerIndex.info(logString);
    } else if (logType === 'debug') {
        loggerIndex.debug(logString);
    } else {
        loggerIndex.error(logString);
    }
};

module.exports = logger;