/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.

    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

/* 
    Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
    because it occurs 3 times at most in ONE set
*/
const nums1A = [1, 2, 2, 2, 7];
const nums1B = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const nums2B = [2, 6, 6, 7];
const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

const nums3A = [];
const nums3B = [2, 2, 3, 3, 3];
const expected3 = [2, 2, 3, 3, 3];

const nums4A = [2, 2, 3, 3, 3];
const nums4B = [];
const expected4 = [2, 2, 3, 3, 3];

const nums5A = [];
const nums5B = [];
const expected5 = [];

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
// function merge(first, second) {
//     let i = 0;
//     let j = 0;
//     let result = [];
//     while (i < first.length && j < second.length) {
//         if (first[i] <= second[j]) {
//             result.push(first[i]);
//             i++;
//         }
//         else if (first[i] > second[j]) {
//             result.push(second[j]);
//             j++;
//         }
//     }
//     result = result.concat(first.slice(i)).concat(second.slice(j))

//     return result;
// }

// function orderedMultisetUnion(sortedA, sortedB) {
//     //edge cases
//     if (sortedA.length === 0 && sortedB.length === 0) {
//         return []
//     }
//     if (sortedA.length === 0 || sortedB.length === 0) {
//         return (!sortedB.length) ? sortedA : sortedB
//     }
//     //main body of fx
//     let aPointer = 0;
//     let bPointer = 0;
//     const newArr = [];
//     while (aPointer < sortedA.length || bPointer < sortedB.length) {
//         if (sortedA[aPointer] === sortedB[bPointer]) {  //same values
//             newArr.push(sortedA[aPointer]);
//             aPointer++;
//             bPointer++;
//         }
//         else if (sortedA[aPointer] < sortedB[bPointer] || !sortedB[bPointer]) {  //a < b
//             newArr.push(sortedA[aPointer]);
//             aPointer++;
//         }
//         else if (sortedA[aPointer] > sortedB[bPointer] || !sortedA[aPointer]) {  //b < a
//             newArr.push(sortedB[bPointer]);
//             bPointer++;
//         }
//     }
//     return newArr;
// }

// function orderedMultisetUnion(sortedA, sortedB) {
//     let a = 0;
//     let b = 0;
//     let result = [];
//     while(a < sortedA.length || b < sortedB.length) {
//         if(sortedA[a] < sortedB[b] || sortedB[b] == undefined) {
//             result.push(sortedA[a]);
//             a++;
//         }
//         else if(sortedA[a] == sortedB[b]) {
//             result.push(sortedA[a]);
//             a++;
//             b++;
//         }
//         else {
//             result.push(sortedB[b]);
//             b++;
//         }
//     }
//     return result;  
// }

// console.log(orderedMultisetUnion(nums1A, nums1B));
// console.log(orderedMultisetUnion(nums2A, nums2B));
// console.log(orderedMultisetUnion(nums3A, nums3B));
// console.log(orderedMultisetUnion(nums4A, nums4B));
// console.log(orderedMultisetUnion(nums5A, nums5B));

// function orderedMultisetUnion(sortedA, sortedB) {
//     const union = [];
//     let idxA = 0;
//     let idxB = 0;

//     while (idxA < sortedA.length || idxB < sortedB.length) {
//         if (idxA === sortedA.length) {
//         // sortedB is longer, push in all remaining sortedB nums
//         union.push(sortedB[idxB++]);
//         continue;
//         } else if (idxB === sortedB.length) {
//         // sortedA is longer, push in remaining sortedA nums
//         union.push(sortedA[idxA++]);
//         continue;
//         }

//         if (sortedA[idxA] === sortedB[idxB]) {
//         union.push(sortedA[idxA++]);
//         idxB++; // since both were same, increment both
//         } else if (sortedA[idxA] < sortedB[idxB]) {
//         union.push(sortedA[idxA++]);
//         } else {
//         union.push(sortedB[idxB++]);
//         }
//     }
//     return union;
// }

// function orderedMultisetUnion(sortedA, sortedB) {
//     let pointerA = 0;
//     let pointerB = 0;
//     let result = [];
//     while (pointerA < sortedA.length && pointerB < sortedB.length) {
//         if (sortedA[pointerA] === sortedB[pointerB]) {
//             result.push(sortedA[pointerA])
//             pointerA++;
//             pointerB++;
//         }
//         else if (sortedA[pointerA] < sortedB[pointerB]) {
//             result.push(sortedA[pointerA]);
//             pointerA++;
//         }
//         else {
//             result.push(sortedB[pointerB]);
//             pointerB++;
//         }
//     }
//     return result.concat(sortedA.slice(pointerA)).concat(sortedB.slice(pointerB));
// }