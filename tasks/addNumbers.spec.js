import addNumbers from './addNumbers'

describe('addNumbers', () => {
    it ('will return the sum of two numbers supplied', () => {
        let number1 = 54;
        let number2 = 60;
        expect(addNumbers(number1, number2)).toBe(114)
    })
})