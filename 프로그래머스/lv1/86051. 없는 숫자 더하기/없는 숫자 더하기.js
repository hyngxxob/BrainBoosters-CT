function solution(numbers) {
    var index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    return index.filter((n)=> !numbers.includes(n)).reduce((acc, curr)=>{return acc+curr});
}