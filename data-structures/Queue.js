import Node from './Node';

export default class Queue {
  constructor() {
    // Create a dummy node for the head of the queue
    this._dummyHead = new Node(null);
    this._tail = this._dummyHead;
    this.length = 0;
  }

  // Adds an element to the back of the queue
  enqueue(value) {
    if (!value) return false;

    const node = new Node(value);

    // Set the next pointer of the tail node to the new node
    this._tail.next = node;

    // Set the new node as the new tail
    this._tail = node;

    // Increment length
    this.length++;
    return this.length;
  }

  // Remove an element at the front of the queue
  dequeue() {
    if (this.isEmpty()) return undefined;

    // Remove the first node from the queue
    const node = this._dummyHead.next;

    // Set the head of the queue as the next node
    this._dummyHead.next = node.next;

    // Decrease length
    this.length--;
    return node.val;
  }

  // Returns the element at the front of the queue
  front() {
    return this.isEmpty() ? undefined : this._dummyHead.next.val;
  }

  // Returns the element at the back of the queue
  back() {
    return this.isEmpty() ? undefined : this._tail.val;
  }

  isEmpty() {
    return this.length === 0;
  }
}
