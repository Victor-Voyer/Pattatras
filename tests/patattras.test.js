import { describe, it, expect } from 'vitest';
import { classifyNumber } from '../js/pattatras.js';

describe('classifyNumber', () => {
  it('affiche le nombre tel quel si ni multiple de 3 ni de 5', () => {
    // toEqual : comparaison d'objets strictement identiques (valeur et type du return)
    expect(classifyNumber(7)).toEqual({ value: '7', type: 'number' });
  });

  it('affiche Patte pour un multiple de 3', () => {
    expect(classifyNumber(9)).toEqual({ value: 'Patte', type: 'patte' });
  });

  it('affiche Tatras pour un multiple de 5', () => {
    expect(classifyNumber(10)).toEqual({ value: 'Tatras', type: 'tatras' });
  });

  it('affiche Pattatras pour un multiple de 3 et 5', () => {
    expect(classifyNumber(15)).toEqual({ value: 'Pattatras', type: 'pattatras' });
  });
});