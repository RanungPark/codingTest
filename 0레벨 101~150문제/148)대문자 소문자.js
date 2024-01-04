function solution(my_string) {
  return [...my_string].map(v => {
    const ascii = v.charCodeAt()
    if (ascii >= 65 && ascii <= 90) {
      return v.toLowerCase()
    } else if (ascii >= 97 && ascii <= 122) {
      return v.toUpperCase()
    }
  }).join('')
}

// a-97 z-122 A-65 Z-90