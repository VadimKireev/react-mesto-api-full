const Card = require('../models/card');
const ValidationError = require('../errors/ValidationError');
const CommonError = require('../errors/CommonError');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

module.exports.postCard = (req, res, next) => {
  const { name, link, owner = req.user._id } = req.body;
  Card.create({ name, link, owner })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new ValidationError('Переданы некорректные данные'));
      }
      return next(new CommonError('Что-то пошло не так'));
    });
};

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send({ cardsList: cards }))
    .catch(() => next(new CommonError('Что-то пошло не так')));
};

module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      }
      if (String(card.owner) !== req.user._id) {
        throw new ForbiddenError('У вас нет прав на удаление этой карточки');
      }
      return card;
    })
    .then((card) => card.remove())
    .then(() => res.send({ message: 'Карточка успешно удалена' }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new ValidationError('Переданы некорректные данные'));
      }
      if (err.name === 'NotFoundError') {
        return next(err);
      }
      if (err.name === 'ForbiddenError') {
        return next(err);
      }
      return next(new CommonError('Что-то пошло не так'));
    });
};

module.exports.putLike = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      }
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new ValidationError('Переданы некорректные данные'));
      }
      if (err.name === 'NotFoundError') {
        return next(err);
      }
      return next(new CommonError('Что-то пошло не так'));
    });
};

module.exports.deleteLike = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      }
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new ValidationError('Переданы некорректные данные'));
      }
      if (err.name === 'NotFoundError') {
        return next(err);
      }
      return next(new CommonError('Что-то пошло не так'));
    });
};
