import { CriminalModelValidate } from "../../utils/CriminalModelValidate";

describe("Criminal model validate ", () => {
  test("Should return correct code based on provided criminal status", () => {
    const criminalStatus = "no";
    const score = CriminalModelValidate.criminalModelValidaTe(criminalStatus);
    expect(score).toBe(0);
  });

  test("Should return correct code based on provided criminal status", () => {
    const criminalStatus = "yes";
    const score = CriminalModelValidate.criminalModelValidaTe(criminalStatus);
    expect(score).toBe(-1);
  });
});
