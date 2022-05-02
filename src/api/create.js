const pool = require('../db/db');


exports.createBlog = async(req, res) => {
    try {
        let {title, imagename, imagepath, discription, publishedDate, author} = req.body;
        // console.log(req.body.file);
        req.body.imagename = req.file.originalname;
        req.body.imagepath = "/images/" + req.body.imagename;
        imagename = req.body.imagename;
        imagepath = req.body.imagepath;
        const blogData = await pool.query("INSERT INTO BLOG(title, imagename, imagepath, discription, publishedDate, author) VALUES($1, $2, $3, $4, $5, $6) returning *", [title, imagename, imagepath, discription, publishedDate, author]);

        console.log(blogData);
        res.json(blogData.rows[0]);
    } catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};