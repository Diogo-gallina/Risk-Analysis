export class DebtLevelValidate {
  public static scoreDebtLevelCalculate(debtLevel: number, annualRecipe: number): number {
    let scoreDebt = 0;

    const thresholds = [
      { limit: annualRecipe * 0.1, score: 0 },
      { limit: annualRecipe * 0.06, score: 5 },
      { limit: annualRecipe * 0.01, score: 15 },
      { limit: annualRecipe, score: 20 },
    ];

    for (const { limit, score } of thresholds) {
      if (debtLevel <= limit) {
        scoreDebt = score;
        break;
      }
    }

    return scoreDebt;
  }
}
