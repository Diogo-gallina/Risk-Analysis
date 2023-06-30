export class FinalRank {
  public static selectingRankByScore(finalScore: number): string {
    if (finalScore > 80) {
      return 'S';
    } else if (finalScore > 60) {
      return 'A';
    } else if (finalScore > 40) {
      return 'B';
    } else if (finalScore > 20) {
      return 'C';
    } else {
      return 'D';
    }
  }
}
