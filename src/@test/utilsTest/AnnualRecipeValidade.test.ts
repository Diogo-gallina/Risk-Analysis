import { AnnualRecipeValidade } from '../../utils/AnnualRecipeValidade';

// Seu teste aqui

test('calculateSerasaScore returns the correct score', () => {
    const annualRecipe = 500000;
    const score = AnnualRecipeValidade.calculateSerasaScore(annualRecipe);
    expect(score).toBe(5);
});