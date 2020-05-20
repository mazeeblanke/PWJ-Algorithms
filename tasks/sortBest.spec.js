import sortBest from './sortBest'

describe ('sortBest', () => {
    it ('it returns the correct sort for 6 input', () => {
        const nums = [2, 1, 5, 7, 33, 8]
        const expected = [33, 8, 7, 5, 2, 1]
        expect(sortBest(nums)).toEqual(expected)
    })
    it ('it returns the correct sort for 3 input', () => {
        const nums = [2, 1, 5]
        const expected = [5, 2, 1]
        expect(sortBest(nums)).toEqual(expected)
    })
})