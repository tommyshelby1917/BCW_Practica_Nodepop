'use strict';

const express = require('express');
const router = express.Router();
const Post = require('../../models/Post.js');

const utils = require('../../helpers/utils.js');
const getters = require('../../helpers/getters.js');

// Get posts
router.get('/', async (req, res, next) => {

  try {
    const [filtro, select, skip, sort, limit] = getters.getPosts(req);

    const posts = await Post.list(filtro, select, skip, sort, limit); // getPosts[0] > Filter, getPosts[1] > Select

    res.json({ results: posts });

  } catch (error) {
    next(error);
  }
})

router.get('/tags', async (req, res, next) => {

  try {
    const [filtro, select, skip, sort, limit] = getters.getPosts(req);

    const posts = await Post.list(filtro, select, skip, sort, limit); // getPosts[0] > Filter, getPosts[1] > Select

    let tags = [];

    posts.forEach((e) => {
      e.tags.forEach((e) => {
        if (!tags.includes(e)) {
          tags.push(e);
        }
      })
    });

    res.json({ results: tags });

  } catch (error) {
    next(error);
  }
})


router.post('/', async (req, res, next) => {
  try {

    const postData = req.body;

    const post = new Post(postData);

    // the error function in app.js has been modified for this to work correctly
    post.tags.forEach((e) => {
      utils.verifyTags(e, res);
    });

    const createdPost = await post.save();

    res.status(201).json({ result: createdPost });
  } catch (err) {
    next(err);
  }
});

module.exports = router;