const findMaxIndex = (array) => {
    let max = -Infinity
    let maxIndex = -Infinity
    array.forEach((a, index) => {
        if (a > max) {
            max = a
            maxIndex = index
        }
    })
    return maxIndex
}

export default findMaxIndex