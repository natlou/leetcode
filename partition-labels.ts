/*
Runtime: 73 ms, faster than 94.74% of TypeScript online submissions for Partition Labels.
Memory Usage: 45.3 MB, less than 66.67% of TypeScript online submissions for Partition Labels.
*/

function partitionLabels(s: string): number[] {
    let globalPartitionLengths : number[] = [];
    let partitionFirstIndex = 0; 
    let partitionLastIndex = -1;
    let lastIndexMap = new Map(); 
    
    
    for (let i = 0; i < s.length; i++) {
        lastIndexMap.set(s[i], i);
    }
    
    
    for (let i = 0; i < s.length; i++) {
                
        if (lastIndexMap.get(s[i]) >= partitionLastIndex) {
            partitionLastIndex = lastIndexMap.get(s[i])
        }
        
        if (i === partitionLastIndex) {
            let currentPartition = s.slice(partitionFirstIndex, partitionLastIndex + 1);
            partitionFirstIndex = partitionLastIndex + 1;
            globalPartitionLengths.push(currentPartition.length);
        }

    }
    
    return globalPartitionLengths;
};