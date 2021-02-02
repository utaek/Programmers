//최대공약수를 찾는 문제임
function solution(w, h) {
  return w * h - w - h + gcd(w, h);
}

const gcd = (a, b) => {
  //제귀호출 최대공약수를 찾을때까지 돈다
  return a == 0 ? b : gcd((b % a), a);
}