const express = require('express');
const router = express.Router();
const SwaggerController = require('../controllers/swagger.controllers');

router.post('/', SwaggerController.generateSwaggerDefinition);

module.exports = router;
