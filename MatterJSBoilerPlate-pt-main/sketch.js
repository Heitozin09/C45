var Barril,BarrilImg
var Buraco,BuracoImg
var Carro1,Carro1Img
var Carro2,Carro2Img
var Cavalo,CavaloImg
var Cerca,CercaImg
var Moto,MotoImg
var Pedra,PedraImg
var Road,RoadImg

function preload()
{
	BarrilImg = loadImage("Barril.png")
	BuracoImg= loadImage("Buraco.png")
	Carro1Img= loadImage("Carro1.png")
	Carro2Img= loadImage("Carro2.png")
	CavaloImg= loadImage("Cavalo.png")
	CercaImg= loadImage("Cerca.png")
	PedraImg= loadImage("Pedra.png")
	MotoImg= loadImage("Moto.png")
	RoadImg= loadImage("Road.png")
}

function setup() {
	createCanvas(800, 700);






  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



