function solution(s)
{
    var answer = 0;

    let arr = []; 

    for(let i = 0; i < s.length; i++){
        if(arr.legth == 0){
            arr.push(s[i]);
        }else if(arr[arr.length - 1] == s[i]){
            arr.pop();
        }else{
            arr.push(s[i]);
        }
    }

    return arr.length == 0 ? 1 : 0;
}