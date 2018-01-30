import Node from './Node';

export default class Stack {
  constructor() {
    this._tail = null;
    this.length = 0;
  }

  push(value) {
    if (!value) return false;

    const node = new Node(value);

    // Set the next pointer to previous tail node
    node.next = this._tail;

    // Set the tail as the new node
    this._tail = node;

    // Increase length
    this.length++;
    return this.length;
  }

  pop() {
    // Get the tail node
    const node = this._tail;

    // If the tail node is not null
    if (node) {
      // Set the tail to the next node
      this._tail = node.next;

      // Decrease length
      this.length--;
    }

    return node ? node.val : undefined;
  }

  isEmpty() {
    return this.length === 0;
  }

  peek() {
    return this._tail ? this._tail.val : undefined;
  }
}
