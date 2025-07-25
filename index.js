let count = 0

function increment(){
    count = count +1
    document.getElementById("count").innerHTML = count
}
function save(){
    console.log(count)
}
let namee ="boudy"
let greeting = "Hi, my name is "
let mygreeting = greeting + namee
console.log(mygreeting)