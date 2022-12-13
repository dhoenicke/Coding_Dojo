/**
 * Concatenate three given strings together in this order:
 * 3rd string, 1st string, 2nd string.
 * @returns {string} The three given strings combined (concatenated).
 */
 function combineStrings(str1,str2,str3) {
    var newString = str3+str1+str2;
    string = dog + falls + asleep;
    return newString;
 }

 console.log(combineStrings("I","Love","Pizza"));

/**
 * Combine two given strings together with the smaller string being added
 * in the front. If they are the same length, the first string will be
 * added to the front.
 * @returns {string} The combined strings.
 */
 function combineSmallerStringFirst(str1, str2) {
    if(str1.length > str2.length) {
        return str2 + str1;
    }

    else {
        return str1 + str2;
    }
 }

/**
 * Given a string and an integer representing how many times the string should
 * be repeated, create a new string that is the given string repeated that
 * many times.
 * @param {string} text The given string to be repeated.
 * @param {number} num The number of times to repeat the given string.
 * @returns {string} The given string repeated the specified amount of times.
 */
 function stringRepeat(text,num){
    var ans = ''
    for(let i = 0; i < num; i++){
        ans += text
    }
    return ans
}