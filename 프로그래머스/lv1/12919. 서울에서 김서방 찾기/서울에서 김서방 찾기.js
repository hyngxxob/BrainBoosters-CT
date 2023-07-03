function solution(seoul) {
    var answer = '';
    seoul.forEach((el,index)=>{
        if(el == "Kim") {
            answer = '김서방은 ' + index + '에 있다'
        }
    })
    return answer;
}