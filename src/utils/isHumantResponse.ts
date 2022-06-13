import { Context } from 'koa';
import CONSTS from '../config/constants';

const isHumanResponse = (ctx: Context) => {
  ctx.status = CONSTS.HTTP.CODES.FORBIDDEN;
  const response = {
    status: ctx.status,
    message: CONSTS.HTTP.MESSAGE.FORBIDDEN,
  };
  ctx.body = response;
  return response;
};

export default isHumanResponse;
