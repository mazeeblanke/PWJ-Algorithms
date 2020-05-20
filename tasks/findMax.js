const findMax = (array) => {
    let max = -Infinity
    array.forEach((a) => {
        if (a > max) max = a
    })
    return max
}

export default findMax