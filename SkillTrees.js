function solution(skill, skill_trees) {
  let answer = 0;
  let bool = true;
  
  for(let i of skill_trees){
      for(let j = 0; j < skill.length; j++){
          bool = true;
          let first = i.indexOf(skill[j]);
          let second = i.indexOf(skill[j + 1]);
          if((first == -1 && second != -1)
          || (first != -1 && second != -1 && first > second)){
              bool = false;
              
              break;
          }
      }
      
      if(bool){
          answer++;
      }
  }
  
  return answer;
}