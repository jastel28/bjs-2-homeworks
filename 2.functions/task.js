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
  let dif = 0;

  if (arr.length == 0) {
    return 0;
  } else if (arr.length > 0) {
    for(let i = 0; i < arr.length; i++) {

      if (arr.length == 0) {
        return 0;
      } else if (arr[i] > max) {
        max = arr[i]; 
      } else if (arr[i] < min) {
        min = arr[i];
      }
    }
    dif = max - min;
    return dif;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length == 0) {
    return 0;
  } else if (arr.length > 0) {
    for(let i = 0; i < arr.length; i++) {

      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
      }  else {
        sumOddElement += arr[i];
      }
    }  
    differentElement = sumEvenElement - sumOddElement;
    return differentElement;
}
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length == 0) {
    return 0;
  } else if (arr.length > 0) {
    for(let i = 0; i < arr.length; i++) {

      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i]; 
        countEvenElement++;
      }  
    }  
  degreeElement = sumEvenElement / countEvenElement;
  return degreeElement;
}



}

function makeWork (arrOfArr, ...func) {
let maxWorkerResult = -Infinity; 

for(let i = 0; i < arrOfArr.length; i++) {
 func.apply(null, arrOfArr[i]);
 return func; 
const funcResult = func; 
}  
if(funcResult > maxWorkerResult) {
  maxWorkerResult += funcResult;
}
return maxWorkerResult;

}
