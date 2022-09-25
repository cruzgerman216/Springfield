// Evaluate the expression of a and b depending on what operator is (..see defined function below).

function calculate(a, b, operator) {
  let evaluation = 0;
  // write your logic here
  if(operator === "+"){
      evaluation = a + b;
  }else if(operator === '-'){
    evaluation = a - b;
  }

  return evaluation;
}

calculate(1,1, "+"); // 2
calculate(2, 2, '-'); // 0
