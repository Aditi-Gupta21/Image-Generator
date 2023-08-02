const key="g1TuyAB-wMw0ccgT_sMQuFe4l9Gchi10K9u_WqR7Dlc";
let input = document.getElementById("input-search");
let search = document.getElementById("Search");
let searchResultEl = document.getElementById("results");
let more = document.getElementById("More-img");
let page =1;
// if(page===1){
//     searchResultEl.innerHTML = "";
// }
search.addEventListener('click',(event)=>{
    event.preventDefault();
    let inputEl=input.value;
    page =1;
    searchImg(inputEl);
})
async function searchImg(input){
    console.log(input);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${input}&client_id=${key}`;
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Network error")
    }
    const data = await response.json();
    const results = data.results;
    results.map((result)=>{
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("res");
        const img = document.createElement("img");
        img.src = result.urls.small;

        imgWrapper.appendChild(img);
        searchResultEl.appendChild(imgWrapper);
    })
    console.log(results);
}



// more.addEventListener('click',()=>{
//     console.log("more");
// })
