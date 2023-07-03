function solution(n) {
    var num = 1;
    
    while(1) {
        if(Math.pow(num, 2) > n) {
            return -1;
        } else {
            if(Math.pow(num, 2) == n) {
                return Math.pow(num+1, 2);
            }
        }
        num++;
    }
}