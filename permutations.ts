/*
Approach 1: Backtracking
Backtracking is an algorithm for finding all solutions by exploring all potential candidates. If the solution candidate turns to be not a solution (or at least not the last one), backtracking algorithm discards it by making some changes on the previous step, i.e. backtracks and then try again.

Here is a backtrack function which takes the index of the first integer to consider as an argument backtrack(first).

If the first integer to consider has index n that means that the current permutation is done.
Iterate over the integers from index first to index n - 1.
Place i-th integer first in the permutation, i.e. swap(nums[first], nums[i]).
Proceed to create all permutations which starts from i-th integer : backtrack(first + 1).
Now backtrack, i.e. swap(nums[first], nums[i]) back.
*/

/*
Runtime: 77 ms, faster than 98.71% of TypeScript online submissions for Permutations.
Memory Usage: 45.2 MB, less than 93.04% of TypeScript online submissions for Permutations.
*/

function permute(nums: number[]): number[][] {
    
    // keeps track of the first integer to consider in the (graph / tree)
    // first is typically the first level of the tree starting from 0
    function backtrack(first = 0) {
        // if the first === nums.length, then current permutation is done (final level)
        if (first === nums.length) {
            output.push(nums.map(x=> x)); // shallow copy of the array
        }
        // iterate over the integers from index: first to index: n - 1

            

        for (let i = first; i < nums.length; i++) {
            // - place i-th integer first in the permutation, 
            //   i.e swap(nums[first], nums[i])
            let temp = nums[i]; 
            nums[i] = nums[first];
            nums[first] = temp; 
            
            // - proceed to create all permutations that start from i-th integer
            //   backtrack(first + 1) [first + 1 since we are going into a new level]
            backtrack(first + 1);

            // - now backtrack, i.e swap(nums[first], nums[i]) back
            nums[first] = nums[i];
            nums[i] = temp; 
        }
        
    }
     
    let output : number[][] = []; 
    backtrack(); 

    return output;
};