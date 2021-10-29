// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//Solution using slice method array

// function chunk(array, size) {

//     let result = []
//     for (let i = 0; i < array.length; i += size){
//         let chunk = array.slice(i, i + size)
//         result.push(chunk)
//     }
//     return result
// }

// module.exports = chunk;

//solution using array to loop through
function chunk(array, size) {
  const result = [];
  for (data of array) {
    let last = result[result.length - 1];

    if (!last || last.length === size) {
      result.push([data]);
    } else {
      last.push(data);
    }
    
    }
    return result;
}

module.exports = chunk;
