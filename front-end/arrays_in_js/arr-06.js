const num = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9] 
// const numUnicos = [1, 3, 4, 5, 8, 9] 
const numUnicos = num.reduce((list, n) => {
    if(!list.includes(n)) list.push(n)
    return list
}, [])
console.log(numUnicos)