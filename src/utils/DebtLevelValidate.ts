export class DebtLevelValidate {
  public static scoreDebtLevelCalculate(debtLevel: number, annualRecipe: number): number {
    let scoreDebt = 0;

    if (debtLevel > annualRecipe * 0.1) {
      scoreDebt = -1;
    } else if (debtLevel <= annualRecipe * 0.1 && debtLevel >= annualRecipe * 0.06) {
      scoreDebt = 5;
    } else if (debtLevel < annualRecipe * 0.06 && debtLevel >= annualRecipe * 0.01) {
      scoreDebt = 15;
    } else if (debtLevel === 0) {
      scoreDebt = 20;
    }

    return scoreDebt;
  }
}
