const { celebrate, Joi } = require('celebrate');
const isUrl = require('validator/lib/isURL');
const ValidationError = require('../errors/ValidationError');

const validateUrl = (url) => {
  const validate = isUrl(url);
  if (validate) {
    return url;
  }
  throw new ValidationError('Некорректный адрес URL');
};

const validateCreateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().custom(validateUrl),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateGetUser = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().alphanum().length(24),
  }),
});

const validateEditProfile = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }),
});

const validateEditAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().custom(validateUrl),
  }),
});

const validatePostCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().required().custom(validateUrl),
  }),
});

const validateCardId = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().alphanum().length(24),
  }),
});

module.exports = {
  validateCreateUser,
  validateLogin,
  validateGetUser,
  validateEditProfile,
  validateEditAvatar,
  validatePostCard,
  validateCardId,
};
