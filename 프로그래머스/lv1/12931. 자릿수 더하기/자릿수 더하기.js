function solution(n)
{
    var answer = 0;
    
    var str = n.toString();
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
      let num = parseInt(str[i]);
      answer += num;
    }

    return answer;
}