// Contains Duplicate Easy
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true

// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false


// O(n²) performance
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++){
            let newArr = nums.slice() // [...nums] also works because it creates a shallow copy , doesn't work when I assign to nums directly because it points to the same space in memory, causing mutations
            newArr.splice(i,1)
            if(newArr.includes(nums[i])){
                return true
            }
        }
        return false
    }
}