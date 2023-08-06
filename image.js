const key="g1TuyAB-wMw0ccgT_sMQuFe4l9Gchi10K9u_WqR7Dlc";
let input = document.getElementById("input-search");
let search = document.getElementById("Search");
let searchResultEl = document.getElementById("results");
let more = document.getElementById("More-img");
let page =0;

search.addEventListener('click',(event)=>{
    searchResultEl.innerHTML=""
    event.preventDefault();
    let inputEl=input.value;
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
    page++;


    console.log(results);
    if(page >0){
        more.style.display ="block";
    }
}

more.addEventListener('click',()=>{
    searchImg(input.value)
})
