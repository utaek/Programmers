function solution(citations) {
  citations.sort((a, b)=> b - a);
  
  for(let i = 0; i < citations.length; i++){
      if(citations[i] == i + 1){
          return citations[i];    
      }else if(i + 1 > citations[i]){
          return i;
      }
  }
  
  return citations.length;
}