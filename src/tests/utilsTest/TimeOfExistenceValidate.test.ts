import { TimeOfExistenceValidate } from "../../utils/TimeOfExistenceValidate";

//Test for timeOfExistence <= 2 Yers

test('Should be able to return 3 for time Of Existence less than 2 years', () => {
  const timeOfExistence = 1;
  const score = TimeOfExistenceValidate.calculateDateOfExistence(timeOfExistence);
  expect(score).toBe(3);
});


test('Should be able to return 3 for lifetime less than 2 years', () => {
  const timeOfExistence = 2;
  const score = TimeOfExistenceValidate.calculateDateOfExistence(timeOfExistence);
  expect(score).toBe(3);
});


//Test for timeOfExistence > 2 && timeOfExistence <= 5

test('Should be able to return 5 for timeOfExistence greater than 2 years and less than or equal to 5 years', () => {
    const timeOfExistence = 3;
    const score = TimeOfExistenceValidate.calculateDateOfExistence(timeOfExistence);
    expect(score).toBe(5);
});
  
  
  test('Should be able to return 5 for timeOfExistence greater than 2 years and less than or equal to 5 years', () => {
    const timeOfExistence = 5;
    const score = TimeOfExistenceValidate.calculateDateOfExistence(timeOfExistence);
    expect(score).toBe(5);
});
  

//Test for timeOfExistence > 5 && timeOfExistence <= 9

test('Should be able to return 10 for timeOfExistence greater than 5 years and less than or equal to 9 years', () => {
    const timeOfExistence = 7;
    const score = TimeOfExistenceValidate.calculateDateOfExistence(timeOfExistence);
    expect(score).toBe(10);
});
  
  
test('Should be able to return 10 for timeOfExistence greater than 10 years and less than or equal to 9 years', () => {
    const timeOfExistence = 8;
    const score = TimeOfExistenceValidate.calculateDateOfExistence(timeOfExistence);
    expect(score).toBe(10);
});
  


//Test for timeOfExistence > 9 Yers

test('Should be able to return 15 for timeOfExistence greater than 9 years', () => {
    const timeOfExistence = 16;
    const score = TimeOfExistenceValidate.calculateDateOfExistence(timeOfExistence);
    expect(score).toBe(15);
});
  
  
test('Should be able to return 15 for timeOfExistence greater than 9 years', () => {
    const timeOfExistence = 12;
    const score = TimeOfExistenceValidate.calculateDateOfExistence(timeOfExistence);
    expect(score).toBe(15);
});
  
