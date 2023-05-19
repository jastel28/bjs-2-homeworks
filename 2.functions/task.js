function getArrayParams(...arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

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

  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  
  if (arr.length == 0) {
    return 0;
  }
  if (arr.length > 0) {
    for(let i = 0; i < arr.length; i++) {

      if (arr.length == 0) {
        return 0;
      } else if (arr[i] > max) {
        max = arr[i]; 
      } else if (arr[i] < min) {
        min = arr[i];
      }
    }
    return max - min;

  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length == 0) {
    return 0;
  } 
  if (arr.length > 0) {
    for(let i = 0; i < arr.length; i++) {

      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
      }  else {
        sumOddElement += arr[i];
      }
    }  
    return sumEvenElement - sumOddElement;
}
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length == 0) {
    return 0;
  } 
  if (arr.length > 0) {
    for(let i = 0; i < arr.length; i++) {

      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i]; 
        countEvenElement++;
      }  
    }  
    return sumEvenElement / countEvenElement;
}



}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
const funcResult = -Infinity;  

for(let i = 0; i < arrOfArr.length; i++) {
  myFunction = func(...arrOfArr[i]);
  const funcResult = myFunction;
 
if(funcResult > maxWorkerResult) {
  maxWorkerResult = funcResult;
}  
}
return maxWorkerResult;
}
