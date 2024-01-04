function solution(s) {
  const object = []
  
  for(const v of [...s]) {
      const foundObject = object.find(obj => obj.key === v);

      if (foundObject === undefined) {
          object.push({ key: v, count: 1 });
      } else {
          foundObject.count += 1;
      }
  }
  const filterObject = object.filter(v => v.count === 1)
  const result = []
  filterObject.forEach(v => result.push(v.key))
  
  return result.sort().join('')
}