let videoData = JSON.parse(localStorage.getItem('video'));
let container = document.getElementById("container");
videoData.map((el) => {

      let iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${el.videoId}`;
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.allow = "fullscreen";

      let title = document.createElement("p");
      title.innerText = el.title;

      let channel = document.createElement("p");
      channel.innerText = el.channelTitle;

      container.append(iframe, title, channel);
})

let videoSuggest = JSON.parse(localStorage.getItem("items"));
let video = document.getElementById("suggest");
videoSuggest.map((el) => {

      let div = document.createElement("div");

      let img = document.createElement("img");
      img.src = el.snippet.thumbnails.high.url;

      let title = document.createElement("p");
      title.innerText = el.snippet.title;

      let channel = document.createElement("p")
      channel.innerText = el.snippet.channelTitle;

      let content = document.createElement("div");
      content.id = "content";
      content.append(title, channel);

      
      div.append(img, content);
      video.append(div);

})