"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d > 0) {
    let firstSolution = (-b + Math.sqrt(d) )/(2*a);
    let secondSolution = (-b - Math.sqrt(d) )/(2*a);
    arr.push(firstSolution, secondSolution);
  } else if (d == 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } 
  
  
  return arr;
}





function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    
    let p = (percent / 100) / 12;
    let mainDebt = amount - contribution;
    let mounthPayment = mainDebt * (p + (p / (((1 + p)**countMonths) - 1)));
    let totalMount = (mounthPayment * countMonths).toFixed(2);

    let i =(parseFloat(totalMount));

    return i; 
    
}