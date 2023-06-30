export class SetStatus{
    public static setStatusByScore(finalScore: number): string{
        return finalScore === -1 ? 'DISAPPROVED' : 'APPROVED';
    }
}

