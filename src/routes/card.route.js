const route = require('express').Router();
const cardController = require('../controllers/card.controller');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

//validações das rotas
const { validId, validObjectBody } = require('../middlewares/card.middleware');

//Rotas do swagger
route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

//Rotas de Cards
route.get('/all-cards',cardController.findAllCardsController)
route.get('/one-card/:id', validId, cardController.findByIdCardController)

route.post('/create-card', validObjectBody, cardController.createCardController)

route.put('/update-card/:id', validId, validObjectBody, cardController.updateCardController)

route.delete('/delete-card/:id', validId, validObjectBody, cardController.deleteCardController)


//eportar modulo

module.exports = route



















