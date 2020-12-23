// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

var twoSum = function(nums, target) {
    output = []
    nums.forEach((num, index) => {
        if (nums.includes(target - num) && index !== nums.indexOf(target - num) && output.length === 0){
            output.push(index);
            output.push(nums.indexOf(target - num))
        }
    })
    return output
}

// VIDEO BETTER ANSWER ------------------
var twoSum = function(nums, target){
    let dictionary = {}
    for (let i = 0; i<nums.length; i++){
        let currentNum = nums[i]
        // 0 is a falsy value
        if (dictionary[currentNum] || dictionary[currentNum] === 0){
            return [dictionary[currentNum], i]
        } else {
            let match = target - currentNum
            dictionary[match] = i
        }
    }
}

// VIDEO OK ANSWER ------------------
var twoSum = function(nums, target){
    for (let i = 0; i<nums.length; i++){
        let currentNum = nums[i]
        for (let j=i+1; j<nums.length; j++){
            let compareNum = nums[j]
            if (compareNum + currentNum === target){
                return [i,j]
            }
        }
    }
}
