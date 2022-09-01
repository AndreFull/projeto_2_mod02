const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

const express = require('express');
const router = express.Router();




const cardController = require('../controllers/card.controller');
//validações das rotas
const { validId, validObjectBody } = require('../middlewares/card.middleware');

//Rotas do swagger



//Rotas de Cards
router.get('/all-cards',cardController.findAllCardsController)
router.get('/one-card/:id', validId, cardController.findByIdCardController)

router.post('/create-card', validObjectBody, cardController.createCardController)

router.put('/update-card/:id', validId, validObjectBody, cardController.updateCardController)

router.delete('/delete-card/:id', validId, validObjectBody, cardController.deleteCardController)


//eportar modulo

module.exports = router





