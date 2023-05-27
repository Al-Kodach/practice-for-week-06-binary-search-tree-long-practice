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
  let minNode,
    nodes = [rootNode]; 

    while (nodes.length > 0) {
    // for time complexity we use pop();
      let node = nodes.pop();

      if (!minNode || node.val < minNode.val) {
        minNode = node;
      }

      if (node.left) nodes.push(node.left);
      if (node.right) nodes.push(node.right);
    }

    return minNode.val;
}

function findMaxBT (rootNode) {
  // Your code here
  let maxNode, // undefined
    nodes = [rootNode]; // length is 1

  while (nodes.length > 0) {
    // for time complexity we use pop();
    let node = nodes.pop(); // length is reduce by 1;

    // check if the maxNode is undefine or greater than current node value
        // if undefined we assign what ever value, else we assign wehen value is greater.   
    if (!maxNode || node.val > maxNode.val) {
      maxNode = node;
    }

    // if there are nodes at the right and left, we push into the array of nodes
    if (node.left) nodes.push(node.left);
    if (node.right) nodes.push(node.right);
  }

  // return node with maximum value.
  return maxNode.val;  
}

function getHeight (rootNode) {
  // Your code here
  let height = 0;

  if (!rootNode) return -1;
  if (!rootNode.left && !rootNode.right) return height;

  let level = [rootNode];
  let len = level.length;

  while (len > 0) {

    for (let i = 0; i < len; i++) {
      let node = level[i];

      if (node.left) level.push(node.left);
      if (node.right) level.push(node.right);
    }

    level = level.slice(len);
    len = level.length;
    if (len > 0) height++;
  }

  return height;
}

const getHeightDiff = function (node) {
  let left = getHeight(node.left);
  let right = getHeight(node.right);

  let leftHeight = left === -1 ? 0 : left + 1;
  let rightHeight = right === -1 ? 0 : right + 1;

  let diff = Math.abs(leftHeight - rightHeight);

  return diff;
}
function balancedTree (rootNode) {
  // Your code here

  if (!rootNode) return true;
  if (!rootNode.left && !rootNode.right) return true;

  let nodes = [rootNode];

  while (nodes.length > 0) {
    let node = nodes.shift();

    if (node.left) nodes.push(node.left);
    if (node.right) nodes.push(node.right);

    let diff = getHeightDiff(node);
    if (diff > 1) return false;
  }

  return true;
  
}

function countNodes (rootNode) {
  // Your code here
  if (!rootNode) return 0;

  let nodes = [rootNode],
    counter = 0;

    while (nodes.length > 0) {
      let node = nodes.pop();

      if (node.left) nodes.push(node.left);
      if (node.right) nodes.push(node.right);

      counter++;
    }

    return counter;
}

function getParentNode (rootNode, target) {
  // Your code here

  if (!rootNode) return null;

  let parent,
   nodes = [rootNode],
   len = nodes.length;

   while (nodes.length > 0) {
    
    for (let i = 0; i < len; i++) {
      const node = nodes[i];
      
      if (node.val === target) return null;

      if (node.left) {
        if (node.left.val === target) return node;
        nodes.push(node.left);
      }
      if (node.right) {
        if (node.right.val === target) return node;
          nodes.push(node.right);
      }
    }

    nodes = nodes.slice(len);
   }
}

function inOrderPredecessor (rootNode, target, previous) {
  // Your code here

    // Your code here

    if (!rootNode) {
      return null;
    } else if (target < rootNode.val) {
      // Keep previous same as before one above predecessor or none if all are left
      return inOrderPredecessor(rootNode.left, target, previous);
    } else if (target > rootNode.val) {
      return inOrderPredecessor(rootNode.right, target, rootNode);
    } else if (target === rootNode.val && rootNode.left) {
      return findMaxBST(rootNode.left);
    }
  
    return previous ? previous.val : null;
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  let node, parent;
  let found = findNode(rootNode, target, null);

  if (found) {
    node = found[0];
    parent = found[1];
  }

  // Undefined if the target cannot be found

  if (node){
    // Set target based on parent

    if (!node.left && !node.right && !parent) {
      // Case 0: Zero children and no parent:
      // return null
      return null;
    } else if (!node.left && !node.right && parent) {
      // Case 1: Zero children:
      //   Set the parent that points to it to null

      parent.val > node.val ? parent.left = null : parent.right = null;
    } else if (node.left && node.right) {
      // Case 2: Two children:
      //  Set the value to its in-order predecessor, then delete the predecessor
      //  Replace target node with the left most child on its right side,
      //  or the right most child on its left side.
      //  Then delete the child that it was replaced with.

      let val = inOrderPredecessor(rootNode, target);
      deleteNodeBST(rootNode, val);
      node.val = val;
    } else if (node.left && !node.right) {
      // Case 3: One child:
      // Make the parent point to the child

      parent.val > node.val ? parent.left = node.left : parent.right = node.left;
    } else if (!node.left && node.right) {
      // Still Case 3

      parent.val > node.val ? parent.left = node.right : parent.right = node.right;
    }
  }

}

const findNode = function (rootNode, val, prev) {

  if (!rootNode) {
    return null;
  } else if (rootNode.val === val) {
    return [rootNode, prev];
  } else if (rootNode.val > val) {
    return findNode(rootNode.left, val, rootNode);
  } else {
    return findNode(rootNode.right, val, rootNode);
  }
}


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