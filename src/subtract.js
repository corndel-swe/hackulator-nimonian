/**
 * Returns the positive difference
 * subtract(5, 2) => 3
 * subtract(3, 7) => 4
 */
function subtract(x, y) {
  if (x < y) {
    return y - x
  }

  if (y < x) {
    return x - y
  }

  return 0
}

export default subtract
