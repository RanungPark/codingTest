function solution(arr) {
  const sum = arr.reduce((a, c) => a + +c, 0)
  return sum / arr.length
}