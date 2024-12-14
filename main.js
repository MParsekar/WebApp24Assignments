console.log("Hello World");

function fizzBuzz(n){
    for (let index = 1; index <= n; index++) {
        console.log(index)
        
    }
}


function timeSort() {
    const array1 = [1,5,6,7,3, 2 ,3 ,5 , 7, 8,9];
    for (let index = 0; index < array1.length; index++) {
        const element = array1[index];
        window.setTimeout(()=>console.log(element), element);
    }
    
}
// fizzBuzz(100);
timeSort();