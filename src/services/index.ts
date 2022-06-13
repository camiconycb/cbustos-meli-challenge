import { Context } from 'koa';
import ERROR from '../config/errors';
import mutant from '../helpers/getIsMutant';
import { Service } from '../interfaces/service';

import { createDna, findDna } from '../helpers/dbHelpers';
import isMutantResponse from '../utils/isHumantResponse';
import isHumanResponse from '../utils/isMutantResponse';

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
  };

  return services;
};
