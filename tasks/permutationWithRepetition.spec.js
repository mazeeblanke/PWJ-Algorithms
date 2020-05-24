import { recursiveSoln, iterativeSoln } from './permutationWithRepetition'

describe('permutation', () => {
    it ('works', () => {
        expect(recursiveSoln([1,2])).toEqual([
            [1,1],
            [2,1],
            [1,2],
            [2,2]
        ])
        expect(iterativeSoln([1,2])).toEqual([
            [1,1],
            [2,1],
            [1,2],
            [2,2]
        ])
    })
})