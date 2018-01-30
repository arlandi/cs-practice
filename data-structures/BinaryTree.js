import BinaryTreeNode from './BinaryTreeNode';

export default class BinaryTree {
  // Instantiates root node if given a value, otherwise root is null
  constructor(value) {
    if (value) {
      this.root = new BinaryTreeNode(value);
    }
  }

  // Gets the root node
  getRoot() {
    return this.root;
  }

  // Gets the number of nodes in the tree
  size() {
    return this.root ? this.root.size() : 0;
  }

  // Gets the height of the tree
  height() {
    return this.root ? this.root.height() : 0;
  }

  // Traverse tree in order, returns an array
  inOrder() {
    const result = [];

    // The recursive function
    function _inOrder(node) {
      if (node) {
        _inOrder(node.left);
        result.push(node.value);
        _inOrder(node.right);
      }
    }

    if (this.root) _inOrder(this.root);

    return result;
  }

  // Traverse tree in pre-order, returns an array
  preOrder(node) {
    const result = [];

    // The recursive function
    function _preOrder(node) {
      if (node) {
        result.push(node.value);
        _preOrder(node.left);
        _preOrder(node.right);
      }
    }

    if (this.root) _preOrder(this.root);

    return result;
  }

  // Traverse tree in post-order, returns an array
  postOrder(node) {
    const result = [];

    // The recursive function
    function _preOrder(node) {
      if (node) {
        _preOrder(node.left);
        _preOrder(node.right);
        result.push(node.value);
      }
    }

    if (this.root) _preOrder(this.root);

    return result;
  }
}
