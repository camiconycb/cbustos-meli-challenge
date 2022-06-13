import { Context } from 'koa';
import { Service } from '../interfaces/service';

export default () => {
  const services: Service = {};

  services.isMutant = async (dna: string[], ctx: Context): Promise<any> => {

  };
  services.stats = async (ctx: Context) => {
  };

  return services;
};
