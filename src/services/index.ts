import { Context } from 'koa';
import ERROR from '../config/errors';
import mutant from '../helpers/getIsMutant';
import { Service } from '../interfaces/service';
import MutantSchema from '../models/Mutant';
import HumanSchema from '../models/Human';
import { createDna, findDna } from '../helpers/dbHelpers';
import isHumanResponse from '../utils/isHumantResponse';
import isMutantResponse from '../utils/isMutantResponse';
import CONSTS from '../config/constants';
import { responseType } from '../types/response';

export default () => {
  const services: Service = {};

  services.isMutant = async (dna: string[], ctx: Context): Promise<any> => {
    try {
      let response;
      const res: {
        exist: boolean,
        isMutant?: boolean
      } = await findDna(dna);
      if (res.exist) {
        if (res.isMutant) {
          response = isMutantResponse(ctx);
        } else {
          response = isHumanResponse(ctx);
        }
      } else {
        const dnaIsMutant = mutant(dna);
        if (dnaIsMutant) {
          response = isMutantResponse(ctx);
        } else {
          response = isHumanResponse(ctx);
        }
        try {
          await createDna(dna, dnaIsMutant);
        } catch (error) {
          return response;
        }
        return response;
      }
    } catch (error: any) {
      throw new Error(ERROR.INTERNAL_SERVER_ERROR);
    }
  };
  services.stats = async (ctx: Context) => {
    try {
      const mutantStats = await MutantSchema.collection.stats();
      const humanStats = await HumanSchema.collection.stats();

      const mutantCount = mutantStats.count;
      const humanCount = humanStats.count;

      const stats = {
        count_mutant_dna: mutantCount,
        count_human_dna: humanCount,
        ratio: mutantCount / humanCount,
      };
      ctx.status = CONSTS.HTTP.CODES.OK;
      const response: responseType = {
        status: ctx.status,
        message: CONSTS.HTTP.MESSAGE.OK,
        data: stats,
      };
      ctx.body = response;

      return response;
    } catch (error) {
      throw new Error(ERROR.INTERNAL_SERVER_ERROR);
    }
  };

  return services;
};
