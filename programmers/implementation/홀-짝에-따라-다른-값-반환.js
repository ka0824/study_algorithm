// https://school.programmers.co.kr/learn/courses/30/lessons/181935

// 첫번째 풀이
function solution(n) {
    // 정수 n이 짝수 인지, 홀수 인지 확인
    const isOdd = n % 2 === 1;

    // 반복문 시작 숫자 정하기, 홀수 였다면 1부터, 짝수 였다면 2부터 시작
    const startNum = isOdd ? 1 : 2;

    // 숫자의 합 담을 변수 선언
    let sum = 0;

   // 조건문으로 분기 나눔

    if (isOdd) {
        for (let i = startNum; i <= n; i += 2) {
            sum += i;
        }
    } else {
        for (let i = startNum; i <= n; i += 2) {
            sum += i**2;
        }
    }

    return sum;
}

// 개선해야할 점
// isOdd, startNum 등 풀이의 단순함에 비해 선언하는 변수의 수가 많아보임
// if 문 안에 for문이 들어가 있어서 가독성이 떨어짐. 분리하는 것이 좋아 보임
// if 문 뒤에 굳이 else를 쓰는 것이 아니라 if 문을 2번 쓰는 것이 가독성이 좋다는 글을 읽은 점 있음

function solution2 (n) {
  if (n % 2 === 1) {
    return calculateOddSum(n);
  }

  return calculateEvenSquareSum(n);
}

function calculateOddSum(n) {
  let sum = 0;

  for (let i = 1; i <= n; i += 2) {
    sum += i;
  }
}

function calculateEvenSquareSum(n) {
  let sum = 0;

  for (let i = 2; i <= n; i += 2) {
    sum += i * i;
  }

  return sum;
}