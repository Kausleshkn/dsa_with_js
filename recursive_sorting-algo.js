// use bubble sort with recursion

// let arr = [5, 2, 6, 9, 7, 8, 3, 1, 4, 10];

// const bubbleSort = (data, index) => {

//     if (index == data.length - 1) return;

//     for (let i = 0; i < data.length - 1; i++) {

//         if (data[i] > data[i + 1]) {

//             let temp = data[i];
//             data[i] = data[i + 1];
//             data[i + 1] = temp;
//         }
//     }
//     bubbleSort(data, index + 1)
// }

// bubbleSort(arr,0)

// console.log(arr);

// sort array using selection sort with recursion

// let arr = [5, 2, 6, 9, 7, 8, 3, 1, 4, 10];

// const selecSort = (data, index) => {

//     if (index == data.length - 1) return;

//     let minval = index;

//     for (let i = index + 1; i < data.length; i++) {

//         if (data[minval] > data[i]) minval = i;
//     }

//     let temp = data[index];
//     data[index] = data[minval];
//     data[minval] = temp;

//     selecSort(data, index + 1);
// }
// selecSort(arr, 0);

// console.log('recursiveSelection Sort', arr);

// sort the below array using insertion sort with rucursion

// let arr = [5, 2, 6, 9, 7, 8, 3, 1, 4, 10];

// const insSort = (data, index) => {

//     if (index == data.length) return;

//     let minIndex = data[index];
//     let j = index - 1;

//     while (j >= 0 && minIndex < data[j]) {

//         data[j + 1] = data[j];
//         j--
//     }
//     data[j + 1] = minIndex;

//     insSort(data, index + 1);
// }
// insSort(arr, 1)

// console.log('InsertionSort ',arr);

// sort the same array using merge sort algorithm

const marge = (left, right, array) => {

    let i = 0; let j = 0; let k = 0;

    while (i < left.length && j < right.length) {

        if (left[i] <= right[j]) {
            array[k] = left[i];
            i++
        } else {
            array[k] = right[j];
            j++
        }
        k++
    }

    while (i < left.length) {
        array[k] = left[i];
        i++
        k++
    }

    while (j < right.length) {
        array[k] = right[j];
        j++
        k++
    }
}

const mergeSort = (arr) => {

    if (arr.length <= 1) {
        return;
    }

    let mid = Math.floor(arr.length / 2);
    let arrleft = arr.slice(0, mid);
    let arrright = arr.slice(mid, arr.length);

    mergeSort(arrleft);
    mergeSort(arrright);
    marge(arrleft, arrright, arr)
}

// let arr = [8, 2, 5, 1, 6, 3, 9, 4, 7, 10];

// mergeSort(arr);

// console.log(arr);


// sort the same array using quick sort algorithm

const partitionFun = (ele, start, end) => {

    let pivot = ele[start];
    let i = start;
    let j = end;

    while (i < j) {
        while (ele[i] <= pivot) {
            i++
        }

        while (ele[j] > pivot) {
            j--
        }

        if (i < j) {

            let temp = ele[i];
            ele[i] = ele[j];
            ele[j] = temp;
        }
    }
    let temp = ele[j];
    ele[j] = ele[start];
    ele[start] = temp;

    // console.log(ele, start, end,pivot,i,j); 

    return j;
}

const quickSort = (arr, start, end) => {

    if (start < end) {
        let pi = partitionFun(arr, start, end);
        quickSort(arr, start, pi - 1)
        quickSort(arr, pi + 1, end)
    }
}

let quick_Sarr = [5, 2, 6, 9, 7, 8, 3, 1, 4, 10, 204, 2, 35];

// quickSort(quick_Sarr, 0, quick_Sarr.length - 1);

// console.log(quick_Sarr);













