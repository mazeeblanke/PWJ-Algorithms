const addNumbers = function () { 
    return Object.values(arguments).reduce((agg, curr) => agg + curr, 0)
}

export default addNumbers