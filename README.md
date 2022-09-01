# leetcode

# recursion
1. What is the simpliest possible input? (base case)
2. Play around with examples and visualize.
3. Relating hard cases to simpler cases (large cases to smaller cases AKA induction).
4. Generalize the pattern i.e inductive step so define f(N + 1) in terms of N and f(N).
5. Write code by combining recursive pattern with base case.

# backtracking / recursive dfs helper function 
function fn(nums: number[]) : number[][] {
  // global output 
  const output = []; 
  
  // dfs recursive helper 
  const dfs = (first = 0, current = []) => {
    // base case 
    if (first === nums.length) {
      output.push(current.map(x => x)); 
      return; 
    }
    
    // dfs recursive step
    for (let i = first; i < nums.length; i++) {
      // do something necessary 
      swap(nums[i], nums[first]) or current.push(x[i])
      // recursively go to next level 
      dfs(first + 1, current); 
      // revert AKA (backtrack once dfs(...) is returned) 
      swap(nums[i], nums[first]) or current.pop()
    }
  }
  
  dfs();
  return output; 
}
