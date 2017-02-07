'use strict';


function writeOrderedArray(start, end) {
  var arr = [];
  var index = 0;

  if (start < end) {
    for (let i = start; i < end; i++) {
      arr[index] = i;
      ++index;
    }
  } else {
    for (let j = start; j > end; j--) {
      arr[index] = j;
      ++index;
    }
  }
  return(arr);
}

var orderedArray = writeOrderedArray(0, 111);

function writeArrayOfRandomValues (arraySize) {
  var arr = [];

  for (let i = 0; i < (arraySize - 1); i++) {
    arr[i] = Math.floor(Math.random() * 111);
  }
  return (arr);
}



// Write a function that is O(1)

function findOrderedValue (arr, value) {
  return (arr[value]);
}

console.log(findOrderedValue(orderedArray, 17));
console.log(findOrderedValue(orderedArray, 101));


// Write a function that is O(n)

function searchUnorderedArray(inputArr, value) {

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === value) {
      return i;
    }
  }
  return ('value not found in array');
}

var unorderedArray = writeArrayOfRandomValues(111);
console.log(searchUnorderedArray(unorderedArray, 17));
console.log(searchUnorderedArray(unorderedArray, 101));


// Write a function that is O(n^2)

function returnMatchingValuesOfSortedAndSortedArrayPairs (arr1, arr2, value) {

  var matches = [];
  var index = 0;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === value ) {
        if (arr2[j] === value) {
          matches[index] = {
            arr1Index: i,
            arr2Index: j
          };
          ++index;
        }
      }
    }
  }
  return(matches);
}

console.log(returnMatchingValuesOfSortedAndSortedArrayPairs(orderedArray, unorderedArray, 17));
console.log(returnMatchingValuesOfSortedAndSortedArrayPairs(orderedArray, unorderedArray, 101));
