function solution(priorities, location) {
  var answer = 0;
  var big = 0;
  
  while(true){
      big = priorities.findIndex((e) => e > priorities[0]);
      
      if(big == -1){
          priorities.shift();
          answer++;
          
          if(location == 0){
              break;
          }
      }else{
          priorities.push(priorities[0]);
          priorities.shift();
      }
      
      location--;
      
      if(location == -1){
          location = priorities.length - 1;
      }else{
          location;
      }
  }

  return answer;
}