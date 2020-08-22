const add = (a,b,cb)=>{
    setTimeout(()=>{
    let sum = a+b;
    cb(sum);
    },2000);
    }
    
    add(1,4,(sum)=>{
    console.log('The sum is : '+ sum);
    })