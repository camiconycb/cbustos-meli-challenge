import { Context } from 'koa';
import Router from '@koa/router';

import CONSTS from '../config/constants';

export default () => {
  const router = new Router();
  router.get('/isHealthy', (ctx: Context) => {
    ctx.status = CONSTS.HTTP.CODES.OK;
    ctx.body = 'isHealthy';
  });

  router.post('/mutant', async (ctx: Context) => {
  });

  router.get('/stats', async (ctx: Context) => {
  });
  return router;
};
