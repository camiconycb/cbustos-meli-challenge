import mutant from '../src/helpers/getIsMutant';

describe('get is Mutant', () => { 
  it('should respond false', () => {
    const humanDna = ['ATGTCC', 'ACGTGC', 'TACGAT', 'CGCCGG', 'CCACTC', 'TCCACC']
    const isMutant = mutant(humanDna);
    expect(isMutant).toBe(false);
  });
  it('should respond true', () => {
    const mutantDna = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
    const isMutant = mutant(mutantDna);
    expect(isMutant).toBe(true);
  });
});