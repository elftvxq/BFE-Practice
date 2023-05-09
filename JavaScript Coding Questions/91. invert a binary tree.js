// This is the type for the node
// type Node = null | {
//   value: number
//   left: Node
//   right: Node
// }

/**
 * @param {Node} node
 * @returns {Node}
 */
function invert(node) {
  // your code here
  if (!node) {
    return node;
  }

  [node.left, node.right] = [node.right, node.left];

  if (node.left) {
    invert(node.left);
  }

  if (node.right) {
    invert(node.right);
  }

  return node;
}
