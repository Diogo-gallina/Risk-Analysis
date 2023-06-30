export class AnnualRecipeValidate {
  public static calculateSerasaScore(annualRecipe: number): number {
    if (annualRecipe < 300000) {
      return -1;
    }

    const scoreMap = [
      { limit: 300000, score: 5 },
      { limit: 4800000, score: 15 },
      { limit: 12000000, score: 25 },
    ];

    let scoreAnnualRecipe = 0;

    for (const { limit, score } of scoreMap) {
      if (annualRecipe > limit) {
        scoreAnnualRecipe = score;
      } else {
        break;
      }
    }

    return scoreAnnualRecipe;
  }
}
