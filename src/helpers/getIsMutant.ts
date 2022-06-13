const NEXTX = [1, 0, -1, 1];
const NEXTY = [0, 1, 1, 1];

const cellDna = (dna: string[], y: number, x: number) => {
  if (x < 0 || y < 0 || y >= dna.length || x >= dna[0].length) {
    return 'X';
  }

  return dna[y][x];
};
const cellMatrix = (matrix: number[][][], d: number, y: number, x: number) => {
  if (x < 0 || y < 0 || y >= matrix[1].length || x >= matrix[2].length) {
    return 0;
  }

  return matrix[d][y][x];
};
const arrSum = (m: Array<number>): number => m.reduce((sum: number, num: number) => {
  // eslint-disable-next-line no-nested-ternary
  return sum + (Array.isArray(num) ? arrSum(num) : num >= 4 ? 1 : 0);
}, 0);

const mutant = (dna: string[]) => {
  const sy = dna.length;
  const sx = dna[0].length;

  const m : Array<any> = [];
  for (let i = 0; i < 4; i += 1) {
    const matrix = Array.from(new Array(sy), _ => Array(sx).fill(0));
    m.push(matrix);
  }

  for (let d = 0; d < 4; d += 1) {
    for (let y = 0; y < sy; y += 1) {
      for (let x = 0; x < sx; x += 1) {
        const prev = cellDna(dna, y - NEXTY[d], x - NEXTX[d]);
        if (dna[y][x] === prev) {
          m[d][y][x] = cellMatrix(m, d, y - NEXTY[d], x - NEXTX[d]) + 1;
        } else {
          m[d][y][x] = 1;
        }
      }
    }
  }
  const sum = arrSum(m);
  return sum >= 2;
};

export default mutant;
