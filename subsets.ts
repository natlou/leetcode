/*
Runtime: 69 ms, faster than 96.30% of TypeScript online submissions for Subsets.
Memory Usage: 46 MB, less than 7.72% of TypeScript online submissions for Subsets.
*/

function subsets(nums: number[]): number[][] {
    // each element is a new level 
//                                [1,2,3]
// is 1 in the set (y/n)   [1,2,3]       [2, 3]
// is 2 in the set (y/n)[1,2,3] [1,3]  [2,3] [3]
// is 3 in the set [1,2,3] [1,2] [1,3][2,3][2][3][]
    
    // since this is a level order tree traversal I want to do BFS
    
    let output: number[][] = []; 
    let queue : number[][] = [];
    let visited = new Set(); 
    let level = 0; 
    
    queue.push(nums.map(x => x));
    
    // queue = [[1, 2, 3]]
    
    // loop until queue is empty or it reaches the last finite level
    while (queue.length > 0 && level !== nums.length) {
        
        // since length of a power set is 2^n, we inverse to solve for n
        level = Math.trunc(Math.log2(output.length))
        let currentNode: number[] = queue.shift()!;
        
        if (!visited.has(currentNode)) {
            output.push(currentNode);
            visited.add(currentNode); 
        }

        const target = nums[level]; 
    
        // dont remove target
        const child1 = currentNode; 
        queue.push(child1);
        
        // remove target
        let temp = currentNode.map(x => x);
        temp.splice(temp.indexOf(target), 1);
        const child2 = temp; 
        queue.push(child2); 

    }

    return output;
};

function subsets_cascading(nums: number[]): number[][] {
    
    let output : number[][] = [[]];
    
    for (let num of nums) {

        let output_copy = output.map(x => x);
        
        for (let subset of output_copy) {
            let new_subset : number[] = subset.map(x => x);
            new_subset.push(num)
            output.push(new_subset);
        }
        
    }
    
    return output;
};