function solution(myString) {
  const answer = [...myString];
  return answer.map(v => {
    if (v === 'a' || v === 'A') {
      return v.toUpperCase()
    } else return v.toLowerCase()
  }).join('')
}