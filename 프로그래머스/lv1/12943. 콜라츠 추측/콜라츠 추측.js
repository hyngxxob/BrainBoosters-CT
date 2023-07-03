function solution(num) {
    var answer = num
    var cnt = 0;
    var success = false;
    
    while(cnt < 500) {
        if(answer == 1) {
            success = true;
            return cnt;
        } else {
            if(answer % 2 == 0) {
                answer = answer / 2;
            } else {
                answer = answer * 3 + 1;
            }   
        }
        cnt++;
    }
    
    if(!success) {
        return -1;
    }
}