const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

const str5 = "yeeeeees";
const expected5 = "yes";

const str_bonus = "SuperTxT";
const expected_bonus = "SuperxT";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */

function stringDedupe(str) {
    let obj = {}
    let ans = []
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            ans.push(str[i])
            obj[str[i]] = str[i]
        }
    }
    return ans.join("")
}

console.log(stringDedupe(str5));

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */

function reverseWordsSplit(wordsStr) {
    const words = wordsStr.split(" ");
    let wordsReversed = "";

    for (const word of words) {
        let reversedWord = "";

        for (let i = word.length - 1; i >= 0; --i) {
            reversedWord += word[i];
        }

        // add a space in front of word if it's not the first word
        if (wordsReversed.length > 0) {
            reversedWord = " " + reversedWord;
        }
        wordsReversed += reversedWord;
    }
    return wordsReversed;
}


// const str1 = "This is a test";
// const expected1 = "test a is This";

// const str2 = "hello";
// const expected2 = "hello";

// const str3 = "   This  is a   test  ";
// const expected3 = "test a is This";

// /**
//  * Reverses the order of the words but not the words themselves form the given
//  * string of space separated words.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} wordsStr A string containing space separated words.
//  * @returns {string} The given string with the word order reversed but the words
//  *    themselves are not reversed.
//  */

function reverseWordOrderSplit(wordsStr = "") {
    // if all spaces
    if (wordsStr == false) {
        return wordsStr;
    }

    const words = wordsStr.split(" ");
    let reversedWordOrder = "";

    // loop backwards
    for (let i = words.length - 1; i >= 0; --i) {
        // Skip empty strings resulting from .split encountering multiple spaces.
        if (words[i] === "") {
            continue;
        }

        if (reversedWordOrder.length > 0) {
            reversedWordOrder += " ";
        }

        reversedWordOrder += words[i];
    }
    return reversedWordOrder;
}