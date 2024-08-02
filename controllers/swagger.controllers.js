const logger = require('../middleware/logger/logger');
const SwaggerValidator = require('../validators/swagger.validator');

const SwaggerController = {
    generateSwaggerDefinition: async (req, res) => {
        try {
            const { body } = req.body;

            // validate request body
            await SwaggerValidator.validateSwaggerBody(body);

            res.json({
                success: true,
                message: "wahal balla",
            });
        } catch (error) {
            res.json({
                success: false,
                error: error.message,
            });

            logger('error', false, '500', error.message, req);
        }
    }
};

module.exports = SwaggerController;