import { DebtLevelValidate } from '../../utils/DebtLevelValidate';

describe('DebtLevelValidate', () => {
  test('scoreDebtLevelCalculate should return a score of -1 when the debt level is greater than 10% of annual recipe', () => {
    const debtLevel = 6000;
    const annualRecipe = 50000;
    const result = DebtLevelValidate.scoreDebtLevelCalculate(debtLevel, annualRecipe);
    expect(result).toBe(-1);
  });

  test('scoreDebtLevelCalculate should return a score of 5 when the debt level is less than or equal to 10% and greater than or equal to 6% of annual recipe', () => {
    const debtLevel = 3000;
    const annualRecipe = 50000;
    const result = DebtLevelValidate.scoreDebtLevelCalculate(debtLevel, annualRecipe);
    expect(result).toBe(5);
  });

  test('scoreDebtLevelCalculate should return a score of 15 when the debt level is less than or equal to 6% and greater than or equal to 1% of annual recipe', () => {
    const debtLevel = 500;
    const annualRecipe = 50000;
    const result = DebtLevelValidate.scoreDebtLevelCalculate(debtLevel, annualRecipe);
    expect(result).toBe(15);
  });

  test('scoreDebtLevelCalculate should return a score of 20 when the debt level is less than or equal to the annual recipe', () => {
    const debtLevel = 0;
    const annualRecipe = 50000;
    const result = DebtLevelValidate.scoreDebtLevelCalculate(debtLevel, annualRecipe);
    expect(result).toBe(20);
  });
});
