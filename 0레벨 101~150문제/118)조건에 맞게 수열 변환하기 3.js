function solution(arr, k) {
  if (k % 2 === 1) {
    return arr.map(v => v * k);
  } else {
    return arr.map(v => v + k);
  }
}

// function solution(arr, k) {
//   return arr.map(v => k%2===0 ? v+k : v*k);
// }