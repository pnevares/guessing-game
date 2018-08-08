export default () => {
  const words = [
    'ABOUND',
    'ADVICE',
    'ARTIST',
    'ASCEND',
    'CLASSY',
    'COUPLE',
    'DOWNER',
    'EXEMPT',
    'KNIGHT',
    'PRAISE',
    'RECIPE',
    'REALLY',
    'STARRY',
    'STATES',
    'TRACKS',
    'UNITED',
    'VIABLE',
    'WEEKLY',
    'WOLVES',
    'ZOMBIE',
  ];

  return words[
    Math.floor(Math.random() * words.length)
  ].toUpperCase();
};
