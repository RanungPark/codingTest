function solution(my_string, num1, num2) {
  const slice1 = [...my_string].slice(num1, num1 + 1).join('');
  const slice2 = [...my_string].slice(num2, num2 + 1).join('');
  let string = [...my_string];
  string[num1] = slice2
  string[num2] = slice1
  return string.join('')
}