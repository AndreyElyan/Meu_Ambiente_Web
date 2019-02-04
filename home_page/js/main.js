var intervalo = 3000;

function slide1(){
	document.getElementById("banner").src = "./js/banner1.png";
	setTimeout("slide2()", intervalo);
}

function slide2(){
	document.getElementById("banner").src = "./js/banner2.png";
	setTimeout("slide3()", intervalo);
}


function slide3(){
	document.getElementById("banner").src = "./js/banner3.png";
	setTimeout("slide1()", intervalo);
}
