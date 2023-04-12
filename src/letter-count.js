// 'cat' -> { c: 1, a: 1, t: 1}

export const getLetterCount = (str) => {
  const letters = str.split('');

  const letterCount = letters.reduce((acc, curr) => {
    acc[curr] ? (acc[curr] += 1) : (acc[curr] = 1);
    return acc;
  }, {});

  return letterCount;
};
