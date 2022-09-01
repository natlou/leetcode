// Definition for a binary tree node.

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function maxDepth(root: TreeNode | null): number {
    // dfs recursive 
    
    // base case 
    if (root === null) {
        return 0; 
    } else { // recursive step 
        let leftDepth = maxDepth(root.left); 
        let rightDepth = maxDepth(root.right); 
        return Math.max(leftDepth, rightDepth) + 1; 
    }
};

function maxDepth_dfs_iterative(root: TreeNode | null): number {
    // dfs stack
    let stack : TreeNode[] = [];
    let depths : number[] = [];
    
    stack.push(root!);
    depths.push(1);
    
    let depth = 0; 
    let current_depth = 0;
    
    while (stack.length !== 0) {

        root = stack.pop()!;
        current_depth = depths.pop()!;
        
        if (root !== null) {            
            depth = Math.max(depth, current_depth);
            
            stack.push(root.left!);
            depths.push(current_depth + 1);

            stack.push(root.right!);
            depths.push(current_depth + 1);
        }
        
    }
    
    return depth;
};
