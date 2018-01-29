// A BST Node can only have two children where the left subtree's values
// are less than the node's values and right subtree's values are greater
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // Inserts value to binary search tree
  insert(value) {
    // Create new instance of Node with given value
    const node = new Node(value);

    // Set new node as root if it doesnt have one
    if (!this.root) {
      this.root = node;
      return;
    }

    // Start from the root of the tree
    let currentNode = this.root;

    // Traverse through tree to find the correct parent for the child node to be insert to
    // don't insert new node if value is equal
    while (currentNode.value !== value) {
      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = node;
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = node;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }

  // Looks for a node with the given value in the BST
  search(value) {
    // Start from the root of the tree
    let currentNode = this.root;

    // As long as the node is not null, traverse through BST by comparing the values
    while (currentNode) {
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        break; // Value is found, exit while loop.
      }
    }

    return currentNode || 'Not Found';
  }

  // Print tree in order
  inOrder(node) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  // Print tree in pre-order
  preOrder(node) {
    if (node) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  // Print tree in post-order
  postOrder(node) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }
}

const bst = new BST();

bst.insert(5);
bst.insert(2);
bst.insert(4);
bst.insert(3);
bst.insert(1);
bst.insert(10);
bst.insert(7);
bst.insert(6);

console.log(bst.search(6));
