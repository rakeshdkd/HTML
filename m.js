// let nums = [1,1,1];
// // console.log(nums.length)

// var subarraySum = function (nums, k) {
//     // Getting all the  contiguous subarray.
//     let newArray = [];

//     for (let i = 1; i <= nums.length; i++) {

//         for (let j = 0; j < i; j++) {
//             let subArray = nums.slice(j, i)
//             newArray.push(subArray);

//         }

//     }


//     // Getting the sum of all subarrays 
//     let sumOfSubarray = [];
//     let sum = 0;

//     for (let i = 0; i < newArray.length; i++) {
//         for (let j = 0; j < newArray[i].length; j++) {
//             sum += newArray[i][j];

//         }
//         sumOfSubarray.push(sum);
//         sum = 0;

//     }


//     // Getting the matching the target value to the sum of subarray.

//     let count = 0;
//     for (let i = 0; i < sumOfSubarray.length; i++) {

//         if (sumOfSubarray[i] == k) {
//             count++;
//         }
//     }
//     return count;
// };

// console.log(subarraySum(nums, 3))


// let arr = [[0, 0], [1, 1]];

// function rowWithMax1s(arr, n, m) {

//     let counter = 0;
//     let count = 0;
//     let max = 0;
//     // return arr[counter]
//     for (let i = 0; i < m; i++) {
//         let counter = 0;

//         if (arr[n][i] == 1) {
//             count++;
//         }
//         if (i == m-1) {
//             n--;
//             // i = -1;
//         }
//         if (count > max) {
//             max = count;
//         }
//     }
//     return max;
// }

// console.log(rowWithMax1s(arr, 2, 2))


// let nums = [2, 7, 5, 3];
// let target = 9;

// let answer = new Map;
// // console.log(answer.get(0))
// for (let i = 0; i < nums.length; i++) {
//     let remaining = target - nums[i]; // 7,2
//     if (answer.get(remaining) != undefined) {
//          console.log([i, answer.get(remaining)]);
//     }
//     answer.set(nums[i], i);
//     console.log(answer)
// }
// var sortColors = function (nums) {
//     for (let i = nums.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             if (nums[j + 1] < nums[j]) {
//                 [nums[j + 1], nums[j]] =[ nums[j], nums[j + 1]]
//             }
//         }
//     }
//     return nums;
// };

// console.log(sortColors(nums))

/**
 * Print below pattern.
 * 
1
22
333
4444
55555

 */

// function print_pattern() {
//     /* Function to print the pattern */

//     let str = "";
//     let str1 = "1";
//     for (let i = 1; i <= 5;) {

//         for (let j = 0; j < i; j++) {
//             str += str1;
//         }
//         str += "\n";
//         i++;

//         str1 = i;
//     }
//     // return str;
//     console.log(str)
// }
// print_pattern()


// let nums = [2, 2, 1, 1, 1, 2, 2];

// var majorityElement = function (nums) {
//     let majorityCount = Math.floor(nums.length / 2);
//     let count = 1;
//     let map = new Map;

//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i])) {
//             count++;
//             map.set(nums[i], count)
//         } else {
//             count = 1;
//             map.set(nums[i], count)

//         }
//     }

//     map.forEach(element => {
//         // console.log(element)
//         if ((element) > majorityCount) {
//             console.log(element);
//         }
//     });
//     // console.log(map.get(2))
// };

// // console.log(majorityElement(nums))
// majorityElement(nums)


// function getfname(fname) {
//     console.log(fname);

//     function getLname(lname) {
//         console.log(lname)
//     }
//     getLname("dhakad");
// }

// getfname("rakesh");




// console.log(x);
// var x = 2;
// let arr =[2,5,1,3,4];
// for(let i=0;i<arr.length-1;i++){ 
//     let smallest=i;
//     for(let j=i+1;j<arr.length;j++){ 
//         if (arr[smallest]<arr[j]){
//             smallest=j;

//         }

//     }
//     let temp=arr[smallest];
//         arr[smallest]=arr[i];
//         arr[i]=temp;

// }
// console.log(arr)


// console.log(printName());

// console.log(a);
// var a = 3;

// var printName = (name) => {

// console.log(name)

// }

// console.log(printName);

// console.log(a);



// var a = 3;



// var printName = function (name) {

// console.log(name)

// }
let array = [1, 2, 3, 4, 5, 6];
array.forEach(doubleEven);

function doubleEven(element, index, array) {
    if (element % 2 === 0) {
        console.log(element * 2);
    }
}

// var arr = [1, 2, 3, 5]



// var newArr = arr.forEach((item, i) => {

//     console.log(item + 'index' + i)

//     return item + i

// })

// console.log(newArr);

//

// var arr = [1, 2,3,5]



// var newArr = arr.map((item, i ) => {

// console.log(item + 'index' + i)

// return item + i

// })



// console.log(newArr)





console.log('a');

console.log('b');

setTimeout(()=> console.log('c'), 1000);

setTimeout(()=> console.log('d'), 0);

console.log('e');

var arr = [1, 2,3,5]



var newArr = arr.forEach((item, i ) => {

console.log(item + 'index' + i)

return item + i

})



console.log(newArr);