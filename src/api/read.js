const pool = require('../db/db');

exports.getAllBlogs = async(req, res) => {
    try {
        const blogData = await pool.query("SELECT * FROM BLOG");
        res.json(blogData.rows);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getBlog = async(req, res) => {
    try {
        const {id} = req.params;
        let data = {};
        const blogData = await pool.query("SELECT * FROM BLOG WHERE id = $1", [id]);
        data = blogData.rows[0];

        if(data) {
            res.status(200).json({data, msg: "Success!! Blog Data Found For This Id." });
        }
        else{
            res.status(404).json({msg: "No Blog Data Found For This Id." })
        }
    } catch (error) {
        res.status(500).json(error);
    }
};