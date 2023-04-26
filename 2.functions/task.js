function getArrayParams(...arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = null;

  for(let i = 0; i < arr.length; i++) {

    sum += arr[i];

    if (arr[i] > max) {
      max = arr[i]; 
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  let sumString = (sum / arr.length).toFixed(2);
  let avg = parseFloat(sumString);



  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

  if (arr.length == 0) {
    return 0; 
  } else {
    for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  

}
function differenceMaxMinWorker(...arr) {
  let max = Math.max.apply(null, ...arr);
  let min = Math.min.apply(null, ...arr);
  let dif = max - min;
  return dif; 
}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
