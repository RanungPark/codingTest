function solution(array) {
  let result = [0, 0]
  array.forEach((v, i) => {
    if (result[0] < v) {
      result = [v, i]
    }
  })
  return result
}