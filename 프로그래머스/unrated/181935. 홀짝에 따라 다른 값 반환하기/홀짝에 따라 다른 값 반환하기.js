function solution(n) {
    var answer = 0;
    
    if(n>=1 && n<=100) {
        while(n > 0) {
            if( n % 2 == 0 ) {
                answer += Math.pow(n, 2);
            } else {
                answer += n;
            }
            n -= 2;
        }
    }
    
    return answer;
}