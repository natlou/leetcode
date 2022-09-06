function singleNumberHashSet(nums: number[]): number {
    
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

function singleNumberHashMap(nums: number[]): number {
    
    let hashmap = new Map(); 
    
    for (let num of nums) {
        if (!hashmap.has(num)) {
            hashmap.set(num, 1); 
        } else {
            hashmap.set(num, 2);
        }
    }
    
    for (let [key, value] of hashmap) {
        if (value === 1) {
            return key;
        } 
    }
    
    return -1;
};