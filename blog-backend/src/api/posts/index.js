const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.list);
posts.get('/:id', postsCtrl.checkObjectId, postsCtrl.list);
posts.delete('/:id', postsCtrl.checkObjectId, postsCtrl.list);
posts.patch('/:id', postsCtrl.checkObjectId, postsCtrl.list);

export default posts;
