function solution(numbers) {
  const number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let answer = numbers;

  number.forEach((v, i) => {
    for (let index = 0; index < numbers.length; index++) {
      answer = answer.replace(v, i)
    }
  })

  return Number(answer)
}