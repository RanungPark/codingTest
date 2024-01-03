function solution(s1, s2) {
  let result = 0;
  for (const v1 of s1) {
    s2.includes(v1) ? result++ : false
  }

  return result
}