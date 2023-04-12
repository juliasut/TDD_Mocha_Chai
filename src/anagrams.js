export const isAnagram = (str1, str2) => {
  const str1Letters = str1.split('');
  const str2Letters = str2.split('');

  return str1Letters.every((letter) => str2Letters.includes(letter));
};
