import { AnnualRecipeValidate } from '../../utils/AnnualRecipeValidate';

describe('Annual recipe validate ', () => {

    describe('Positive tests with result < 300k', () => {

        test('Calculate annual recipe score returns the correct score', () => {
            const annualRecipe = 125000;
            const score = AnnualRecipeValidate.calculateAnnualRecipeScore(annualRecipe);
            expect(score).toBe(-1);
        });

        test('Calculate annual recipe score returns the correct score', () => {
            const annualRecipe = 83201;
            const score = AnnualRecipeValidate.calculateAnnualRecipeScore(annualRecipe);
            expect(score).toBe(-1);
        });

        test('Calculate annual recipe score returns the correct score', () => {
            const annualRecipe = 289000;
            const score = AnnualRecipeValidate.calculateAnnualRecipeScore(annualRecipe);
            expect(score).toBe(-1);
        });
    });    

    describe('Positive tests with result 5', () => {

        test('Calculate annual recipe score returns the correct score', () => {
            const annualRecipe = 500000;
            const score = AnnualRecipeValidate.calculateAnnualRecipeScore(annualRecipe);
            expect(score).toBe(5);
        });

        test('Calculate annual recipe score returns the correct score', () => {
            const annualRecipe = 354215;
            const score = AnnualRecipeValidate.calculateAnnualRecipeScore(annualRecipe);
            expect(score).toBe(5);
        });

        test('Calculate annual recipe score returns the correct score', () => {
            const annualRecipe = 3054215;
            const score = AnnualRecipeValidate.calculateAnnualRecipeScore(annualRecipe);
            expect(score).toBe(5);
        });
    });    

    describe('Positive tests with result 5', () => {

        test('Calculate annual recipe score returns the correct score', () => {
            const annualRecipe = 5056320;
            const score = AnnualRecipeValidate.calculateAnnualRecipeScore(annualRecipe);
            expect(score).toBe(15);
        });

        test('Calculate annual recipe score returns the correct score', () => {
            const annualRecipe = 7548546;
            const score = AnnualRecipeValidate.calculateAnnualRecipeScore(annualRecipe);
            expect(score).toBe(15);
        });

        test('Calculate annual recipe score returns the correct score', () => {
            const annualRecipe = 11468958;
            const score = AnnualRecipeValidate.calculateAnnualRecipeScore(annualRecipe);
            expect(score).toBe(15);
        });
    });

    describe('Positive tests with result 25 ', () => {

        test('Calculate annual recipe score returns the correct score', () => {
            const annualRecipe = 18000000;
            const score = AnnualRecipeValidate.calculateAnnualRecipeScore(annualRecipe);
            expect(score).toBe(25);
        });

        test('Calculate annual recipe score returns the correct score', () => {
            const annualRecipe = 20000000;
            const score = AnnualRecipeValidate.calculateAnnualRecipeScore(annualRecipe);
            expect(score).toBe(25);
        });

        test('Calculate annual recipe score returns the correct score', () => {
            const annualRecipe = 14000000;
            const score = AnnualRecipeValidate.calculateAnnualRecipeScore(annualRecipe);
            expect(score).toBe(25);
        });
    });    

});