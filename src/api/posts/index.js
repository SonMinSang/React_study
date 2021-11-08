const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.list);
posts.get('/:id', postsCtrl.list);
posts.delete('/:id', postsCtrl.list);
posts.put('/:id', postsCtrl.list);
posts.patch('/:id', postsCtrl.list);

module.exports = posts;
