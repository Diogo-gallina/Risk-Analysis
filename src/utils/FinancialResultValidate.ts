export class FinancialResultValidate {
    public static calculateFinancialResult(
        annualRecipe: number,
        annualExpense: number
    ): 'PROFIT' | 'PREJUDICE' {
        if (annualRecipe > annualExpense) {
        return 'PROFIT';
        } else {
        return 'PREJUDICE';
        }
    }

    public static totalScoreFinancialCalculate(
        choiceFinancial: string
    ){
        return choiceFinancial === 'PROFIT' ? 15 : 0; 
    }
}
