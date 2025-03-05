import { Sum } from "../Sum"


test('This test will calculate the sum of the two numbers', () => { 
    const result = Sum(7,3);

    //Assertion
    expect(result).toBe(10);
 })