function solution(my_string) {
  return my_string.trim().split(' ').filter(v => {
    if (v !== '') return v
  });
}