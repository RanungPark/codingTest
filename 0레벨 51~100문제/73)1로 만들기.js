function solution(num_list) {
  let answer = 0;
  for (num of num_list) {
    while (num !== 1) {
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = (num - 1) / 2;
      }
      answer++
    }
  }
  return answer;
}

// function solution(num_list) {
//   return num_list.map(v => v.toString(2).length - 1).reduce((acc, cur) => acc + cur);
// }