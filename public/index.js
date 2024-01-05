let menu = document.querySelector(".icon");
let leftMenu = document.querySelector(".left-menu");
let mainContainer = document.querySelector(".main-container");
let videoContainer = document.querySelector(".video-container")
menu.addEventListener("click",showMenu);

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