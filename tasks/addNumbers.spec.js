import addNumbers from './addNumbers'

describe('addNumbers', () => {
    it ('will return the sum of two numbers supplied', () => {
        let number1 = 54;
        let number2 = 60;
        expect(addNumbers(number1, number2)).toBe(114)
    })
    it ('will return the sum of any amount of numbers supplied', () => {
        let number1 = 1;
        let number2 = 1;
        let number3 = 2;
        let number4 = 1;
        expect(addNumbers(number1, number2, number3, number4)).toBe(5)
    })
})