let input = document.getElementById("input-search");
let search = document.getElementById("Search");
let more = document.getElementById("More-img")
search.addEventListener('click',(event)=>{
    event.preventDefault();
    let inputEl=input.value;
    console.log(inputEl)
})
more.addEventListener('click',()=>{
    console.log("more");
})
