function solution(order) {
  let result = 0
  const num = order + ''
  for (let i = 0; i <= num.length; i++) {
    if (num[i] === '3' || num[i] === '6' || num[i] === '9') {
      result++;
    }
  }
  return result
}