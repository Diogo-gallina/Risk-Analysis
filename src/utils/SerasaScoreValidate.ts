export class SerasaScoreValidate{
    public static calculateSerasaScore(score: number): number{
        let scoreSerasa = 0;

        if (score < 300) {
            scoreSerasa = 0;
        }else if (score > 300 && score <= 500) {
            scoreSerasa = 5;
        }else if (score > 500 && score <= 700) {
            scoreSerasa = 15;
        }else if (score > 700 && score <= 1000) {
            scoreSerasa = 25;
        }

        return scoreSerasa;
    }
}
