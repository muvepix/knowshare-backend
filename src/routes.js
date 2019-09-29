import { Router } from 'express';

import PostController from './app/controllers/PostController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/posts', PostController.index);

routes.use(authMiddleware);
routes.post('/posts', PostController.store);

export default routes;
