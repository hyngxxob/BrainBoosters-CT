function solution(arr) {
    var answer = 0;
    var idx = 0;
    for(key in arr) {
        answer += arr[key]
        idx++;
    }
    return answer / idx;
}