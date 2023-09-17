const bubbleSort = (arr=[])=>{
    console.time('TIME')
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                [arr[j],arr[i]]=[arr[i],arr[j]]
            }
        }
    }
    console.timeEnd('TIME')
    return arr
}
const sorted = bubbleSort([9,8,7,6,5,4,3,2,1])
console.log({sorted});
/*
    bubblesort swaps the elements on every iteration based on the condition if the 
    next element is small it will swap imediately unlikely to slection sort where 
    elements gets swapped after inner loop completion.
    TIME COMPLEXITY:-
    Good scenario = O(n) (where array is sorted [1,2,3,4,4]) (will put a check to see if array is not swaped in first iteration of inner loop we will consider already sorted)
    worst scenario = O(n^2) (where array is in dec order [5,4,3,2,1])
*/