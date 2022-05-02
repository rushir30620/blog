const { Joi } = require('celebrate');

const params = {
    id: Joi.number()
            .integer()
            .required()
            .description('Id of the user')
};
 
const BlogSchema = {
    add: {
        body: Joi.object({
            title: Joi.string()
                    .required()
                    .example('Nodejs')
                    .description('Title of the blog'),
            discription: Joi.string()
                    .required()
                    .example('This my first blog')
                    .description('Blog discription'),
            publishedDate: Joi.string()
                    .required()
                    .example('28/04/2022'),
            author: Joi.string()
                    .required()
                    .example('Rushikesh Rathod')
        })
    }
};

module.exports = BlogSchema;