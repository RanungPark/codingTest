function solution(cipher, code) {
  let answer = '';
  [...cipher].forEach((v, i) => {
    if ((i + 1) % code === 0) {
      answer += v
    }
  })
  return answer;
}