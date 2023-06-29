export class SerasaScoreValidate {
  public static calculateSerasaScore(score: number): number {
    const scoreMap = [
      { limit: 300, score: -1 },
      { limit: 500, score: 5 },
      { limit: 700, score: 15 },
      { limit: 1000, score: 25 },
    ];

    let scoreSerasa = 0;

    for (const { limit, score: currentScore } of scoreMap) {
      if (score <= limit) {
        scoreSerasa = currentScore;
        break;
      }
    }

    return scoreSerasa;
  }
}
