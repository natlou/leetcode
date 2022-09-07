function rotate(matrix: number[][]): void {
    
    let n = matrix.length;
    
    // treat matrix[i] as a stack 
    // treat matrix[j] as a queue
    
    for (let i = 0; i < n; i++) {
        for (let j = n - 1; j >= 0; j--) {
            matrix[j].unshift(matrix[i].pop()!);
        }
    }

    return; 
};