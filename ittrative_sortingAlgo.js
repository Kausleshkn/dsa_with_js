// shorting array using single loop

// let arr = [5, 2, 6, 9, 7, 8, 3, 1, 4, 10];

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] > arr[i+1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;

//         i = -1
//     }
// }
// console.log(arr);

// sort the same array using two loops

// let arr = [5, 2, 6, 9, 7, 8, 3, 1, 4, 10];

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {

//         if (arr[i] > arr[j]) {

//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }

//     }
// }

// console.log(arr);

// sort the same array using bubble sort

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length-i-1; j++) {

//         if(arr[j]>arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr);

// sort the same array using selection sort algoritham

// let arr = [5, 2, 6, 9, 7, 8, 3, 1, 4, 10];

// for (let i = 0; i < arr.length - 1; i++) {
//    let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {

//         if (arr[j] < arr[minIndex]) {
//             minIndex = j;
//         }
//     }
//     let temp = arr[minIndex];
//     arr[minIndex] = arr[i]
//     arr[i] = temp;
// }
// console.log(arr);

// sort the same array using insertion sort algorithm

// let arr = [5, 2, 6, 9, 7, 8, 3, 1, 4, 10];

// for (let i = 1; i < arr.length; i++) {
//     let temp = arr[i]
//     let j = i - 1;

//     while (arr[j] > temp && j >= 0) {

//         arr[j + 1] = arr[j]
//         j--
//     }
//     arr[j + 1] = temp
// }
// console.log(arr);

// apply merge sort using itretive approch;

// let data = [5, 2, 6, 9, 7, 8, 3, 1, 4, 10];

// function mergeSort(arr) {

//   let buffer = [];

//   for (let i = 1; i < arr.length; i *= 2) {
//     for (let j = 0; j < arr.length; j += 2 * i) {
//       let left = j;
//       let right = Math.min(left + i, arr.length);
//       let leftLimit = right;
//       let rightLimit = Math.min(right + i, arr.length);
//       let k = left;

//       while (left < leftLimit && right < rightLimit) {
//         if (arr[left] <= arr[right]) {
//           buffer[k++] = arr[left++];
//         } else {
//           buffer[k++] = arr[right++];
//         }
//       }

//       while (left < leftLimit) {
//         buffer[k++] = arr[left++];
//       }

//       while (right < rightLimit) {
//         buffer[k++] = arr[right++];
//       }
//     }

//     let temp = arr;
//     arr = buffer;
//     buffer = temp;

//   }
//   return arr;
// }

// console.log(mergeSort(data));

// apply quick sort itretive

function partitionFun(data, first, last) {

  let pivot = data[first];
  let i = first;

  while (i < last) {

    while (data[i] >= pivot) {
      i++;
    }

    while (data[last] < pivot) {
      last--;
    }

    if (i < last) {

      let temp = data[i];
      data[i] = data[last];
      data[last] = temp;
    }
  }
  let temp = data[first];
  data[first] = data[last];
  data[last] = temp;

  return last;
}


function quickSort(arr, start, end) {

  let stack = [];
  let num = -1;

  stack[++num] = start;
  stack[++num] = end;

  while (num >= 0) {

    end = stack[num--];
    start = stack[num--];

    let p = partitionFun(arr, start, end);

    if (p - 1 > start) {
      stack[++num] = start;
      stack[++num] = p - 1;
    }

    if (p + 1 < end) {
      stack[++num] = p + 1;
      stack[++num] = end;
    }
  }
}

// let data = [5, 2, 6, 9, 7, 8, 3, 1, 4, 10];

// quickSort(data, 0, data.length - 1);

// console.log(data);

//  counting sort - first implimentation

function countSort(data) {
  let obj = {};

  for (let i = 0; i < data.length; i++) {

    if (obj[data[i]] !== undefined) {
      obj[data[i]]++
    } else {
      obj[data[i]] = 1;
    }
  }

  let arr = [];

  for (let val in obj) {

    while (obj[val]--) {
      arr.push(+(val))
    }
  }

  return arr;
}
// let data = [5, 2, 6, 9, 7, 8, 3, 1, 4, 10, 1, 8, 6, 3, 4, 8];

// console.log(countSort(data));



// counting sort second implimetation


function countingSort(arr) {

  let min = Math.min(...arr);
  let max = Math.max(...arr)
  let count = [];

  for (let i = min; i <= max; i++) {
    count[i] = 0;
  }



  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  let j = 0;

  for (let i = min; i <= max; i++) {
    while (count[i] > 0) {
      arr[j] = i;
      j++;
      count[i]--;
    }
  }
  return arr;
}

// let data = [5, 2, 6, 9, 7, 8, 3, 1, 4, 10, 1, 8, 6, 3, 4, 8];

// console.log(countingSort(data));

// Bucket sort 


function bucketSort(array, bucketSize = array.length) {

  if (array.length === 0) {
    return array;
  }

  // Initialize buckets
  let buckets = new Array(bucketSize);

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // Distribute input array values into buckets
  for (let i = 0; i < array.length; i++) {
    buckets[Math.floor(array[i] / bucketSize)].push(array[i]); // use "*" instead of 
    // "/"  when sort the float values
  }

  // Sort buckets and place back into input array
  array.length = 0;
  for (let i = 0; i < buckets.length; i++) {
    buckets[i].sort();
    for (let j = 0; j < buckets[i].length; j++) {
      array.push(buckets[i][j]);
    }
  }
  return array;
}

let data = [5, 2, 6, 9, 7, 8, 3, 1, 10, 4, 1, 8, 6, 3, 4, 8];

console.log(bucketSort(data));







