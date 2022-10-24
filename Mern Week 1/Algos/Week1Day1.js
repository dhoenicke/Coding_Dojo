/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
// const bubbleSort = (nums) => {

// }

const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(bubbleSort(numsRandomOrder));

/*******************************************************************************

const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
function bubbleSort(arr){
    if (arr.length < 2){
        return arr
    }
    let numberOfSwap = 0
    do {
        numberOfSwap = 0
        for (let i = 1; i < arr.length; i++){
            if (arr[i] < arr[i-1]){
                let temp = arr[i]
                arr[i] = arr[i-1]
                arr[i-1] = temp
                numberOfSwap ++
            }
        }
    } while (numberOfSwap > 0);
    return arr
}
console.log(bubbleSort(numsRandomOrder));

const bubbleSort = (nums) => {
        for(j=0;j<nums.length;j++){
            for(i=0;i<nums.length;i++){
                if(nums[i]>nums[i+1]){
                    let temp = nums[i]
                    nums[i] = nums[i+1]
                    nums[i+1] = temp
                }
        }
    }
        return nums
}

const bubbleSort = (nums) => {

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j + 1]
                nums[j + 1] = nums[j]
                nums[j] = temp
            }
        }
    }
    return nums
}

const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(bubbleSort(numsRandomOrder));

function bubbleSort(arr) {

    let sorted = false
    while (sorted == false) {
        sorted = true
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                sorted = false
            }
        }
    }
    return arr
}