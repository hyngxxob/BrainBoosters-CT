function solution(x) {
    var num = x.toString().split("");
    if(x % num.reduce((acc, curr)=>{
        return Number(acc)+Number(curr);
    }) == 0) {
        return true;
    } else {
        return false;
    }
}