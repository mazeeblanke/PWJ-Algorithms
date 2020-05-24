export const recursiveSoln = (input, length = input.length) => {
    if (length === 1) {
        return input.map(n => [n])
    }
    
    let smallerPermutation = recursiveSoln(input, length - 1)
    let permutation = []  
  
    input.forEach(inputItem => {
      smallerPermutation.forEach(smallerPermutationItem => {
        permutation.push([...smallerPermutationItem, inputItem])
      })
    })

    return permutation
}


export const iterativeSoln = (input) => {
    let permutation = input.map(r => [r])
    
    for (let p = 0; p < input.length - 1 ; ++p) { 
      let permutationCop = [...permutation]
      permutation = []
      input.forEach(inputItem => {
        permutationCop.forEach(smallerPermutationItem => {
          permutation.push([...smallerPermutationItem, inputItem])
        })
      })
  
    }
  
    return permutation
}