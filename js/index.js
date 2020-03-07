let numOne;
let numOneString;
let numTwo;

for (; true; ) {
  numOne = +prompt("Enter number");
  numOneString = numOne.toString();
  if (!isNaN(numOne)) {
    break;
  } else {
    alert("Input incorrect");
    continue;
  }
}

for (; true; ) {
  numTwo = +prompt(`Enter shift (0-${numOneString.length - 1})`);
  numTwoString = numTwo.toString();

  if (!isNaN(numTwo) && numTwo < numOneString.length) {
    break;
  } else {
    alert("Input incorrect");
    continue;
  }
}

let a = numOne.toString();

let result = a.substring(numTwo, a.length) + a.substring(0, numTwo);

alert(result);
