function findCommonElements(array1, array2) {

 //return array1.filter(element => array2.includes(element));
  let commonElement = [];
  for (let i = 0; i < array1.length; i++) {
    let newArray = array1[i];
    if (array2.includes(newArray)) {
      commonElement.push(newArray);
    }
  }
  return commonElement;
}
console.log(findCommonElements([1, 2, 3], [3, 4, 5]));
console.log(findCommonElements(["a", "b", "c"], ["b", "c", "d"]));
console.log(findCommonElements([10, 20, 30], [40, 50, 60]));
