import { Context } from 'koa';
import Router from '@koa/router';

import CONSTS from '../config/constants';
import validateDnaInput from '../utils/validateDnaInput';
import ERROR from '../config/errors';
import Services from '../services';

const services = Services();

export default () => {
  const router = new Router();
  router.get('/isHealthy', (ctx: Context) => {
    ctx.status = CONSTS.HTTP.CODES.OK;
    ctx.body = 'isHealthy';
  });

  router.post('/mutant', async (ctx: Context) => {
    try {
      const { dna } = ctx.request.body;
      const resp = validateDnaInput(dna);
      if (!resp) {
        throw new Error(ERROR.VALIDATE_DNA_INPUT);
      }
      await services.isMutant(dna, ctx);

      return ctx.body;
    } catch (error: any) {
      ctx.status = CONSTS.HTTP.CODES.INTERNAL_SERVER_ERROR;
      ctx.body = error.message;
      return ctx.body;
    }
  });

  router.get('/stats', async (ctx: Context) => {
    try {
      await services.stats(ctx);
      return ctx.body;
    } catch (error: any) {
      ctx.status = CONSTS.HTTP.CODES.INTERNAL_SERVER_ERROR;
      ctx.body = error.message;
      return ctx.body;
    }
  });
  return router;
};
