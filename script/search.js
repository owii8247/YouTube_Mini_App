let data = JSON.parse(localStorage.getItem("items"));
console.log(data);

let container = document.getElementById("container2");

data.map(({ id: { videoId }, snippet: { thumbnails: { high: { url } } }, snippet: { title }, snippet: { channelTitle } }) => {

    // <!-- <iframe 
    // width="560" 
    // height="315" 
    // src="https://www.youtube.com/embed/_cn5J4WHqNM" 
    // title="YouTube video player" 
    // frameborder="0" 
    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

    let img = document.createElement("img");
    img.src = url;
    img.addEventListener("click", function () {
        videoFunction({ videoId, title, channelTitle });
    })

    let div = document.createElement("div");

    let name = document.createElement("p");
    name.innerText = title;

    let channel = document.createElement("p");
    channel.innerText = channelTitle;

    let content = document.createElement("div");
    content.setAttribute("id", "content");
    content.append(name, channel);

    
    div.append(img, content);

    container.append(div);
})

let arr = [];
let videoFunction = ({ videoId, title, channelTitle }) => {
    arr.push({ videoId, title, channelTitle });
    localStorage.setItem("video", JSON.stringify(arr));
    window.location.href = "./searchresult.html";
}