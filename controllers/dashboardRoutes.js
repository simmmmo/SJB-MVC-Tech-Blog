const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes:['id', 'title', 'body_content', 'created_at'],
      order: [['created_at', 'DESC']],
      include: [
        {
          model: Comment,
          attributes: ['id', 'body_comment', 'user_id', 'post_id', 'created_at'],
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
        },
        {
          model: User,
          attributes: ['username'],
        }
      ],
    });

    const posts = postData.map((postData) => postData.get({ plain: true }));
    console.log(postData);
    console.log(posts);
    res.render('dashboard', {
      posts,
      logged_in: true,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/edit/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.findAll({
//       where: {
//         id: req.params.id
//       },
//       attributes:['id', 'title', 'body_content', 'created_at'],
//       include: [
//         {
//           model: Comment,
//           attributes: ['id', 'body_comment', 'user_id', 'post_id', 'created_at'],
//           include: [
//             {
//               model: User,
//               attributes: ['username'],
//             },
//           ],
//         },
//       ],
//     });
//     // const post = postData.map((postData) => {
//     //   return postData.get({ plain: true });
//     // });
//     const post = postData.get({ plain: true });
//     // const post = postData.map((postData) => postData.get({ plain: true }));
//     // console.log(postData);
//     console.log(post);
//     console.log(post.title);
//     res.render('editPost', {
//       post,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ['id', 'body_comment', 'post_id', 'user_id'],
          include: { model: User, attributes: ['username'] },
        },
      ],
    });

    //Serialize data so the template can read it
    const post = postData.get({ plain: true });

    res.render('editPost', {
      post,
      logged_in: req.session.logged_in,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;