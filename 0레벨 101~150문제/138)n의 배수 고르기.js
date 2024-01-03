function solution(n, numlist) {
  const result = [];
  for (const num of numlist) {
    if (num % n === 0) result.push(num)
  }
  return result
}