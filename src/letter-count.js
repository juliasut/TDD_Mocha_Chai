// 'cat' -> { c: 1, a: 1, t: 1}

export const getLetterCount = (str) => {
  const letters = str.split('');
  let letterCount = {};

  letters.forEach((letter) => {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter] += 1;
    }
  });

  return letterCount;
};
