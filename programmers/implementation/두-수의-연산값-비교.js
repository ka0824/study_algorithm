// https://school.programmers.co.kr/learn/courses/30/lessons/181938

// 첫번째 풀이
function solution(a, b) {

  // 숫자 a, b를 합쳐야 할 때는 중간에 빈 문자열을 넣어 문자열로 합침.
  // 완성된 문자열은 Number 메서드로 숫자형으로 변경
  // 최종적으로 가장 큰 수를 반환해야 하므로 Math 객체의 max 메서드 사용
  return Math.max(Number(a + "" + b ), 2 * a * b);
}

// 개선해야 할 점
// 1. 한줄에 표현 된 것은 좋으나, 중간에 문자열을 넣어 숫자를 합치는 방식은 다소 가독성이 떨어지게 느껴짐
// 2. 짧은 대신 코드의 가독성이 떨어짐

// 개선된 코드

function solution2(a, b) {
  const concated = String(a) + String(b);

  const multiplied = 2 * a * b;

  return Math.max(Number(concated), multiplied);  
}