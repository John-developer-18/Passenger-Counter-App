
let counter = document.getElementById("counter")
let saver = document.getElementById("save-str")
let count = 0;

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
    let save=count + " - ";

    saver.textContent+=save;

    count=0;
    counter.textContent=count;

}

