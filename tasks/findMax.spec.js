import findMax from './findMax'

describe('findMax', () => {
    it ('returns the max in an array', () => {
        expect(findMax([3,6, 200, 7, 8])).toBe(200)
    })
})