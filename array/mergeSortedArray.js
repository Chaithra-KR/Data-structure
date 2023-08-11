// https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

let numbers1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let numbers2 = [2, 5, 6];
let n = 3;
function merge(numbers1, m, numbers2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let pMerged = m + n - 1;
    
    while (p1 >= 0 && p2 >= 0) {
        if (numbers1[p1] > numbers2[p2]) {
            numbers1[pMerged] = numbers1[p1];
            p1--;
        } else {
            numbers1[pMerged] = numbers2[p2];
            p2--;
        }
        pMerged--;
    }
    
    while (p2 >= 0) {
        numbers1[pMerged] = numbers2[p2];
        p2--;
        pMerged--;
    }
}

merge(numbers1, m, numbers2, n);
console.log(numbers1);
