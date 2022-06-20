const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: Comment,
          attributes: ['id', 'body_comment', 'user_id', 'post_id', 'created_at'],
          include: [
            {
              model: User,
              attributes: ['username'],
            }
          ]
        },
        {
          model: User,
          attributes: ['username'],
        }
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((postData) => postData.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {
        id: req.params.id
      },
      attributes:['id', 'title', 'body_content', 'user_id', 'created_at'],
      include: [
        {
          model: Comment,
          attributes: ['id', 'body_comment', 'user_id', 'post_id', 'created_at'],
          include: [
            {
              model: User,
              attributes: ['username'],
            }
          ]
        },
        {
          model: User,
          attributes: ['username'],
        }
      ],
    });

    const posts = postData.get({ plain: true });

    res.render('singlePost', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
