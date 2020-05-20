import findMaxIndex from './findMaxIndex'

const sortBest = (input) => {
    // 1) create two vars targetIndex = 0, startIndex = 1
    // 2) find the max btw startIndex and input lenght
    // 3) compare max with targetIndex, swap
    // 4) got back to step 1, increment targetIndex and startIndex
    let targetIndex = 0
    let maxIndex
    let targetInput = [...input]

    for (let i = 1; i < targetInput.length; i++) {
        maxIndex = findMaxIndex (targetInput.slice(i, targetInput.length)) + i

        if (targetInput[maxIndex] > targetInput[targetIndex]) {
            let temp = targetInput[targetIndex]
            targetInput[targetIndex] = targetInput[maxIndex]
            targetInput[maxIndex] = temp
        }
        targetIndex++
    } 
    return targetInput
}

export default sortBest