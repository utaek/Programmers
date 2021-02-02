function solution(progresses, speeds) {
  const answer = [];
  let cnt = 0;

  while(progresses.length > 0){ 
      if(cnt == 0){ //cnt가 증가한 상태에서는 값을 변경하지 않고 체크해야함.
          progresses = progresses.map((x, y) => x + speeds[y]);    
      }

      if(progresses[0] >= 100){
          progresses.shift();
          speeds.shift();
          cnt++;
      }
      
      if(progresses.length != 0){
          if(progresses[0] < 100 && cnt != 0){
              answer.push(cnt);
              cnt = 0;
          }            
      }
  }    
  
  answer.push(cnt);    
  
  return answer;
}