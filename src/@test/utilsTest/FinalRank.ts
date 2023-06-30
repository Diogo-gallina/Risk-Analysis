export class FinalRank {
    private static scoreRanges = [
      { score: 20, rank: 'D' },
      { score: 40, rank: 'C' },
      { score: 60, rank: 'B' },
      { score: 80, rank: 'A' },
    ];
  
    public static selectingRankByScore(finalScore: number): string {
      for (const { score, rank } of FinalRank.scoreRanges) {
        if (finalScore < score) {
          return rank;
        }
      }
  
      return 'S';
    }
}
