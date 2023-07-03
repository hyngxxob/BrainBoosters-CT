function solution(arr, divisor) {
    return arr.filter((n)=> n%divisor === 0).sort((a,b)=> a-b).length == 0 ? [-1] : arr.filter((n)=> n%divisor === 0).sort((a,b)=> a-b)
}