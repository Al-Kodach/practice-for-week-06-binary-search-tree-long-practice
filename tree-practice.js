const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  
  // if the tree is empty, return null;
  if (!rootNode) return null;

  let min = rootNode.val,
    rigthChild = rootNode.right,
    leftChild = rootNode.left;

  // loop through the left edge to the leaf node.
  while(rigthChild || leftChild) {
    // check on left child value
    if (leftChild) {
      if (min > leftChild.val) {
        min = leftChild.val;
      }
    }
    // check on rigth child value
    if (rigthChild) {
      if (min > rigthChild.val) {
        min = rigthChild.val;
      }
    }
    // continue to the left and right children
    leftChild = leftChild?.left ?? null;
    rigthChild = rigthChild?.right ?? null;
  }

  // after the loop, return minimum.
  return min;
}

function findMaxBST (rootNode) {
  // Your code here
  // if the tree is empty, return null;
  if (!rootNode) return null;

  let max = rootNode.val,
    rigthChild = rootNode.right,
    leftChild = rootNode.left;


  // loop through the left edge to the leaf node.
  while(rigthChild || leftChild) {
    // check on left child value
    if (leftChild) {
      if (max < leftChild.val) {
        max = leftChild.val;
      }
    }
    // check on rigth child value
    if (rigthChild) {
      if (max < rigthChild.val) {
        max = rigthChild.val;
      }
    }
    // continue with the left and right children
    leftChild = leftChild?.left ?? null;
    rigthChild = rigthChild?.right ?? null;
  }

  // after the loop, return maximum.
  return max;
} 

function findMinBT (rootNode) {
  // Your code here
}

function findMaxBT (rootNode) {
  // Your code here
}

function getHeight (rootNode) {
  // Your code here
}

function balancedTree (rootNode) {
  // Your code here
}

function countNodes (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

let bstRoot, bstRootBig

bstRoot = new TreeNode(4);
bstRoot.left = new TreeNode(2);
bstRoot.left.left = new TreeNode(1);
bstRoot.left.right = new TreeNode(3);
bstRoot.right = new TreeNode(6);
bstRoot.right.left = new TreeNode(5);
bstRoot.right.right = new TreeNode(7);

bstRootBig = new TreeNode(8);
bstRootBig.left = new TreeNode(3);
bstRootBig.left.left = new TreeNode(2);
bstRootBig.left.left.left = new TreeNode(1);
bstRootBig.left.right = new TreeNode(5);
bstRootBig.left.right.left = new TreeNode(4);
bstRootBig.left.right.right = new TreeNode(7);
bstRootBig.left.right.right.left = new TreeNode(6);
bstRootBig.right = new TreeNode(10);
bstRootBig.right.right = new TreeNode(11);
bstRootBig.right.right.right = new TreeNode(12);
bstRootBig.right.right.right.right = new TreeNode(15);
bstRootBig.right.right.right.right.left = new TreeNode(14);

console.log(findMaxBST(bstRoot));
console.log(findMaxBST(bstRootBig));

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}