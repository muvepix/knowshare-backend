import { Router } from 'express';

import PostController from './app/controllers/PostController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import LikeController from './app/controllers/LikeController';
import DislikeController from './app/controllers/DislikeController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => res.redirect('https://knowshare.netlify.com'));

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/posts', PostController.index);

// routes.use(authMiddleware);
routes.post('/posts', PostController.store);

routes.post('/posts/:id/like', LikeController.store);
routes.post('/posts/:id/dislike', DislikeController.store);

export default routes;
