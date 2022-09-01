const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const cards = req.body;
  if (
    !cards ||
    !cards.nome ||
    !cards.forca ||
    !cards.vida ||
    !cards.foto
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos do Campeão!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
