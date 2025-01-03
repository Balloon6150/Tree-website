let time = 0;
let waters = 0;
let suns = 0;
let firsttime = 0;
let tree = document.getElementById("tree");
let button = document.getElementById("button"); 
let shown = document.getElementById("shown")

function start() {
    setInterval(myTimer, 1000); // Ensure only one interval is set
}

function needwater() {
    waters = 0;
    shown.innerHTML = "Your tree is thirsty"
}

function givewater() {
    waters = 1;
    shown.innerHTML = "Your tree is not thirsty"
    setTimeout(needwater, 20000);
}

function myTimer() {
    if (firsttime === 0) {
        tree.src = "https://cloud-pgyyl5phh-hack-club-bot.vercel.app/0image.png";
        button.classList.add("button1");
        button.classList.remove("button");
    }
    
    if (waters === 1) {
        firsttime += 1;
        time += 1;
        document.getElementById("demo").innerHTML = time + "mm grown";

        let width = parseInt(tree.style.width) || tree.clientWidth; // Get current width of the image
        tree.style.width = (width + 1) + 'px'; // Update the width by adding 1 pixel
    }
}

function needfood() {
    // Add code for this function
}

function grow() {
    // Add code for this function
}

let Top = document.getElementById("Top");

function changetext() {
    Top.innerHTML = "There is no point to this website. Go touch grass and plant something real. Use this website! https://www.wikihow.com/Plant-a-Tree";
}
