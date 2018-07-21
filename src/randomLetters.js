export default (word) => {
  const letters = word
    .split('')
    .reduce((a, c) => (a.indexOf(c) === -1 ? a.concat(c) : a), []);

  const originalCount = letters.length;
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  do {
    const randomLetter = alphabet[Math.floor(alphabet.length * Math.random())];
    if (letters.indexOf(randomLetter) === -1) {
      letters.push(randomLetter);
    }
  } while (letters.length < originalCount * 3);
  return letters.sort();
};
