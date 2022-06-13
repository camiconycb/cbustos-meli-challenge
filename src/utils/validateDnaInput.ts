const validateDnaInput = (dna: string[]) => {
  const validLetters = dna.every((el) => /^[GCTA]*$/.test(el));
  if (dna.length !== dna[0].length || !validLetters) {
    return false;
  }
  return true;
};

export default validateDnaInput;
