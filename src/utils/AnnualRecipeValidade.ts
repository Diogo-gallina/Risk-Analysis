export class AnnualRecipeValidade {
  public static calculateSerasaScore(annualRecipe: number): number {
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



