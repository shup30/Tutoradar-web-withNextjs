const express = require("express");
const {
  getPosts,
  getPosts_programming,
  createPost,
  postsByUser,
  postById,
  postBySlug,
  isPoster,
  updatePost,
  deletePost,
  photo,
  singlePost,
  like,
  unlike,
  comment,
  uncomment,
  updateComment
} = require("../controllers/post");
const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { createPostValidator } = require("../validator");

const router = express.Router();

router.get("/posts", getPosts);
router.get("/posts/programming", getPosts_programming);

// like unlike
router.put("/post/like", requireSignin, like);
router.put("/post/unlike", requireSignin, unlike);

// comments
router.put("/post/comment", requireSignin, comment);
router.put("/post/uncomment", requireSignin, uncomment);
router.put("/post/updatecomment", requireSignin, updateComment);

// post routes
router.post(
  "/post/new/:userId",
  requireSignin,
  createPost,
  createPostValidator
);
router.get("/posts/by/:userId", requireSignin, postsByUser);
router.get("/post/:slug", singlePost);
router.put("/post/:slug", requireSignin, isPoster, updatePost);
router.delete("/post/:slug", requireSignin, isPoster, deletePost);
// photo
router.get("/post/photo/:postId", photo);

// any route containing :userId, our app will first execute userById()
router.param("userId", userById);
// any route containing :postId, our app will first execute postById()
router.param("postId", postById);
router.param("slug", postBySlug);


module.exports = router;
