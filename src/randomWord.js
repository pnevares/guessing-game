export default () => {
  const words = [
    'VIABLE',
    'ASCEND',
    'COUPLE',
    'DOWNER',
    'EXEMPT',
    'PRAISE',
    'ADVICE',
    'ZOMBIE',
    'RECIPE',
    'ABOUND',
  ];

  return words[Math.floor(Math.random() * words.length)].toUpperCase();
};
