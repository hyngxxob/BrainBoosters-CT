function solution(n) {
    var answer = [];
    var arr = (n + "").split("");
    
    for(var i=arr.length-1; i>=0; i--){
        answer.push(Number(arr[i]));
    }
    
    return answer;
}