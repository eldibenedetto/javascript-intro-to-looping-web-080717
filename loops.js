function forLoop(arr) {
  for (var i = 1; i < 26; i++) {
    if (i === 1) {
      arr.push(`I am ${i} strange loop.`)
    } else {
      arr.push(`I am ${i} strange loops.`)
    }
  }
  return arr
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
}
do {
  array.pop();
  } while (array.length > 0 || !maybeTrue());
  return array
}
