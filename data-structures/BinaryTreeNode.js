export default class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Gets the height (depth) of the node
  height() {
    return Math.max(
      this.left ? this.left.height() + 1: 0,
      this.right ? this.right.height() + 1: 0
    );
  }

  // Gets the number of nodes in the tree
  size() {
    return (
      1 +
      (this.left ? this.left.size() : 0) +
      (this.right ? this.right.size() : 0)
    );
  }

  // The node is a leaf when it doesn't have any children
  isLeaf() {
    return !this.left && !this.right;
  }
}
