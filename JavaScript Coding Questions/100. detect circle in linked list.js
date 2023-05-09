/** Solution 1: slow and fast pointer */

/**
 * @param {Node} head
 * @return {boolean}
 */
function hasCircle(head) {
  // your code here
  let slow = head;
  let fast = head;

  while (slow && fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}

/** Solution 2: use Set*/
/**
 * @param {Node} head
 * @return {boolean}
 */
function hasCircle(head) {
  // your code here
  const set = new Set();
  let p = head;

  while (p && p.next) {
    if (set.has(p)) {
      return true;
    }
    set.add(p);

    p = p.next;
  }

  return false;
}
