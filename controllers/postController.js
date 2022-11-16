const postService = require('../services/postService');

const createPost = async (req, res) => {
    try {
        const post = await postService.createPost(req.body, req.userId);

        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(401).json({
            message: 'Access denied',
        });
    }
};

const getPost = async (req, res) => {
    try {
        const post = await postService.getPost(req.params.id);

        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(404).json({
            message: 'Post not found',
        });
    }
};

const getCurrentUserPosts = async (req, res) => {
    try {
        const posts = await postService.getCurrentUserPosts(req.userId);

        res.json(posts);
    } catch (err) {
        console.log(err);
        res.status(401).json({
            message: 'Access denied',
        });
    }
};

module.exports = { createPost, getPost, getCurrentUserPosts };