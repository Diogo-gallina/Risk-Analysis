import { FinalRank } from "../../utils/FinalRank";

//Test for finalScore > 80

test('Should return the corresponding rank S based on the final score', () => {
  const finalScore = 95;
  const score = FinalRank.selectingRankByScore(finalScore);
  expect(score).toBe('S');
});


test('Should return the corresponding rank S based on the final score', () => {
  const finalScore = 83;
  const score = FinalRank.selectingRankByScore(finalScore);
  expect(score).toBe('S');
});


//Test for finalScore > 60 && < 80

test('Should return the corresponding rank A based on the final score', () => {
  const finalScore = 70;
  const score = FinalRank.selectingRankByScore(finalScore);
  expect(score).toBe('A');
});


test('Should return the corresponding rank A based on the final score', () => {
  const finalScore = 62;
  const score = FinalRank.selectingRankByScore(finalScore);
  expect(score).toBe('A');
});


//Test for finalScore > 40 && < 60

test('Should return the corresponding rank B based on the final score', () => {
  const finalScore = 55;
  const score = FinalRank.selectingRankByScore(finalScore);
  expect(score).toBe('B');
});


test('Should return the corresponding rank B based on the final score', () => {
  const finalScore = 48;
  const score = FinalRank.selectingRankByScore(finalScore);
  expect(score).toBe('B');
});


//Test for finalScore > 20 && < 40

test('Should return the corresponding rank C based on the final score', () => {
  const finalScore = 22;
  const score = FinalRank.selectingRankByScore(finalScore);
  expect(score).toBe('C');
});


test('Should return the corresponding rank C based on the final score', () => {
  const finalScore = 35;
  const score = FinalRank.selectingRankByScore(finalScore);
  expect(score).toBe('C');
});


//Test for finalScore < 20

test('Should return the corresponding rank D based on the final score', () => {
  const finalScore = 15;
  const score = FinalRank.selectingRankByScore(finalScore);
  expect(score).toBe('D');
});


test('Should return the corresponding rank D based on the final score', () => {
  const finalScore = 5;
  const score = FinalRank.selectingRankByScore(finalScore);
  expect(score).toBe('D');
});

