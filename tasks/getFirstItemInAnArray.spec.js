import getFirstItemInAnArray from './getFirstItemInAnArray'

describe ('getFirstItemInAnArray', () => {
    it ('gets the first item in the array', () => {
        expect(getFirstItemInAnArray([34, 44, 6, 7])).toBe(34)
    })
})