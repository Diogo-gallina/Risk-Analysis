import { FinancialResultValidate } from "../../utils/FinancialResultValidate";

describe('Financial result validate', () => {
        
    test('Must correctly calculate the financial result based on annual income and annual expenses', () => {
        const annualRecipe = 550000;
        const annualExpense = 50000;
        const score = FinancialResultValidate.calculateFinancialResult(annualRecipe, annualExpense);
        expect(score).toBe('PROFIT');
    });

    test('Must correctly calculate the financial result based on annual income and annual expenses', () => {
        const annualRecipe = 56220;
        const annualExpense = 62000;
        const score = FinancialResultValidate.calculateFinancialResult(annualRecipe, annualExpense);
        expect(score).toBe('PREJUDICE');
    });

    test('Should return the correct financial score value based on the given choice', () => {
        const choiceFinancial = 'PROFIT';
        const score = FinancialResultValidate.totalScoreFinancialCalculate(choiceFinancial);
        expect(score).toBe(15);
    });

    test('Should return the correct financial score value based on the given choice', () => {
        const choiceFinancial = 'PREJUDICE';
        const score = FinancialResultValidate.totalScoreFinancialCalculate(choiceFinancial);
        expect(score).toBe(0);
    });

});

