const pool = require('../db/db');


exports.updateBlog = async(req, res) => {
    try {
        const {id} = req.params;
        let {title, imagename, imagepath, discription, publishedDate, author} = req.body;
        req.body.imagename = req.file.originalname;
        req.body.imagepath = "/images/" + req.body.imagename;
        imagename = req.body.imagename;
        imagepath = req.body.imagepath;
        const blogData = await pool.query("UPDATE BLOG SET title = $1, imagename = $2, imagepath = $3, discription = $4, publishedDate = $5, author = $6 returning *", 
                                [title, imagename, imagepath, discription, publishedDate, author]);
        // console.log(blogData);
        res.status(200).json(blogData.rows[0]);
    } catch (error) {
        console.log(error);

        res.status(500).json(error);
    }
};