var color1 = document.getElementsByClassName("color1")[0];
var color2 = document.getElementsByClassName("color2")[0];


var gradient = document.getElementById("gradient");


color1.addEventListener("input",function(){
	gradient.style.background = "linear-gradient(to right," +color1.value+","+color2.value+")";
})
color2.addEventListener("input",function(){
	gradient.style.background = "linear-gradient(to right," +color1.value+","+color2.value+")";
})
