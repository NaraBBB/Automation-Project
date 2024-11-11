// 6 Deep Object Comparison**

// Write a function `deepEqual(obj1, obj2)` that takes two objects and returns `true`
//if they are deeply equal (including nested objects) and `false` otherwise.

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  } else if (typeof obj1 !== "object" || obj1 === null ||
            typeof obj2 !== "object" || obj2 === null){
  return false;
 }

  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  if (key1.length !== key2.length) return false;

  for (let key of key1) {
    if (!key2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log(deepEqual(obj1, obj2)); // true
