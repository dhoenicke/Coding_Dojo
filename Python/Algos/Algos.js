const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

const str5 = "aaaabbcdddaaa";
const expected5 = "a7b2c1d3";

function encodeStr(str) {
    let newString = "";
    let counter = 0;
    let start = "";
    for(let i = 0; i < str.length; i++) {
        if (i === 0) {
            start = str[i];
            counter++;
        } else if (str[i] != start){
            newString += start+counter;
            start = str[i];
            counter = 1;
        } else if (str[i] === start) {
            counter++
        }
    }
    newString += start+counter;
    if (newString.length < str.length) {
        return newString;
    } else {
        return str;
    }
}

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

function decodeStr(str) {
    let freq = {};
    let arrayOfNum = [];
    let newString = "";
    let numString ="";
    for(let i=0; i< str.length; i++){
        if(isNaN(parseInt(str[i]))){
            arrayOfNum.push(numString);
            numString = "";
            freq[str[i]] = parseInt(numString);
        }
        else{
            numString += str[i];
            if(i === str.length -1 && !isNaN(parseInt(str[i]))){
                arrayOfNum.push(numString);
            }
        }
    }
    
    arrayOfNum.shift();

    for(let i=0; i<arrayOfNum.length;i++){
        console.log(arrayOfNum[i]);
        for(property in freq){
            freq[property] = parseInt(arrayOfNum[i]);
            i++;
        }
    }

    for(property in freq){
        for(let i=0; i < freq[property]; i++){
            newString += property;
        }
    }
    return newString;
}

decodeStr(str2);