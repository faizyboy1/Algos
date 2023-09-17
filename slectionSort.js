const slectionSort = (arr=[])=>{
    console.time('TIME')
    for(let i=0;i<arr.length-1;i++){
        let minIndex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
    }
    console.timeEnd('TIME')
    return arr
}
const sorted = slectionSort([9,8,7,6,5,4,3,2,1])
console.log({sorted});
/*
    in slection sort we select an element and compare to the rest of the
    array to find the smallest and then swap.
    we are not swapping on each inner loop iteration
    TIME COMPLEXITY
    O(n^2) in all scenario
*/