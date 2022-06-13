import { Context } from 'koa';
import CONSTS from '../config/constants';

const isMutantResponse = (ctx: Context) => {
  ctx.status = CONSTS.HTTP.CODES.OK;
  const response = {
    status: ctx.status,
    message: CONSTS.HTTP.MESSAGE.OK,
  };
  ctx.body = response;
  return response;
};

export default isMutantResponse;
