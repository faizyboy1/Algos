const quickSort = (arr) => {
    if(arr.length<=1) return arr
let pivot = Math.floor(arr.length/2)
let leftArray=[]
let rightArray=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]<arr[pivot]){
        leftArray.push(arr[i])
    }else if(arr[i]>arr[pivot]){
        rightArray.push(arr[i])
    }
}
console.log({ leftArray, rightArray, pivot });
    if(leftArray.length>0&&rightArray.length>0){
        return [...quickSort(leftArray),arr[pivot],...quickSort(rightArray)]
    }else if(leftArray.length>0){
        return [...quickSort(leftArray),arr[pivot]]
    }else{
        return[arr[pivot],...quickSort(rightArray)]
    }
}
const sorted = quickSort([7, 8, 9, 6, 5, 4, 3, 2, 1]);
console.log({ sorted });
/*
Median of Medians (Introselect): 
    This is a more complex algorithm that guarantees good performance even in the worst-case scenarios.
    It involves dividing the array into smaller groups, finding medians for each group, and then
    selecting the median of those medians as the pivot. While it guarantees better worst-case
    performance, it's more involved to implement and typically used in cases where worst-case behavior
    is critical.

Dutch National Flag Pivot (Lomuto Partition Scheme): 
    This pivot selection method is particularly useful when dealing with duplicate elements in the 
    array. It partitions the array into three segments: elements less than the pivot, elements equal 
    to the pivot, and elements greater than the pivot.

Custom Heuristic: 
    Depending on your specific data, you may design a custom heuristic to choose the pivot point. 
    For example, if you know that your data is mostly sorted in reverse order, choosing the first 
    element as the pivot might not be the best choice.

The best choice of pivot depends on your specific use case and the characteristics of the data you're 
sorting. Randomized algorithms like choosing a random element or using the "Median of Three" tend to 
offer good average-case performance and are often a reasonable default choice. However, you might want 
to analyze your data and, if necessary, conduct benchmarking to determine the optimal pivot selection 
strategy for your application.
*/