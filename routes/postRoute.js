const router = require('express').Router();
const checkAuth = require('../middlewares/checkAuth');
const postController = require('../controllers/postController');

router.post('/', checkAuth, postController.createPost);
router.get('/:id', checkAuth, postController.getPost);
router.get('/', checkAuth, postController.getCurrentUserPosts);
router.get('/user/:userId', checkAuth, postController.getUserPosts);
router.put('/:id', checkAuth, postController.updatePost);
router.delete('/:id', checkAuth, postController.deletePost);

module.exports = router;