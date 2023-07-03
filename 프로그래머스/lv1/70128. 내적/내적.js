function solution(a, b) {
    var answer = 0;
    var sum= [];
    
    a.forEach((el, idx)=> {
        sum.push(Number(el) * Number(b[idx]));
    });
    
    return sum.reduce((acc, curr) => { return acc + curr });
}