


import { FinancialResultValidate } from "../../utils/FinancialResultValidate";

describe('Financial result validate', () => {
        
    test('Must correctly calculate the financial result based on annual income and annual expenses', () => {
        const annualRecipe = 550000;
        const annualExpense = 50000;
        const score = FinancialResultValidate.calculateFinancialResult(annualRecipe, annualExpense);
        expect(score).toBe('profit');
    });

    test('Must correctly calculate the financial result based on annual income and annual expenses', () => {
        const annualRecipe = 56220;
        const annualExpense = 62000;
        const score = FinancialResultValidate.calculateFinancialResult(annualRecipe, annualExpense);
        expect(score).toBe('prejudice');
    });

    test('Should return the correct financial score value based on the given choice', () => {
        const choiceFinancial = 'profit';
        const score = FinancialResultValidate.totalScoreFinancialCalculate(choiceFinancial);
        expect(score).toBe(15);
    });

    test('Should return the correct financial score value based on the given choice', () => {
        const choiceFinancial = 'prejudice';
        const score = FinancialResultValidate.totalScoreFinancialCalculate(choiceFinancial);
        expect(score).toBe(0);
    });
    
});

