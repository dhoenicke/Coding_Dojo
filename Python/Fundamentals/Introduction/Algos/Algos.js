/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
var reverseStr = (str) => {
    var j = '';
    for (let index = str.length - 1; index > 0; index--) {
        j += str[index]
    } 

}

function reverseString(str) {
  let arr = []
  for (let i=str.length-1;i>=0;i--){
      arr.push(str[i])
  }
  return arr.join("")
}

console.log(reverseString("creature"))