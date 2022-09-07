/*
Algorithm

Floyd's algorithm consists of two phases and uses two pointers, usually called tortoise and hare.

In phase 1, hare = nums[nums[hare]] is twice as fast as tortoise = nums[tortoise]. Since the hare goes fast, it would be the first to enter the cycle and run around the cycle. At some point, the tortoise enters the cycle as well, and since it's moving slower the hare catches up to the tortoise at some intersection point. Now phase 1 is over, and the tortoise has lost.

Note that the intersection point is not the cycle entrance in the general case.

pic

To compute the intersection point, let's note that the hare has traversed twice as many nodes as the tortoise, i.e. 2d(\text{tortoise}) = d(\text{hare})2d(tortoise)=d(hare), implying:

2(F + a) = F + nC + a2(F+a)=F+nC+a, where nn is some integer.

Hence the coordinate of the intersection point is F + a = nCF+a=nC.

In phase 2, we give the tortoise a second chance by slowing down the hare, so that it now moves at the speed of tortoise: tortoise = nums[tortoise], hare = nums[hare]. The tortoise is back at the starting position, and the hare starts from the intersection point.

pic

Let's show that this time they meet at the cycle entrance after FF steps.

The tortoise started at zero, so its position after FF steps is FF.

The hare started at the intersection point F + a = nCF+a=nC, so its position after F steps is nC + FnC+F, that is the same point as FF.

So the tortoise and the (slowed down) hare will meet at the entrance of the cycle.
*/

function findDuplicate(nums: number[]): number {
    
    // find the intersection point of the two runners
    let tortoise = nums[0]; 
    let hare = nums[0];
    
    while (true) {
        tortoise = nums[tortoise]; 
        hare = nums[nums[hare]];
        if (tortoise === hare) break; 
    }

    // find the "entrance to the cycle"
    tortoise = nums[0];
    while (tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }
    
    return hare
};