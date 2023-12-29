function solution(myString, pat) {
  return +[...myString].map(v => {
    if (v === 'A') {
      return 'B'
    } else {
      return 'A'
    }
  }).join('').includes(pat);
}