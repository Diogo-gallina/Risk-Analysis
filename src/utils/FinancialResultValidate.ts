export class FinancialResultValidate {

    public static calculateFinancialResult(
        annualRecipe: number,
        annualExpense: number
    ): 'profit' | 'prejudice' {
        if (annualRecipe > annualExpense) {
        return 'profit';
        } else {
        return 'prejudice';
        }
    }

    public static totalScoreFinancialCalculate(
        choiceFinancial: string
    ){
        return choiceFinancial === 'profit' ? 15 : 0; 
    }
}
