import { LatePaymentHistoryValidate } from "../../utils/LatePaymentHistoryValidate";

test('Should return correct code based on late payment history provided', () => {
    const criminalStatus = "no";
    const score = LatePaymentHistoryValidate.latePaymentHistoryValidate(criminalStatus);
    expect(score).toBe(0);
});


test('Should return correct code based on late payment history provided', () => {
    const criminalStatus = "yes";
    const score = LatePaymentHistoryValidate.latePaymentHistoryValidate(criminalStatus);
    expect(score).toBe(-1);
});
