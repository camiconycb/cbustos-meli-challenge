import MutantSchema from '../models/Mutant';
import HumanSchema from '../models/Human';
import { dnaType } from '../types/dna';

const createDna = async (dna: string[], isMutant: boolean): Promise<dnaType> => {
  try {
    const newDna: dnaType = {
      dna: JSON.stringify(dna),
    };
    const dnaModel = isMutant ? new MutantSchema(newDna) : new HumanSchema(newDna);
    return dnaModel.save();
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const findDna = async (dna: string[]): Promise<any> => {
  try {
    const isMutant = await MutantSchema.collection.find({ dna: JSON.stringify(dna) }).count() > 0;

    if (isMutant) {
      return {
        exist: true,
        isMutant,
      };
    } else if (!isMutant) {
      const isHuman = await HumanSchema.collection.find({ dna: JSON.stringify(dna) }).count() > 0;

      if (isHuman) {
        return {
          exist: true,
          isMutant: false,
        };
      } else {
        return {
          exist: false,
        };
      }
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export {
  createDna,
  findDna,
};
