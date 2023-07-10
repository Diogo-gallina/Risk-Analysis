import { SetStatus } from "../../utils/SetStatus";

describe('Set status', () => {

    test('Must set status correctly based on final score provided', () => {
        const finalScore = -1;
        const score = SetStatus.setStatusByScore(finalScore);
        expect(score).toBe('DISAPPROVED');
    });

    test('Must set status correctly based on final score provided', () => {
        const finalScore = 38;
        const score = SetStatus.setStatusByScore(finalScore);
        expect(score).toBe('DISAPPROVED');
    });


    test('Must set status correctly based on final score provided', () => {
        const finalScore = 85;
        const score = SetStatus.setStatusByScore(finalScore);
        expect(score).toBe('APPROVED');
    });

});
