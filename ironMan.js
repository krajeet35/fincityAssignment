function findTheRange(planets,receptions){
    let arr=[];
    for(let i=0;i<planets;i++){
        arr[i]=0;
    }
    for(let j=0;j<receptions.length;j++){
            arr[receptions[j][0]]+=receptions[j][2];
            arr[receptions[j][1]-1]+=receptions[j][2];
    }
    let max=Math.max(...arr);
    let minRange= arr.indexOf(max), maxRange=minRange+1;
    let nArr=[];
    nArr[0]=minRange, nArr[1]=maxRange, nArr[2]=max;
    return nArr;
}

let result=findTheRange(5, [[2, 4, 5], [1, 3, 6], [2, 4, 7]]);
console.log(result);