function solution(my_string, queries) {
  let tmp = []

  const result = [...my_string]
  for ([i, j] of queries) {
    tmp = result.slice(i, j + 1).reverse();
    result.splice(i, tmp.length, ...tmp);
    tmp = []
  }

  return(result.join(''))
}