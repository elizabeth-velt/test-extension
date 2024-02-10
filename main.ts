// binary search
function search(nums: number[], target: number): number {
    let l =  0, h = nums.length;
    while (l < h) {
        const midpoint = Math.floor((h - l) / 2) + l
        if (nums[midpoint] === target) {
            return midpoint;
        }
        if (nums[midpoint] < target) {
            l = midpoint + 1;
        }
        if (nums[midpoint] > target) {
            h = midpoint;
        }
    }
    return -1;
};
