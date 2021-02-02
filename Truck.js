function solution(bridge_length, weight, truck_weights) {
  let truck_on = 0; //다리 위 무게
  let time = 0; //시간
  const bridge = []; //다리 위 배열
  
  while(truck_weights.length > 0){
      if(weight >= truck_on + truck_weights[0]){ 
          truck_on += truck_weights[0];
          bridge.push(truck_weights.shift());
      }else{
          bridge.push(0);
      }
      
      time++;
      
      if(bridge.length == bridge_length){
          truck_on -= bridge.shift();
      }
  }
  
  time += bridge_length;

  return time;
}