/**
 * @param {HTMLElement | null} root
 * @return {HTMLElement[]}
 */
function flatten(root) {
  // your code here
  let result = [];
  if (!root) return result;
  let queue = [root];

  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    queue.push(...node.children);
  }

  return result;
}
