function solution(arr)
{
    var answer = [];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    arr.forEach((el)=>{
        if(answer[answer.length -1] != el) {
            answer.push(el);
        }
    })
    
    return answer;
}