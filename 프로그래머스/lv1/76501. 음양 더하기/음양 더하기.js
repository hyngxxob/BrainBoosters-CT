function solution(absolutes, signs) {
    var answer = 0;
    
    signs.forEach((bool, index)=> {
        bool ? answer += absolutes[index] : answer -= absolutes[index];
    })
    
    return answer;
}