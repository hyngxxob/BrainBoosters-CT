function solution(phone_number) {
    var answer = '';
    var cnt = phone_number.length - 4;
    var subStr = phone_number.substring(phone_number.length - 4);
    
    for(var i=0; i<cnt; i++) {
        answer += "*";
    }
    answer += subStr;
    
    return answer;
}