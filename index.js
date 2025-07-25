let count = 0

function increment(){
    count = count +1
    document.getElementById("count").innerHTML = count
}
function save(){
    console.log(count)
}