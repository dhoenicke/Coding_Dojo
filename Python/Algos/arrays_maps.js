// const keys1 = ["abc", 3, "yo"];
// const vals1 = [42, "wassup", true];
// const expected1 = {
//     abc: 42,
//     3: "wassup",
//     yo: true,
// };

// const keys2 = [];
// const vals2 = [];
// const expected2 = {};

// function zipArraysIntoMap(keys, values) {
//     let ans = {}
//     let i = 0
//     while (i < keys.length) {
//         ans[keys[i]] = values[i]
//         i++
//     }
//     return ans
// }
// console.log(zipArraysIntoMap(keys1, vals1));

const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

function invertObj(obj) {
    let expected2 = {};
    for( var item in obj){
        expected2[obj[item]] = item;
    }
    return expected2;
};

console.log(invertObj(obj1));