
function printPattern(n){
    let flag = 1;
    for(let i=0; i<n; i++){
        let row='';
        for(let j=0; j<i+1; j++){
            row = row+ flag;
            flag===1? flag=0 : flag=1;
        }
        console.log(row)
    }
}

printPattern(5)