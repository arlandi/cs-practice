import Node from './Node';

export function traverseNodes(list, index) {
  let node = list.head;

  if (index > -1 && index < list.length) {
    for (let i = 0;i < index;i++) {
      node = node.next;
    }
  }

  return node;
}

export default class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Adds an element to the end of the list
  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      // Start from head node
      let currentNode = this.head;

      // Traverse to the end of the list
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      // Set new node as last node
      currentNode.next = newNode;
    }

    this.length++;

    return;
  }

  // Retrieves the element at that index of the list
  get(index) {
    const node = traverseNodes(this, index);
    return node ? node.val : undefined;
  }

  // Inserts an element at the given index of the list
  insert(value, index) {
    const newNode = new Node(value);
    let nodeAtIndex;

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    } else if (index === this.length) {
      nodeAtIndex = traverseNodes(this, this.length - 1);
      nodeAtIndex.next = newNode;
      this.length++;
    } else if (index > 0 && index < this.length) {
      nodeAtIndex = traverseNodes(this, index - 1);
      newNode.next = nodeAtIndex.next;
      nodeAtIndex.next = newNode;
      this.length++;
    }
  }

  // Removes a node from a given index
  remove(index) {
    if (!this.length) return false;

    if (index === 0) {
      this.head = this.head.next;
      this.length--;
    } else {
      const node = traverseNodes(this, index - 1);
      if (node && node.next) {
        node.next = node.next.next;
        this.length--;
      }
    }
  }

  toArray() {
    let arr = [];

    let node = this.head;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }

    return arr;
  }
}
