// const slectionSort = (arr=[])=>{
//     console.time('TIME')
//     for(let i=1;i<arr.length;i++){
//         let current = arr[i];//8
//         let j = i - 1; //[0]
//         while (j >= 0 && arr[j] > current) { // 0 ,9>8
//             console.log(`
//             outer iteration :- ${i}-${arr[i]}
//             inner iteration :- ${j}-${arr[j]}
//             ARRAY :- ${arr}`);
//             arr[j + 1] = arr[j];
//             j--;
//         }

//         arr[j + 1] = current;
//     }
//     console.timeEnd('TIME')
//     return arr
// }
// const sorted = slectionSort([7,8,9,6,5,4,3,2,1])
// console.log({sorted});
// /*
    
// */
const insertionSort = (arr) => {
    let temp;
    for(let i=1;i<arr.length;i++){
        for(let j=i;j>=0;j--){
            if (arr[j]<arr[j-1]){
                [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
            }
        }
    }
    return arr
}
const sorted = insertionSort([7,8,9,6,5,4,3,2,1])
console.log({sorted});
// /*
