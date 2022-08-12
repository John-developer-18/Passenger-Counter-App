
let counter = document.getElementById("counter");
let saver = document.getElementById("save-str");
let sumr = document.getElementById("sum-str");
let count = 0;
let saveArr=[];

function increment(){
    count++;
    counter.innerText=count;
}

function decrement(){
    count--;
    counter.innerText=count;

    if(count<0){
        count=0;
        counter.innerText=count;
    }
}

function save(){
    saveArr.push(count);
    
    
    let sum=0;

    for (i=0; i<saveArr.length; i++){
        sum+=saveArr[i];
    }
      sumr.textContent=sum;
        console.log(saveArr);
      
      
    let save=count + " - ";
 
    saver.textContent+=save;

    count=0;
    counter.textContent=count;

}

