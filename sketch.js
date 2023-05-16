var EstadoJogo = "Quarto";

//protag
var Alice;


//Lembrando: ANO 1888 (durante a abolição da escravatura)


//leveis
var level1, lutia, lorenzo;
var level2, mag, jose;




//LEVEL 1: quarto,sala,corredor e objetos
var pistas = [];

//quarto
var Wallpaper_room, paint_couple, somefabric;

var Button_Next_Scene;

//sala (ela estava gravida e preocupada que nao tinha dinheiro, por isso a família consolava)
var panos, mesa_madeira, family_letter, docs;


function preload()
{
  

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  //criar os sprites
  alice1 = createSprite()







}

function draw() 
{
  background("#e5e4ff");
 
  if(estadoJogo === "Quarto")
  {


  }

//1 FASE
if(estadoJogo === "Sala")
  {
      //sala
   panos = createSprite();
   mesa_madeira = createSprite();
   family_letter  =createSprite();
   docs = createSprite();


  }

  if(estadoJogo === "Corredor")
  {
  
    panos.destroy();


    //sprites do corredor

  }

  if(estadoJogo === "Porta_flashback_Porto")
  {


  }

//2 FASE  
  


  drawSprites();
}
