function inorderTraversal(root: TreeNode | null): number[] {

    // global result 
    let result : number[] = []; 
    
    // dfs helper 
    const dfs = (root) => {
        if (root !== null) {
            dfs(root.left); 
            result.push(root.val);
            dfs(root.right);
        }
    }
    
    dfs(root); 
    
    return result; 
};