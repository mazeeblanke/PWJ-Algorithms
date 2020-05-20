const findMin = (array) => {
    let min = Infinity
    array.forEach((a) => {
        if (a < min) min = a
    })
    return min
}

export default findMin