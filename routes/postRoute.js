const router = require('express').Router();
const checkAuth = require('../middlewares/checkAuth');
const postController = require('../controllers/postController');

router.post('/', checkAuth, postController.createPost);
router.get('/:id', checkAuth, postController.getPost);
router.get('/', checkAuth, postController.getCurrentUserPosts);

module.exports = router;