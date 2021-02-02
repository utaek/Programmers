function solution(numbers) {
  let conversion = numbers.map(number => number + '');
  
  conversion.sort((a, b) => b + a < a + b ? -1 : 1);

  let toStr = conversion[0] === "0" ? "0" : conversion.join('');    
  
  return toStr;
}