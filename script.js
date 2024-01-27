const apiKey = "AIzaSyDl-HxxIfXNotgl92_e3EQ9PNScQ7qTNgk";
const baseUrl = "https://www.googleapis.com/youtube/v3";

let thumbnail = "";
let channel = "";
let headingLine = "";
let view = "";
let videoId = "";
async function fetchData(searchQuery, maxResults) {
  const jsonData = await fetch(
    `${baseUrl}/search?key=${apiKey}&q=${searchQuery}&maxResults=${maxResults}&part=snippet`
  );
  const data = await jsonData.json();
  console.log(data.items);
  
  displayAllVideos(data);
}

function displayAllVideos(data) {

  for (let index in data.items) {
    
    videoId = data.items[index].id.videoId;

    console.log(videoId)
    
    thumbnail = data.items[index].snippet.thumbnails.default.url;
    channel = data.items[index].snippet.channelTitle;
    headingLine = data.items[index].snippet.title;
    // let thumbnail = data.items[3].snippet.thumbnails.default.url;
    let card = document.createElement("div");
    card.classList.add("card");
    // let img = document.createElement("img");
    // img.setAttribute("src", thumbnail);
    // img.setAttribute("alt", "thumbnail");
    // img.setAttribute("height", "200px");
    // img.setAttribute("width", "300px");

    card.innerHTML = `
       <img src="${thumbnail}" width="300px" height="200px" alt="thumbnail">
       <p class="heading">${headingLine}</p>`;

     card.addEventListener("click",(videoId)=>{
      sessionStorage.setItem("vid",videoId)
      window.location.assign("videoPlayer.html")
     })
     
    // let heading = document.createElement("p");
    // heading.innerText =    `${headingLine}`;
    // heading.classList.add("heading");

    let channelName = document.createElement("p");
    channelName.innerText = `${channel}`;
    channelName.classList.add("channel-name", "fade-text");

    let views = document.createElement("span");
    views.innerText = "4.5k";
    views.classList.add("views", "fade-text");

    let time = document.createElement("span");
    time.innerText = " 2 hours ago";
    time.classList.add("time", "fade-text");

    // card.appendChild(img);
    card.appendChild(channelName);
    card.appendChild(views);
    card.appendChild(time);
    videoContainer.appendChild(card);
  }
}
