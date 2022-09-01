const cardService = require('../services/card.service');



const findAllCardsController = async (req,res) => 
{
  const allCards = await cardService.findAllCardsService();
  if (allCards.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum Campeão cadastrado!' });
  }
  res.send(allCards);
};
    
const findByIdCardController = async (req,res) =>{
    const idParam = req.params.id;
    const chosenCard = await cardService.findByIdCardService(idParam);
      if (!chosenCard) {
        return res.status(404).send({ message: "Campeão não encontrado!" })
      }
    
      res.send(chosenCard);
}


const createCardController = async (req,res) =>
{
  const card = req.body;
  const newCard = await cardService.createCardService(card);
  res.status(201).send(newCard)
}
    
const updateCardController = async (req,res) =>
{
  const idParam = req.params.id
  const editedCard = req.body
  const updateCard = await cardService.updateCardService(idParam, editedCard)
  res.send(updateCard);
}

const deleteCardController = async (req,res) => 
{
  const idParam = req.params.id
  await cardService.deleteCardService(idParam);
  res.send({ message: `Campeão deletado com sucesso!` });
    
}

module.exports = {
    findAllCardsController,
    findByIdCardController,
    createCardController,
    updateCardController,
    deleteCardController}
