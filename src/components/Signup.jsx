// Factorial Number
var num = 5;
var fact = 1;
for (var i = 1; i <= num; i++) {
  fact = fact * i;
}
console.log(fact);

// Fibonacci Number
var number = 10;
let n1 = 0, n2 = 1, nextTerm;
console.log('Fibonacci Series:');
for(let i = 1; i <= number; i++){
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}



































import React from 'react'

const Signup = () => {
  return (
    <div>Signup</div>
  )
}

export default Signup