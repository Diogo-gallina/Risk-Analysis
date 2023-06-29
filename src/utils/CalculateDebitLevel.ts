export class ValidateSerasaScore{
    public static calculateAnnualRecipe(debtLevel:number, annualRecipe: number): number{
        let sacoreAnualRecipe = 0;
        
        if (debtLevel > annualRecipe * 0.1) {
            sacoreAnualRecipe = 0;
        }else if (debtLevel < annualRecipe * 0.1 && debtLevel >= annualRecipe * 0.06) {
            sacoreAnualRecipe = 5;
        }else if (debtLevel < annualRecipe * 0.06 && debtLevel >= annualRecipe * 0.01) {
            sacoreAnualRecipe = 15;
        }else if (debtLevel < annualRecipe) {
            sacoreAnualRecipe = 20;
        }

        return sacoreAnualRecipe;
    }
}