function getFirstFunction() {
  let firstNumber = +prompt(`Input tour first number`);
  let secondNumber = +prompt(`Input your second number`);

  alert(`Your result is ${getDigit(firstNumber, secondNumber)}`);
}

function getDigit(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a == b) return 0;
}

// Factorial

function getFactorial() {
  let userNumber = +prompt(`Input your number`);
  alert(`Result is ${factorial(userNumber)} `);
}

function factorial(n) {
  return n < 2 ? 1 : n * factorial(n - 1);
}

//New number

function getNewNumber() {
  let firstNumber = prompt(`Input tour first number`);
  let secondNumber = prompt(`Input your second number`);
  let thirdNumber = prompt(`Input your third number`);
  alert(`Result is ${getNewString(firstNumber, secondNumber, thirdNumber)}`);
}
function getNewString(a, b, c) {
  return a + b + c;
}

//Area
function getArea() {
  let firstNumber = +prompt(`Input tour first number`);
  let secondNumber = +prompt(`Input your second number`);

  alert(`Your result is ${calculateArea(firstNumber, secondNumber)}`);
}
function calculateArea(a, b = false) {
  return b ? a * b : a * a;
}

//Ideal number

function getIdealNumber() {
  let userNumber = +prompt(`Input your number`);

  if (calcNumber(userNumber)) {
    alert(`You have ideal number`);
  } else {
    alert(`No`);
  }
}

function calcNumber(a) {
  let sum = 0;

  for (let i = 0; i < a; i++) {
    if (a % i == 0) {
      sum += i;
    }
  }

  if (sum == a) {
    return true;
  } else {
    return false;
  }
}

//All ideal numbers
function getAllIdealNumbers() {
  let minNumber = +prompt(`Input first number`);
  let maxNumber = +prompt(`Input second number`);
  let result = " ";
  for (let i = minNumber; i < maxNumber; i++) {
    if (calcNumber(i)) {
      result += i + " ";
    }
  }
  alert(`Your ideal numbers are: ${result}`);
}
//Time
function getTime() {
  let hours = +prompt(`Input hours`);
  let minutes = +prompt(`Input minutes`);
  let seconds = +prompt(`Input seconds`);
  if (
    hours > 0 &&
    hours <= 24 &&
    (minutes >= 0 && minutes <= 59) &&
    (seconds >= 0 && seconds <= 59)
  ) {
    alert(`Result is ${calculateTime(hours, minutes, seconds)}`);
  } else {
    alert(`Wrong data format`);
  }
}

function calculateTime(a, b, c) {
  if (b == 0) {
    b = "00";
  }
  if (c == 0) {
    c = "00";
  }
  return a + ":" + b + ":" + c;
}

//Seconds
function getSeconds() {
  let hours = +prompt(`Input hours`);
  let minutes = +prompt(`Input minutes`);
  let seconds = +prompt(`Input seconds`);

  if (
    hours > 0 &&
    hours <= 24 &&
    (minutes >= 0 && minutes <= 59) &&
    (seconds >= 0 && seconds <= 59)
  ) {
    alert(`Result is ${calculateSeconds(hours, minutes, seconds)}`);
  } else {
    alert(`Wrong data format`);
  }
}

function calculateSeconds(a, b, c) {
  return a * 3600 + b * 60 + c;
}

//Seconds in string

function getDateString() {
  let seconds = +prompt(`Input seconds`);
  alert(`Date is: ${calculateDateString(seconds)}`);
}

function calculateDateString(a) {
  let h;
  let m;
  let s;

  h = Math.floor(a / 3600);

  m = Math.floor((a % 3600) / 60);

  s = (a % 3600) % 60;
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  return h + ":" + m + ":" + s;
}

//Time difference
function getTimeDifference() {
  let hoursFirst = +prompt(`Input hours`);
  let minutesFirst = +prompt(`Input minutes`);
  let secondsFirst = +prompt(`Input seconds`);

  let hoursSecond = +prompt(`Input hours`);
  let minutesSecond = +prompt(`Input minutes`);
  let secondsSecond = +prompt(`Input seconds`);

  if (
    (hoursFirst > 0 &&
      hoursFirst <= 24 &&
      (minutesFirst >= 0 && minutesFirst <= 59) &&
      (secondsFirst >= 0 && secondsFirst <= 59)) ||
    (hoursSecond > 0 &&
      hoursSecond <= 24 &&
      (minutesSecond >= 0 && minutesSecond <= 59) &&
      (secondsSecond >= 0 && secondsSecond <= 59))
  ) {
    alert(
      `Result is ${calculateTimeDifference(
        hoursFirst,
        minutesFirst,
        secondsFirst,
        hoursSecond,
        minutesSecond,
        secondsSecond
      )}`
    );
  } else {
    alert(`Wrong data format`);
  }
}

function calculateTimeDifference(a, b, c, x, y, z) {
  let firstTime = calculateSeconds(a, b, c);
  let secondTime = calculateSeconds(x, y, z);
  let result = firstTime - secondTime;
  return calculateDateString(result);
}
