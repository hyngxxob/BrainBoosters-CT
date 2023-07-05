function solution(s) {
  var words = s.split(" "); // 문자열을 단어로 분리
  var result = [];
  
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var modifiedWord = "";

    for (var j = 0; j < word.length; j++) {
      var char = word[j];

      if (j % 2 === 0) {
        modifiedWord += char.toUpperCase(); // 짝수 인덱스의 알파벳은 대문자로 변경
      } else {
        modifiedWord += char.toLowerCase(); // 홀수 인덱스의 알파벳은 소문자로 변경
      }
    }

    result.push(modifiedWord);
  }

  return result.join(" "); // 변경된 단어들을 공백으로 연결하여 최종 결과 문자열 생성
}