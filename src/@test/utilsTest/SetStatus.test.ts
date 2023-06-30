import { SetStatus } from "../../utils/SetStatus";

test('Must set status correctly based on final score provided', () => {
    const finalScore = -1;
    const score = SetStatus.setStatusByScore(finalScore);
    expect(score).toBe('DISAPPROVED');
});


test('Must set status correctly based on final score provided', () => {
    const finalScore = 85;
    const score = SetStatus.setStatusByScore(finalScore);
    expect(score).toBe('APPROVED');
});
