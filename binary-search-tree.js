// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
  
    constructor() {
      // Your code here
      this.root = null;
    }
  
    insert(val, currentNode = this.root) {
      // Your code here
      let newNode = new TreeNode(val);
  
      // if root is empty, add at root and return.
      if (!currentNode) {
        this.root = newNode;
        return;
      }
  
     // starting from the root
     // if val is less than the root value,
     // we take the left edge
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
        } else {
          this.insert(val, currentNode.left);
        }
      } else {
        // if val is greater than the root value,
        // we take the right edge
        if (!currentNode.right) {
          currentNode.right = newNode;
        } else {
          this.insert(val, currentNode.right);
        }
      }
    }
  
    search(val, currentNode = this.root) {
      // Your code here
      // check if val is equal to root
  
      if (!currentNode) return false;
      if (currentNode.val === val) return true;
  
      if (val < currentNode.val) {
        return this.search(val, currentNode.left);
      } else {
        return this.search(val, currentNode.right);
      }
    }
  
  
    preOrderTraversal(currentNode = this.root) {
      // Your code here
      if (!currentNode) return;
      console.log(currentNode.val);
      // recurse the left edge to print low vals
      this.preOrderTraversal(currentNode.left);
      // recurse the right edge to print high vals
      this.preOrderTraversal(currentNode.right);
    }
  
  
    inOrderTraversal(currentNode = this.root) {
      // Your code here
      if (currentNode.left) this.inOrderTraversal(currentNode.left);
  
      console.log(currentNode.val);
  
      if (currentNode.right) this.inOrderTraversal(currentNode.right);
     
    }
  
  
    postOrderTraversal(currentNode = this.root) {
      // Your code here;
      if (currentNode.left) this.postOrderTraversal(currentNode.left);
      if (currentNode.right) this.postOrderTraversal(currentNode.right);
  
      console.log(currentNode.val);
    }
  
    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      // your code here
      let breadths = [this.root];
  
      while (breadths.length > 0) {
        let node = breadths.shift();
        console.log(node.val);
  
        if (node.left) breadths.push(node.left);
        if (node.right) breadths.push(node.right);
      }
    }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      // your code here
      let depths = [this.root];
  
      while (depths.length > 0) {
        let node = depths.pop();
        console.log(node.val);
  
        if (node.left) depths.push(node.left);
        if (node.right) depths.push(node.right);
      }
    }
  }
  
  
  
  module.exports = { BinarySearchTree, TreeNode };