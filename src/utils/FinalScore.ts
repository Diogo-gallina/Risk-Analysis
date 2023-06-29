export class FinalScore{
    public static calculateTotalScore(array: number[]) : number {
        let totalScore = 0;

        for (let i = 0; i < array.length; i++) {
            if(array[i] !== -1) {
                totalScore += array[i];
            }else {
                return -1;
            }
        }
        return totalScore;
    }
}