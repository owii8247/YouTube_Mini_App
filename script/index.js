

const API = `AIzaSyBfVS0etz5LA9TmIhBMYgDnxT-CERHyFbs`;

let popularVideos = async () => {
    try {
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=32&regionCode=IN&key=${API}`)
        let data = await res.json();
        console.log("Data:", data);
        displayData(data.items);
    } catch (err) {
        console.log(err);
    }
}
popularVideos();


let displayData = (videos) => {

    let container = document.getElementById("container");
    container.innerHTML = null;

    videos.map(({ id, snippet: { thumbnails: { high: { url } } }, snippet: { title }, snippet: { channelTitle }, statistics: { viewCount } }) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = url;
        img.addEventListener("click", function () {
            videoFunction({ id, title });
        })

        let name = document.createElement("h4");
        name.innerText = title;

        let channel = document.createElement("p");
        channel.innerText = `Channel : ${channelTitle}`

        let views = document.createElement("p")
        views.innerText = `Views : ${viewCount}`

        div.append(img, name, channel, views);
        container.append(div);

    })
}

let items;
let searchVideos = async () => {
    try {
        let query = document.getElementById("query").value;
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=${API} `);
        let data = await res.json();
        console.log("Data:", data)
        items = data.items;
        console.log("Items:", items)
    }
    catch (err) {
        console.error(err);
    }

    localStorage.setItem("items", JSON.stringify(items));
    window.location.href = "search.html";
}

let arr = [];
let videoFunction = ({ id, title, channelTitle }) => {
    arr.push({ id, title, channelTitle });
    localStorage.setItem("Video", JSON.stringify(arr));
    window.location.href = "video.html";
}



// <!-- <iframe
// width="560"
// height="315"
// src="https://www.youtube.com/embed/_cn5J4WHqNM"
// title="YouTube video player"
// frameborder="0"
// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->


