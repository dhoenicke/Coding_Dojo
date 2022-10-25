/* 
    - Visualization with playing cards (scroll down):
        https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort

    - Array / bar visualization:
        https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

    - Stable sort, efficient for small data sets or mostly sorted data sets.

    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.

    Space: O(1) constant.

    - this sort splits the array into two portions (conceptually, not literally).
    - the left portion will become sorted, the right portion (that hasn't been iterated over yet) is unsorted.

    // can shift OR swap target element until it reaches desired position

    // shifting steps:
    1. consider the first item as sorted
    2. move to the next item
    3. store current item in a temp variable (to make this position available to shift items)
    4. if item to the left of current is greater than current item, shift the left item to the right.
    5. repeat step 4 as many times as needed
    6. insert current item
    7. move to the next item and repeat

    // swap steps:
    1. consider the first item as sorted
    2. move to the next item
    4. if item to left of current item is less than current, swap
    5. repeat step 4 until item to left is less than current item
    6. move to next item and repeat
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given array in-place.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */

// const insertionSort = (nums) => {
//     let temp;
//     for (let i=0; i<nums.length; i++) {
//         if (nums[i] > nums[i+1]) {
//             temp = nums[i];
//             nums[i] = nums[i+1];
//             nums[i+1] = temp;
//         }
//         for(let j=i; j>0; j--) {
//             let count = 0;
//             if (nums[j-count] < nums[j-1-count]) {
//                 temp = nums[j-count];
//                 nums[j-count] = nums[j-1-count];
//                 nums[j-1-count] = temp;
//             }
//             count++;
//         }
//     }
//     return nums
// }

// const insertionSort = (nums) => {
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i+1] < nums[i]){
//             for(var j = i + 1; j >= 1 && nums[j] < nums[j-1]; j--){
//                 [nums[j-1], nums[j]]  = [nums[j], nums[j-1]]
//             } 
//         }
//     }
//     return nums
// }

// const insertionSort = (nums) => {
//     // Code goes here
//     for (let i = 0; i<nums.length; i++) {
//         let lindex = i-1; //left most index
//         let numinsert = nums[i]; 
//         while ((lindex>=0) && (nums[lindex] > numinsert)) {
//             nums[lindex+1] = nums[lindex];
//             lindex--;
//         }
//         nums[lindex+1] = numinsert;
//     }
//     return nums
// }

// const insertionSort = (nums) => {
//     if ( nums.length < 2) {
//         return nums
//     }
//     for(let i = 1; i < nums.length; i++) {
//         let j = i
//         while(j > 0) {
//             if(nums[j-1] > nums[j]) {
//                 let temp = nums[j]
//                 nums[j] = nums[j-1]
//                 nums[j-1] = temp
//             }
//             j--
//         }
//     }
//     return nums;
// }