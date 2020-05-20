import findMin from './findMin'

describe('findMin', () => {
    it ('it returns the smallest value', () => {
        expect(findMin([45,5, 6, 7,3, 5])).toBe(3)
    })
})