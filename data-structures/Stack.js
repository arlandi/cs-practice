import Node from './Node';

export default class Stack {
  constructor() {
    this._tail = null;
    this.length = 0;
  }

  push(value) {
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
    if (this.isEmpty()) return undefined;

    // Get the tail node
    const node = this._tail;

    // Set the tail to the next node
    this._tail = node.next;

    // Decrease length
    this.length--;

    return node.val;
  }

  isEmpty() {
    return this.length === 0;
  }

  peek() {
    return this.isEmpty() ? undefined : this._tail.val;
  }
}
