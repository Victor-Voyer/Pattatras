// Plage imposée par le sujet (1–6457)
export const MIN_NUMBER = 1;
export const MAX_NUMBER = 6457;

// Nombre de résultats affichés par lot
export const COUNT = 10;

// Règles de classification -> amélioration cognitive 
// Une seule lecture des différentes règles
const rules = [
  {test: (n) => n % 3 === 0 && n % 5 === 0, value: 'Pattatras', type: 'pattatras'},
  {test: (n) => n % 3 === 0, value: 'Patte', type: 'patte'},
  {test: (n) => n % 5 === 0, value: 'Tatras', type: 'tatras'},
];

export function classifyNumber(n) {
  // On cherche la règle qui correspond au nombre
  const rule = rules.find((rule) => rule.test(n));
  if (rule) {
    return { value: rule.value, type: rule.type };
  }
  return { value: String(n), type: 'number' };
}

export function getRandomNumber() {
  return Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
}

export function getRandomResults(count = COUNT) {
  // Évite les doublons dans un même lot de tirages
  const numbers = new Set();

  while (numbers.size < count) {
    numbers.add(getRandomNumber());
  }

  return [...numbers].map((number) => {
    const { value, type } = classifyNumber(number);
    return { number, value, type };
  });
}
