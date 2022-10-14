// /* 
//   Array: Mode
  
//   Create a function that, given an array of ints,
//   returns the int that occurs most frequently in the array.
//   What if there are multiple items that occur the same number of time?
//     - return all of them (in an array)
//     - what if all items occur the same number of times?
//       - return empty array
// */

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];

const nums6 = [5,1,4,4,1,5]
const expected6 = [];


// //  - order doesn't matter

// /**
//  * Finds the mode or all modes if there are more than one. The mode is the
//  *    value which occurs the most times in the given array.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<number>} nums Test
//  * @returns {Array<number>} Mode or modes in any order.
//  */

function mode(nums) {
    let frequency = {}
    let results = []
    let mode = 0
    for(let num in nums) {
        if (!(nums[num] in frequency)) {
            frequency[nums[num]] = 0
        }
        frequency[nums[num]]++
        console.log(frequency)
        if (frequency[nums[num]] > mode) {
            mode = frequency[nums[num]]
        }
    }
    // for(let num in frequency) {
    //     if (frequency[num] > mode) {
    //         mode = frequency[num]
    //         // console.log(mode)
    //     }
    // }
    for(let num in frequency) {
        if (frequency[num] === mode) {
            results.push(parseInt(num))
        }
    }
    if (Object.keys(frequency).length === results.length) {
        return []
    }
    return results
}
console.log(mode(nums5))