// Question 1
  // Your code here
  
  function findPair(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          return [arr[i], arr[j]];
        }
      }
    }
  
    return null;
  }
  let numbers = [2, 4, 6, 8, 10];
  let targetNumber = 14;
  let pair = findPair(numbers, targetNumber);
  
  if (pair !== null) {
    console.log('Pair found:', pair);
  } else {
    console.log('No pair found.');
  }


// Question 2
let str = "Huzaifa";
let reversedStr = reverseString(str);

function reverseString(String) {
    let reversedString = "";
  
    for (let i = String.length - 1; i >= 0; i--) {
      reversedString += String.charAt(i);
    }
  
    return reversedString;
  }
  console.log(reversedStr);
// Question 3
function sumLargest(numbers) {
  // Your code here
}

// Question 4
let inputArray = ["Karachi","Islamabad","Lahore","peshawar","Multan"];
let filteredArray = filterStrings(inputArray);


function filterStrings(arr) {
  let filteredArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
}
console.log(filteredArray);

// Question 5
function filterEven(numbers) {
  // Your code here
}

// Question 6
function pluck(objects, key) {
  // Your code here
}

// Question 7

  // Your code here
let isPalin = isPalindrome(str)
  function isPalindrome(inputString) {
    var reversedString = '';
  
    for (var i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString.charAt(i);
    }
  
    return inputString === reversedString;
  }
  console.log(isPalin);

// Question 8
function mostFrequent(str) {
  // Your code here
}

// Question 9
function stringLengths(strings) {
  // Your code here
}

// Question 10
function firstGreater(numbers) {
  // Your code here
}
module.exports = {
  findPair,
  reverseString,
  sumLargest,
  filterStrings,
  filterEven,
  pluck,
  isPalindrome,
  mostFrequent,
  stringLengths,
  firstGreater
}
