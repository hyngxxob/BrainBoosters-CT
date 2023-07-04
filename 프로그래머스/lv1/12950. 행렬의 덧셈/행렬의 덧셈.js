function solution(A, B) {
    // console.log(arr1.map((arr1, idx1) => console.log(arr1); console.log(idx1)))
    // console.log(A.map((arr1, idx1) => arr1.map((val, idx2) => val+B[idx1][idx2])));
    return A.map((arr1, idx1) => arr1.map((val, idx2) => val+B[idx1][idx2]));
    // return answer;
}