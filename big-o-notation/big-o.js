/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)  Constant
  const unique = [];                // 1 * 1 = O(1)  Constant
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(n)
    i++                             // 2 * n = O(n)
  ) {
    const word = words[i];          // 2 * n = O(n)
    if (!seen[word]) {              // 2 * n = O(n)
      seen[word] = true;
      unique[unique.length] = word; // 2 * n = O(n)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(n)
    i++                             // 2 * n = O(n)
  ) {
    const word = words[i];          // 2 * n = O(n)
    let isUnique = true;            // 1 * n = O(n)
    for (
      let c = 0;                    // 1 * n = O(n)
      c < i;                        // 1 *  = O()
      c++                           // 2 *  = O()
    ) {
      const comparing = words[c];   //  *  = O()
      if (comparing === word) {     // _ * _ = O(?)
        isUnique = false;           // _ * _ = O(?)
      }
    }
    if (isUnique) {                 // 1 * n = O(n)
      unique[unique.length] = word; // _ * _ = O(?)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(?)
