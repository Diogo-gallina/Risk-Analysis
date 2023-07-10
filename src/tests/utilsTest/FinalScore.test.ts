import { FinalScore } from "../../utils/FinalScore";

describe("Calculate total score", () => {
  test("should return the correct total score when all elements in the array are valid scores", () => {
    const array = [10, 20, 30, 40, 50];
    const result = FinalScore.calculateTotalScore(array);
    expect(result).toBe(150);
  });

  test("should return -1 if any element in the array is -1", () => {
    const array = [10, -1, 30, 40, 50];
    const result = FinalScore.calculateTotalScore(array);
    expect(result).toBe(-1);
  });

  test("should return 0 when the array is empty", () => {
    const array: number[] = [];
    const result = FinalScore.calculateTotalScore(array);
    expect(result).toBe(0);
  });

  test("should return 0 when all elements in the array are 0", () => {
    const array = [0, 0, 0, 0, 0];
    const result = FinalScore.calculateTotalScore(array);
    expect(result).toBe(0);
  });
});
