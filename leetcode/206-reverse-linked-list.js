/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Time O(n)
// Space O(1)
var reverseList = function(head) {
    let currentNode = head;
    let nextNode = null;
    let prevNode = null;

    while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }

    return prevNode;
};

// Recursive Solution
// O(n) time and space complexity because it uses the call stack implicitly
var reverseList = function(head) {
    // This checks for a linked list with 0 or 1 node
    // The second condition is also the exit condition for the recursive loop
    if (!head || !head.next) {
        return head;
    }

    // Gets the new head (last node of the list) from the exit condition
    const newHead = reverseList(head.next);

    // Point the next node to the current node
    // Set the current node next pointer to null
    const currentNode = head;
    const nextNode = currentNode.next;
    nextNode.next = currentNode;
    currentNode.next = null;

    return newHead;
};
