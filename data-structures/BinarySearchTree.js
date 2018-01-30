import BinaryTreeNode from './BinaryTreeNode';
import BinaryTree from './BinaryTree';

// A BST Node can only have two children where the left subtree's values
// are less than the node's values and right subtree's values are greater
export default class BinarySearchTree extends BinaryTree {

  // Inserts value to binary search tree
  insert(value) {
    // Create new instance of Node with given value
    const node = new BinaryTreeNode(value);

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

    return !!currentNode;
  }

  getMinimum() {
    let currentNode = this.root;

    if (!currentNode) return null;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  getMaximum() {
    let currentNode = this.root;

    if (!currentNode) return null;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }
}
