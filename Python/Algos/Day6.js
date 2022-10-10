// const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
// const expected1 = false;

// const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
// const expected2 = true;

// const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
// const expected3 = true;

// const queue4 = [];
// const expected4 = true;

// /**
//  * Determines whether each occupied space in the line of people is separated by
//  * 6 empty spaces.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<0|1>} queue
//  * @returns {Boolean}
//  */

// function socialDistancingEnforcer(queue) {
//     let people = []
//     for (let i = 0; i < queue.length; i++) {
//         if (queue[i] == 1) {
//             people.push(i)
//             if (people.length == 2) {
//                 if (people[1] - people[0] >= 6) {
//                     people.shift()
//                 } else {
//                     return false
//                 }
//             }
//         }
//     }
//     return true
// }
// console.log(socialDistancingEnforcer(queue4))

function balanceIndex(nums) {
    if (nums.length < 3) {// need at least 3 numbers to have a possible balance index
        return -1;
    }
    
    let leftSum = nums[0];
    let rightSum = 0;
    //we start at index 2 here because were are summing up everything EXCEPT the first number, and the first potential balance point
    for (let i = 2; i < nums.length; i++) {
        rightSum += nums[i]
    }
    // loop over all potential balance points (starting from 1 since thats the first possible balance index) and check if both sums are equal
    // if they are, return the balance index, if not, shift the sums by adding to the left and subtracting from the right
    for (let i = 1; i < nums.length; i++) {
        if (leftSum === rightSum) {
            return i;
        }
        
        leftSum += nums[i]
        rightSum -= nums[i + 1]
    }
    // if we don't return within the for loop then there is no balance point so return -1 here
    return -1
}