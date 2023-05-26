function findpies(arr,dSweet){
    for(let i=0;i<arr.length;i++){
        let sum=arr[i];
        let nArr=[i];
       if(sum<=dSweet){
            for(let j=i+1;j<arr.length;j++){
            if(sum==dSweet){
                return nArr;
            }
            else if(sum<dSweet){
                sum+=arr[j];
                nArr.push(j);
            }
            else{
                sum=arr[i];
                j=j-1;
                nArr=[i];
            }
         }
         if(sum==dSweet){
                return nArr;
            }
       }
    }
    return "Desired sweetness not found";
}

let arr=[8, 40, 3, 20, 1];
console.log(findpies(arr,10));
let arr2=[8, 40, 3, 2, 1];
console.log(findpies(arr2,9));
let arr3=[8, 4, 3, 2, 6, 5];
console.log(findpies(arr3,6));