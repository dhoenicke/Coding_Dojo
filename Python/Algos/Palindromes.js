const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;


function isPalindrome(str) {
    var boolean;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[str.length - 1 - i]) {
            boolean = true;
        }
        else {
            return boolean = false;
        }
    }
    return boolean;
}

console.log(isPalindrome(str1));

