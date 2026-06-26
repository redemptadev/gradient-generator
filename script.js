const colors=[
"#FF6B6B",
"#4ECDC4",
"#FFD93D",
"#6C5CE7",
"#00B894",
"#0984E3",
"#F72585",
"#E17055",
"#A29BFE",
"#81ECEC",
"#FD79A8",
"#55EFC4"
];

const preview=document.getElementById("gradientPreview");
const code=document.getElementById("gradientCode");
const history=document.getElementById("history");

const direction=document.getElementById("direction");

let historyList=[];

function randomColor(){

return colors[Math.floor(Math.random()*colors.length)];

}

function generateGradient(){

let c1=randomColor();
let c2=randomColor();
let c3=randomColor();

let angle=direction.value;

let gradient=`linear-gradient(${angle}deg, ${c1}, ${c2}, ${c3})`;

preview.style.background=gradient;

document.body.style.background=gradient;

code.textContent=`background:${gradient};`;

historyList.unshift(gradient);

if(historyList.length>6){

historyList.pop();

}

displayHistory();

}

function displayHistory(){

history.innerHTML="";

historyList.forEach(item=>{

const div=document.createElement("div");

div.className="history-item";

div.style.background=item;

div.onclick=()=>{

preview.style.background=item;

document.body.style.background=item;

code.textContent=`background:${item};`;

};

history.appendChild(div);

});

}

document.getElementById("generateBtn").onclick=generateGradient;

direction.onchange=generateGradient;

document.getElementById("copyBtn").onclick=()=>{

navigator.clipboard.writeText(code.textContent);

alert("CSS Copied!");

};

document.getElementById("saveBtn").onclick=()=>{

localStorage.setItem("favorite",code.textContent);

alert("Saved!");

};

document.getElementById("loadBtn").onclick=()=>{

const fav=localStorage.getItem("favorite");

if(!fav){

alert("No favorite saved.");

return;

}

const gradient=fav.replace("background:","").replace(";","");

preview.style.background=gradient;

document.body.style.background=gradient;

code.textContent=fav;

};

generateGradient();