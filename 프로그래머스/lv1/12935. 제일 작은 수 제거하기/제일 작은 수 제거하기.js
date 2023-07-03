function solution(arr) {
    var filterMinVal = arr.filter((n)=> n != Math.min(...arr));
    
    return filterMinVal.length == 0 ? [-1] : filterMinVal;
}