function findPlanet(system,range){
    let arr=[];
    for(let i=0;i<system.length;i++){
        let sum=0;
        for(let j=0;j<system[i].length;j++){
            let energy= system[i][j][0]*(1/system[i][j][1]);
            sum+=energy;
        }
        arr.push(sum);
    }
    for(let k=0;k<arr.length;k++){
        if(arr[k]>=range[0] && arr[k]<=range[1]){
            return k;
        }
    }
}

let result=findPlanet([[[0.433, 200]], [[0.89, 400], [0.6, 300]]], [0.003, 0.005]);
console.log(result);