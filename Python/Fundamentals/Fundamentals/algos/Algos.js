// const arr1 = [1, 2, 3];
// const separator1 = ", ";
// const expected1 = "1, 2, 3";

// const arr2 = [1, 2, 3];
// const separator2 = "-";
// const expected2 = "1-2-3";

// const arr3 = [1, 2, 3];
// const separator3 = " - ";
// const expected3 = "1 - 2 - 3";

// const arr4 = [1];
// const separator4 = ", ";
// const expected4 = "1";

// const arr5 = [];
// const separator5 = ", ";
// const expected5 = "";

function join(arr, separator) {
    let emptyStr = "";
    for (let i = 0; i < arr.length; i++) {
        emptyStr += arr[i];
        if (i < arr.length - 1) {
            emptyStr += separator;
        }
    }
    return emptyStr;
}

console.log(join(arr5, separator5));

// const nums3 = [1, 2, 3, 7, 9, 15, 16, 17];
// const expected3 = "1-3, 7, 9, 15-17";

// const nums4 = [1,2,3,4,5,6,7,8,9,10]
// const expected4 = "1-10"

function bookIndex(nums) {
    var placeholder = "";
    var continuous = false;
    for (var i=0;i<nums.length;i++){
        if (nums[i]+1 !== nums[i+1]){
            continuous = false;
            placeholder += nums[i] + ", ";
        } else if(nums[i]+1 == nums[i+1] && !continuous) {
            continuous = true;
            placeholder += nums[i];
        }
        if(continuous && placeholder[placeholder.length-1]!="-"){
            placeholder += "-";
        }
    }
    return placeholder;
}

console.log(bookIndex(nums4));
console.log(bookIndex(nums3));