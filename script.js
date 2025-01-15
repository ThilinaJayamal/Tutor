const videoContainer = document.getElementById("vcontainer");
const player = document.getElementById("player");
const playBtn = document.getElementById("play");

document.addEventListener("click",(e)=>{
    e.stopPropagation();
})

document.addEventListener("click",(e)=>{
    videoContainer.classList.add("hidden");
})

playBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    videoContainer.classList.remove("hidden");
})


