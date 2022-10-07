/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

const strA5 = "silent";
const strB5 = "LiStEn";
const expected5 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */

function isAnagram(s1, s2) {
    let dict = {};
    let dict2 = {};
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    let count = 1;
    if (s1.length !== s2.length) return false;
    for (index in s1) {
        if (s1[index] in dict) {
            dict[s1[index]] += 1;
        } else {
            dict[s1[index]] = 1;
        }
    }
    for (index in s2) {
        if (s2[index] in dict2) {
            dict2[s2[index]] += 1;
        } else {
            dict2[s2[index]] = 1;
        }
    }
    for (key in Object.keys(dict)) {
        if (dict[key] === dict2[key]) {
            if (count == Object.keys(dict).length) {
                return true;
            } 
            count++;
        } else {
            return false;
        }
    }
}

/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

const str2 = "    goodbye     world    ";
const expected2 = "goodbye     world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */

function trim(str) {
    let newString="";
    let fIndex = 0; 
    let lIndex = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] !== " "){
            fIndex = i;
            for(let j = str.length-1; j > 0; j--){
                if(str[j] !== " "){
                    lIndex = j;
                    break;
                }
            }
            break;
        } 
    }

    for(let i=fIndex; i<=lIndex; i++){
        newString += str[i];
    }
    return newString;
}

console.log(trim(str1));