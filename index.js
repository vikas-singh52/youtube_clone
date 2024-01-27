let menu = document.querySelector(".icon");
let leftMenu = document.querySelector(".left-menu");
let mainContainer = document.querySelector(".main-container");
let videoContainer = document.querySelector(".video-container")
let formSearch = document.querySelector(".search-form");

menu.addEventListener("click",showMenu);

window.addEventListener("load",display);
function display(e){
    fetchData("comedy vlogs food",20)
}
function showMenu(e){
    leftMenu.classList.toggle("hide");
    if(leftMenu.classList.contains("hide")){
        
        mainContainer.style.gridTemplateColumns = "5fr 0fr";
        videoContainer.style.gridTemplateColumns = "auto auto auto auto";
        
    }else{
        mainContainer.style.gridTemplateColumns = "1fr 5fr";
        videoContainer.style.gridTemplateColumns = "auto auto auto";
    }
    
}
formSearch.addEventListener("submit",onSubmitForm);
function onSubmitForm(e){
    e.preventDefault();
    let input = formSearch.search.value;
    if(input){
        videoContainer.innerHTML = "";
        fetchData(input,10);
    }
}