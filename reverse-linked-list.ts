class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    
    let prev : ListNode | null = null; 
    let curr : ListNode | null = head; 
    
    
    while (curr !== null) {
        
        let next = curr.next;
        curr.next = prev; 
        prev = curr;
        curr = next; 

    }
    
    
    return prev; 
    
};

function reverseListRecursive(head: ListNode | null): ListNode | null {
    
    if (head === null || head.next === null) {
        return head;
    }
    
    let p = reverseListRecursive(head.next); 
    head.next.next = head; 
    head.next = null; 
    return p; 
    
};