// Contains Duplicate Easy
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true

// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false


class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const checked = new Set()
        for (const num of nums){
            if (checked.has(num)){
                return true
            }
            checked.add(num)
        }
        return false
    }
}

// O(n) performance
// Single Iteration:Solution loops through the array once (at most), so the iteration is O(n).
// Constant-Time Operations: Set.has() and Set.add() are O(1) on average, meaning these operations do not increase the complexity significantly.
// No Nested Loops: Solution avoid nested loops or redundant checks, which keeps them linear in performance.



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

// O(n²) performance
// Original approach using splice and includes had a time complexity of O(n²). Here's why:
// The outer loop iterates through the array O(n) times.
// Inside the loop, includes performs a linear search over the remaining elements of the array, which is O(n) in the worst case.
// Combining these gives a total time complexity of O(n) * O(n) = O(n²).

