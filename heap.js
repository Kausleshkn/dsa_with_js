// create heap - heapify

function heapify(arr, N, i)
{
    var largest = i; 
    var l = 2 * i + 1; 
    var r = 2 * i + 2; 

    if (l < N && arr[l] > arr[largest])
        largest = l;

    if (r < N && arr[r] > arr[largest])
        largest = r;

    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        heapify(arr, N, largest);
    }
}

// Heap sort Recursive

function sort( arr)
{
    var N = arr.length;

    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
        heapify(arr, N, i);

    for (var i = N - 1; i > 0; i--) {
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapify(arr, i, 0);
    }
}

let data = [5, 2, 6, 9, 7, 8, 3, 1, 4, 10];

// sort(data);

// console.log(data);

// Heap Sort Itretive

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
 
function buildMaxHeap(arr, n) {
    for(let i=1;i<n;i++)
    {
        if (arr[i] > arr[Math.floor((i - 1) / 2)])
        {
            let j = i;
     
     
            while (arr[j] > arr[Math.floor((j - 1) / 2)])
            {
                swap(arr,j,Math.floor((j-1)/2));
                j = Math.floor((j - 1) / 2);
            }
        }
    }
}
  
 
function heapSort(arr, n) {
     
    buildMaxHeap(arr,n);
     
    for (let i = n - 1; i > 0; i--)
    {

        swap(arr,0,i);
     
        let j = 0, index;
         
        do
        {
            index = (2 * j + 1);
             
            if (arr[index] < arr[index + 1] && index < (i - 1))
            index++;
         
            if (arr[j] < arr[index] && index < i)
                swap(arr, j, index);
         
            j = index;
         
        } while (index < i);
    }
}
  
heapSort(data,data.length-1)

console.log('Heap Sort Itretive', data);


 
 
 











