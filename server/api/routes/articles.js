const $ = require('../../controllers/articles_controller.js')
const verify = require('../../middleware/verify.js')

export default async (router) => {
	router.get('/articles', verify, $.getAllArticles)
		.post('/articles', verify, $.createArticle)
		.patch('/articles/:id', verify, $.modifyArticle)
		.get('/articles/:id', $.getArticle)
		.delete('/articles/:id', verify, $.deleteArticle)
		.get('/publishArticles', $.getAllPublishArticles)
}