funcation caculator() {
let num1 =parseInt(document.getElementById("num1").value);
let num2 =parseInt(document.getElementById("num2").value);
let oprator= document..getElementById("oprator")..value);

let  result;
  case "+":
  result = num1+ num2;
  break;
  case "-":
  result = num1-num2;
  break;
  case "*":
  result= num1*num2;
  break;
  case "/":
  result= num1 / num2;
  break;
   defualt:
   result = "invalid oprator  "
  break;
}

document.getElementById("result").value= result;
}
