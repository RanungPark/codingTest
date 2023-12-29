function solution(my_string, alp) {
  var answer = [...my_string];
  return answer.map(v => {
    if (v === alp) {
      return v.toUpperCase()
    } else return v
  }).join('');
}