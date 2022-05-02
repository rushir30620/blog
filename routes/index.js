var express = require('express');
var router = express.Router();

const createAPI = require('../src/api/create');
const readAPI = require('../src/api/read');
const updateAPI = require('../src/api/update');
const deleteAPI = require('../src/api/delete');

const { celebrate } = require('celebrate');
const blogSchema = require('../src/Validation/blog');
const { add } = blogSchema;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post("/newBlog", celebrate(add), createAPI.createBlog);
router.get("/getAllBlog", readAPI.getAllBlogs);
router.get("/getBlog/:id", readAPI.getBlog);
router.put("/updateBlog/:id", celebrate(add), updateAPI.updateBlog);
router.delete("/deleteBlog/:id", deleteAPI.deleteBlog);

module.exports = router;
