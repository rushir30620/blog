const pool = require('../db/db');

exports.deleteBlog = async(req, res) => {
    try {
        const {id} = req.params;
        let data = {};
        const blogData = await pool.query("DELETE FROM BLOG WHERE id = $1 returning *", [id]);
        data = blogData.rows[0];

        if(data) {
            res.status(200).json({data, msg: "Success!! Your blog deleted successfully" });
        }
        else{
            res.status(200).json({data, msg: "Failer!! Blog is not deleted" });
        }
       
    } catch (error) {
        res.status(500).json(error);
        // console.log(error); 
    }
};