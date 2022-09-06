function singleNumber(nums: number[]): number {
    
    let hashset = new Set(); 
    let unique = nums.filter( (item, index, arr) => arr.indexOf(item) === index); 

    for (let num of nums) {
        if (hashset.has(num)) {
            const index = unique.indexOf(num);
            unique.splice(index, 1);
        } else {
            hashset.add(num);
        }
    }

    return unique[0];
    
};