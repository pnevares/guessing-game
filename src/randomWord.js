export default () => {
  const words = [
    'ABOUND',
    'ADVICE',
    'ASCEND',
    'COUPLE',
    'DOWNER',
    'EXEMPT',
    'PRAISE',
    'RECIPE',
    'VIABLE',
    'ZOMBIE',
  ];

  return words[
    Math.floor(Math.random() * words.length)
  ].toUpperCase();
};
