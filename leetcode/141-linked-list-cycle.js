/*
Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const set = new Set();
    let currentNode = head;

    while (currentNode && !set.has(currentNode)) {
        set.add(currentNode);
        currentNode = currentNode.next;
    }

    // If currentNode is null, it has reached the end of the list. No cycle.
    return currentNode ? true : false;
};

// Using Floyd's two pointers algorithm
// Move the fast pointer twice as fast as the slow one.
// If there is a cycle, the two pointers will meet even after a number of cycles
var hasCycle = function(head) {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (fast === null || fast.next === null) return false;
        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
};
