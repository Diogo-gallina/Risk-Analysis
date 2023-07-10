import { SerasaScoreValidate } from '../../utils/SerasaScoreValidate';

describe('Serasa score validate', () => {

  test('should return -1 for a score below 300', () => {
    const score = 250;
    const result = SerasaScoreValidate.calculateSerasaScore(score);
    expect(result).toBe(-1);
  });

  test('should return 5 for a score equal to 500', () => {
    const score = 450;
    const result = SerasaScoreValidate.calculateSerasaScore(score);
    expect(result).toBe(5);
  });

  test('should return 15 for a score between 500 and 700', () => {
    const score = 600;
    const result = SerasaScoreValidate.calculateSerasaScore(score);
    expect(result).toBe(15);
  });

  test('should return 25 for a score equal to 1000', () => {
    const score = 800;
    const result = SerasaScoreValidate.calculateSerasaScore(score);
    expect(result).toBe(25);
  });

  test('should return 0 for a score above 1000', () => {
    const score = 1200;
    const result = SerasaScoreValidate.calculateSerasaScore(score);
    expect(result).toBe(-1);
  });

  test('should return 0 for a negative score', () => {
    const score = -100;
    const result = SerasaScoreValidate.calculateSerasaScore(score);
    expect(result).toBe(-1);
  });

});
