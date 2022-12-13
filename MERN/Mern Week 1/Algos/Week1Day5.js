/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.

  Output: only the shared values between the two arrays (deduped).

  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */

function orderedIntersection(sortedA, sortedB) {
    let a = 0
    let b = 0
    let set = new Set()
    while (a < sortedA.length && b < sortedB.length) {
        if (sortedA[a] == sortedB[b] && !set.has(sortedA[a])) {
            set.add(sortedA[a])
            a++
            b++
        }
        else if (sortedA[a] > sortedB[b]) {
            b++
        }
        else if (sortedA[a] < sortedB[b]) {
            a++
        }
        else {
            a++
            b++
        }
    }
    return Array.from(set)
}
console.log(orderedIntersection(numsA3, numsB3))
