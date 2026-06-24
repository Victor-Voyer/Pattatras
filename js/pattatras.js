// Plage imposée par le sujet (1–6457)
export const MIN_NUMBER = 1;
export const MAX_NUMBER = 6457;

// Nombre de résultats affichés par lot
export const COUNT = 10;

export function classifyNumber(n) {
  const isMultipleOf3 = n % 3 === 0;
  const isMultipleOf5 = n % 5 === 0;

  if (isMultipleOf3 && isMultipleOf5) {
    return { value: 'Pattatras', type: 'pattatras' };
  }

  if (isMultipleOf3) {
    return { value: 'Patte', type: 'patte' };
  }

  if (isMultipleOf5) {
    return { value: 'Tatras', type: 'tatras' };
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
