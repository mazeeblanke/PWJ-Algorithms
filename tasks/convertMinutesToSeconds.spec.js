import convertMinutesToSeconds from './convertMinutesToSeconds'

describe('convertMinutesToSeconds', () => {
    it ('convertMinutesToSeconds', () => {
        expect(convertMinutesToSeconds(3)).toBe(180)
    })
})