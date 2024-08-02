const SwaggerValidator = {
    validateSwaggerBody: async (body) => {
        if (!body || body.trim().length === 0) {
            throw new Error('Request body is empty!');
        }

        if ((body.startsWith('{') && !body.endsWith('}')) || (body.startsWith('[') && !body.endsWith(']'))) {
            throw new Error('Invalid JSON format!');
        }
    }
};

module.exports = SwaggerValidator;