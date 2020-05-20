import isEmptyString from './isEmptyString'

describe('isEmptyString', () => {
    it ('returns true when string is empty', () => {
        expect(isEmptyString('')).toBe(true)
    })

    it('returns false when string is not empty', () => {
        expect(isEmptyString('sdsd')).toBe(false)
    })
})