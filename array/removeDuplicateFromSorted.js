let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                for (let k = j; k < nums.length - 1; k++) {
                    nums[k] = nums[k + 1];
                }
                nums.length--;
                j--;
            }
        }
    }
    return nums;
};

console.log(removeDuplicates(nums));
