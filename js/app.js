import { getRandomResults, MIN_NUMBER, MAX_NUMBER } from './pattatras.js';

const resultsBody = document.getElementById('results-body');
const btnGenerate = document.getElementById('btn-generate');

function createCell(content, type, isResult) {
  const cell = document.createElement('td');

  if (isResult) {
    cell.classList.add('result');

    if (type !== 'number') {
      // Badge stylisé pour Patte, Tatras et Pattatras ; texte simple pour les nombres bruts
      cell.dataset.type = type;
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = content;
      cell.append(badge);
    } else {
      cell.textContent = content;
    }
  } else {
    cell.classList.add('number');
    cell.textContent = content;
  }

  return cell;
}

function renderResults() {
  const results = getRandomResults();
  const rows = results.map((result) => {
    const row = document.createElement('tr');
    row.append(
      createCell(result.number, result.type, false),
      createCell(result.value, result.type, true)
    );
    return row;
  });

  resultsBody.replaceChildren(...rows);
}

btnGenerate.addEventListener('click', renderResults);

renderResults();
