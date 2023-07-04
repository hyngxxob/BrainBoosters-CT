function solution(price, money, count) {
    var totalCost = price * (count * (count + 1)) / 2; // 놀이기구를 count번 탔을 때 총 비용
  var answer = totalCost - money; // 모자라는 금액 계산

  if (answer < 0) {
    answer = 0; // 모자라는 금액이 없으면 0으로 설정
  }

  return answer;
}