let playVideo = document.querySelector(".play-video");
let recVideo = document.querySelector(".recommend-video");

function videoPlayer(){
    
    let video = document.createElement("video");
    let div1 = document.createElement("div");
    let description = document.createElement("p");
    let views = document.createElement("p");
    let div2 = document.createElement("div");
    let likes = document.createElement("span");
    let disLikes = document.createElement("span");
    let share = document.createElement("span");
    let save = document.createElement("span");
    div2.append(likes,disLikes,share,save);
    div1.append(description,views,div2);

    let ownerDiv = document.querySelector("div");
    let ownerImg = document.querySelector("img");
    let ownerDetailDiv = document.querySelector("div");
    let ownerNameDiv = document.querySelector("div");
    let ownerName = document.querySelector("p");
    let subscriber = document.querySelector("p");
    let subscribeBtn = document.querySelector("button");
    let channelDesc = document.querySelector("p");
    
    playVideo.append(video,div1);


}