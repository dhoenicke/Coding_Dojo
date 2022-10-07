// const arr1 = ["a", "a", "a"];
// const expected1 = {
//     a: 3,
// };

// const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
// const expected2 = {
//     a: 2,
//     b: 1,
//     c: 3,
//     B: 1,
//     d: 1,
// };

// const arr3 = [];
// const expected3 = {};

function makeFrequencyTable(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (obj.hasOwnProperty(element)) {
            obj[element] += 1
        }
        else {
            obj[element] = 1
        }
    }
    return obj
}

// const nums1 = [1];
// const expected1 = 1;

// const nums2 = [5, 4, 5];
// const expected2 = 4;

// const nums3 = [5, 4, 3, 4, 3, 4, 5];
// const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

// const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
// const expected4 = 1;

// function oddOccurrencesInArray(nums) {}

var myArray = ['a','b','c','c','a'];
var arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];

function makeFrequencyTable(arr){
    var myTable = {};
    for (var i=0;i<arr.length;i++){
        if (arr[i] in myTable){
            myTable[arr[i]] += 1;
        } else {
            myTable[arr[i]] = 1;
        }
    }
    return myTable;
}

console.log(makeFrequencyTable(arr2));
