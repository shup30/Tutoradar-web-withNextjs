const Post = require("../models/post");
const formidable = require("formidable");
const fs = require("fs");
const _ = require("lodash");

exports.postById = (req, res, next, id) => {
  Post.findById(id)
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name role")
    .select("_id title body created likes comments photo")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(400).json({
          error: err
        });
      }
      req.post = post;
      next();
    });
};

exports.postBySlug = (req, res, next, slug) => {
  Post.findBySlug(slug)
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name role")
    .select("_id title body created likes comments photo")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(400).json({
          error: err
        });
      }
      req.post = post;
      next();
    });
};


// exports.getPosts_category_webdev = async (req, res) => {
//   const currentPage = req.query.page || 1;
//   const perPage = 6;
//   let totalItems;
//   const postsbycategory = await Post.find({ category: "Web Development" })
//     .then(count => {
//       totalItems = count;
//       return Post.find({ category: "Web Development" })
//         .skip((currentPage - 1) * perPage)
//         .populate("comments", "text created")
//         .populate("comments.postedBy", "_id name")
//         .populate("postedBy", "_id name")
//         .select("_id title body created likes")
//         .limit(perPage)
//         .sort({ created: -1 });
//     })
//     .then(postsbycategory => {
//       res.status(200).json(postsbycategory);
//     })
//     .catch(err => console.log(err));
// };

exports.getPosts_programming = async (req, res) => {
  const currentPage = req.query.page;
  const ptq = req.query.ptq;
  const fop = req.query.fop;
  const subcat = req.query.cat;
  const subcatQuery = subcat === "Python" || subcat === "Javascript" || subcat === "Php" ? { subcategory: subcat } : {};
  const postTypeQuery =
    ptq === "App" || ptq === "Video" || ptq === "Book"
      ? { postType: ptq }
      : {};
  const freeOrPaidQuery =
    fop === "Free" || fop === "Paid" ? { freeOrPaid: fop } : {};
  console.log("CURRENTPAGE:", currentPage, subcatQuery, postTypeQuery, freeOrPaidQuery);
  const perPage = 10;
  let totalItems;

  const posts = await Post.find({ $and: [{ category: "Programming" }, subcatQuery, postTypeQuery, freeOrPaidQuery] })
    .countDocuments()
    .then(count => {
      totalItems = count;
      return Post.find({ $and: [{ category: "Programming" }, subcatQuery, postTypeQuery, freeOrPaidQuery] })
        .skip((currentPage - 1) * perPage)
        .populate("comments", "text created")
        .populate("comments.postedBy", "_id name")
        .populate("postedBy", "_id name")
        .select("_id title body created category subcategory postType likes freeOrPaid url slug source myslug")
        .limit(perPage)
        .sort({ created: -1 });
    })
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => console.log(err));
};

exports.getPosts = async (req, res) => {
  const currentPage = req.query.page;
  const ptq = req.query.ptq;
  const fop = req.query.fop;
  const cat = req.query.cat;
  const catQuery = cat === "Programming" || cat === "Designing" || cat === "Engineering" ? { category: cat } : {};
  const postTypeQuery =
    ptq === "App" || ptq === "Video" || ptq === "Book"
      ? { postType: ptq }
      : {};
  const freeOrPaidQuery =
    fop === "Free" || fop === "Paid" ? { freeOrPaid: fop } : {};
  console.log("CURRENTPAGE:", currentPage, catQuery, postTypeQuery, freeOrPaidQuery);
  const perPage = 10;
  let totalItems;

  const posts = await Post.find({ $and: [catQuery, postTypeQuery, freeOrPaidQuery] })
    .countDocuments()
    .then(count => {
      totalItems = count;
      return Post.find({ $and: [catQuery, postTypeQuery, freeOrPaidQuery] })
        .skip((currentPage - 1) * perPage)
        .populate("comments", "text created")
        .populate("comments.postedBy", "_id name")
        .populate("postedBy", "_id name")
        .select("_id title body created category subcategory postType likes freeOrPaid url slug source")
        .limit(perPage)
        .sort({ created: -1 });
    })
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => console.log(err));
};

exports.createPost = (req, res, next) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded"
      });
    }
    let post = new Post(fields);

    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    post.postedBy = req.profile;

    if (files.photo) {
      post.photo.data = fs.readFileSync(files.photo.path);
      post.photo.contentType = files.photo.type;
    }
    post.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      res.json(result);
    });
  });
};

exports.postsByUser = (req, res) => {
  Post.find({ postedBy: req.profile._id })
    .populate("postedBy", "_id name")
    .select("_id title body created likes")
    .sort("_created")
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      res.json(posts);
    });
};

exports.isPoster = (req, res, next) => {
  let sameUser = req.post && req.auth && req.post.postedBy._id == req.auth._id;
  let adminUser = req.post && req.auth && req.auth.role === "admin";
  let isPoster = sameUser || adminUser;

  if (!isPoster) {
    return res.status(403).json({
      error: "User is not authorized"
    });
  }
  next();
};

exports.deletePost = (req, res) => {
  let post = req.post;
  post.remove((err, post) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json({
      message: "Post deleted successfully"
    });
  });
};

exports.updatePost = (req, res, next) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Photo could not be uploaded"
      });
    }
    // save post
    let post = req.post;
    post = _.extend(post, fields);
    post.updated = Date.now();

    if (files.photo) {
      post.photo.data = fs.readFileSync(files.photo.path);
      post.photo.contentType = files.photo.type;
    }

    post.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      res.json(post);
    });
  });
};

exports.photo = (req, res, next) => {
  res.set("Content-Type", req.post.photo.contentType);
  return res.send(req.post.photo.data);
};

exports.singlePost = (req, res) => {
  return res.json(req.post);
};

exports.like = (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    { $push: { likes: req.body.userId } },
    { new: true }
  ).exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    } else {
      res.json(result);
    }
  });
};

exports.unlike = (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    { $pull: { likes: req.body.userId } },
    { new: true }
  ).exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    } else {
      res.json(result);
    }
  });
};

exports.comment = (req, res) => {
  let comment = req.body.comment;
  comment.postedBy = req.body.userId;

  Post.findByIdAndUpdate(
    req.body.postId,
    { $push: { comments: comment } },
    { new: true }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      } else {
        res.json(result);
      }
    });
};

exports.uncomment = (req, res) => {
  let comment = req.body.comment;

  Post.findByIdAndUpdate(
    req.body.postId,
    { $pull: { comments: { _id: comment._id } } },
    { new: true }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      } else {
        res.json(result);
      }
    });
};

exports.updateComment = (req, res) => {
  let comment = req.body.comment;

  Post.findByIdAndUpdate(req.body.postId, {
    $pull: { comments: { _id: comment._id } }
  }).exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    } else {
      Post.findByIdAndUpdate(
        req.body.postId,
        { $push: { comments: comment, updated: new Date() } },
        { new: true }
      )
        .populate("comments.postedBy", "_id name")
        .populate("postedBy", "_id name")
        .exec((err, result) => {
          if (err) {
            return res.status(400).json({
              error: err
            });
          } else {
            res.json(result);
          }
        });
    }
  });
};
