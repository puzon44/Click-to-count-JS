// document.getElementById("count-el").innerText=15

// let a = 5
// let b = 7
// let count = a+b;

// console.log(count)

// let myAge = 21;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge)

// let count = 0;

// count = count + 1;

let count1 = document.getElementById("count-el")
let sa = document.getElementById("save-el")
let count = 0;

function increament(){
    console.log("Clicked!!")
    count += 1;
    count1.textContent = count;
    console.log(count)
}

function save(){
    let countStr = " " + count + " - "
    sa.textContent += countStr
    count1.textContent = 0;
    count = 0
    // console.log(count);
}

save()




