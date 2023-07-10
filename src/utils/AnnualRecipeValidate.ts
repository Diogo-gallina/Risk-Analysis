export class AnnualRecipeValidate {
  public static calculateAnnualRecipeScore(annualRecipe: number): number {
    let scoreAnnualRecipe = 0;

    if (annualRecipe < 300000) {
      scoreAnnualRecipe = -1;
    } else if (annualRecipe > 12000000) {
      scoreAnnualRecipe = 25;
    } else if (annualRecipe > 4800000) {
      scoreAnnualRecipe = 15;
    } else if (annualRecipe > 300000) {
      scoreAnnualRecipe = 5;
    }

    return scoreAnnualRecipe;
  }
}
