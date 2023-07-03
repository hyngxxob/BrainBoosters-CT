function solution(left, right) {
    var answer = 0;
    var sum = [];
    
    while(left <= right) {
        if(getDivisors(left).length % 2 === 0) {
            sum.push(left)
        } else {
            sum.push(left * (-1))
        }
        left++;
    }
    
    return sum.reduce((acc, curr)=>{ return acc + curr });
}

function getDivisors(num) {
    var divisors = [];
    for(let i=1; i <= num; i++) {
        if(num % i == 0) divisors.push(i);
    }
    return [...divisors];
}