const router = require('express').Router();
const {
  getUsers, getUser, getMyInfo, editProfile, editAvatar,
} = require('../controllers/users');
const {
  validateGetUser, validateEditProfile, validateEditAvatar,
} = require('../middlewares/validations');

router.get('/', getUsers);
router.get('/me', getMyInfo);
router.get('/:userId', validateGetUser, getUser);
router.patch('/me', validateEditProfile, editProfile);
router.patch('/me/avatar', validateEditAvatar, editAvatar);

module.exports = router;
