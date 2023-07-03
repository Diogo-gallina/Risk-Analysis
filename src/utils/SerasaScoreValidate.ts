export class SerasaScoreValidate {
  public static calculateSerasaScore(score: number): number {
    let scoreSerasa = 0;

    if (score < 0 || score > 1000) {
      scoreSerasa = -1;
    } else if (score > 0 && score < 300) {
      scoreSerasa = -1;
    } else if (score < 500) {
      scoreSerasa = 5;
    } else if (score < 700) {
      scoreSerasa = 15;
    } else if (score <= 1000) {
      scoreSerasa = 25;
    }

    return scoreSerasa;
  }
}