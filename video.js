let playVideo = document.querySelector(".play-video");
let recVideo = document.querySelector(".recommend-video");
const apiKey = "AIzaSyDl-HxxIfXNotgl92_e3EQ9PNScQ7qTNgk";
const baseUrl = "https://www.googleapis.com/youtube/v3";
let likescount = document.querySelector("#likescount")
console.log(likescount);
let dislikes = document.querySelector("#dislikes")
let views = document.querySelector("#views")
let  videoEle = document.querySelector(".play-video #video")
let  videoSrc = document.querySelector(".play-video video source");

// window.addEventListener("load",()=>{
//     let vdId = "bh5GqSMD9jY";
//     if(YT){
//                 new YT.Player("video",{
//                     width: "400",
//                     height: "300",
//                     videoId: vdId,
//                 });
//             }
// });
let vd = sessionStorage.getItem("vid")
console.log(vd)
async function getVideo(vdId){
    const response = await fetch(   
        `${baseUrl}/videos?key=${apiKey}&part=statistics&id=${vdId}`
    )
    const data = await response.json();
    console.log(data);
    fillData(vdId,data);
}
 window.addEventListener("load",getVideo(vd))

 function fillData(vdId,data){
    // let video = document.createElement("video");
    // Object.assign(video,{
    //     width: 400,
    //     height: 300,
        
    // })
    // video.innerHTML =  `<source src="" type="video/mp4"/>`;
    // videoEle.appendChild(video);

    // videoSrc.setAttribute("src",`https://www.youtube.com/watch?v=${videoId}`)
    
    if(YT){
        new YT.Player("testify",{
            width: "400",
            height: "300",
            videoId: vdId,
            
        })
    }       

    let likeCount = data.items[0].statistics.likeCount;
    let viewCount = data.items[0].statistics.viewCount
    likescount.innerText =  `${likeCount}`;
    views.innerText = `${viewCount} views`

}