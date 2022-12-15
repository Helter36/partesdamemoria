//Título do Projeto: Mercado Feliz
//Nome do Aluno: Helter Jorge Ferreira de Andrade
//Turma/Subturma: 5-c
// Link do video: https://www.youtube.com/watch?v=cUaLj6kYK04
//Resumo: "Partes da Memória" é um jogo educacional com o intuito de interagir e abordar as partes do corpo humano de forma interativa, destinados a alunos do 1º ano do ensino fundamental. Será um jogo da memória afim o jogador terá que memorizar e também identificar as funções das partes do corpo, o jogo conta com um contador que irá desvirar as cartas automaticamente após 5 segundos. 
//Nível: Ciências 1º Ano do Ensino Fundamental
//Habilidades comtempladas: (EF01CI02) Localizar, nomear e representar graficamente (por meio de desenhos) partes do corpo humano e explicar suas funções
//Descrição: O jogo "Partes da Memória" irá induzir o jogador a aprender mais sobre as funções do corpo humano, o jogador deve identificar, as partes do corpo e assimila-los as sua respectivas funções. O objetivo pedagógico do jogo é que o jogador localize, renomeei  e identifique graficamente (por meio de desenhos) partes do corpo humano e assimile as suas funções
//


var xb
var yb1
var yb2
var yb3
var yb4
var yvoltar
var xvoltar
var larguraVoltar
var alturaVoltar
var larguraB
var alturaB
var suavizaB

var tela = 0
var imginicio
var imgcarta1
var imgCartas = []
var imgfundocarta
var imgFundo
var matrizMatch = []
var cartaVirada
var matrizCartasViradas = []
var matrizvalores = []
var valoresCartas = []
var matrizcartas = []
var imgCartaLargura = 102
var imgCartaAltura = 102
var posInicialX = 40
var posInicialY = 80

var linColAnterior = []

var contClicks = 0
var matrizTamanho = 4

var contTempo = 0
const framesPorSegundo = 30
var contSegundos = 0
var indicesOriginais = []
var indicesEmbralhados = []

// SETUP
function setup() {
  createCanvas(500, 500);
  //matrizCartasViradas[1][2] = true
  for(i=0;i<16;i++){
    indicesOriginais[i] = i
  }
  indicesEmbralhados = embaralhar(indicesOriginais)
  
  cont = 0
  for (l=0; l<4; l++){
    tempImgLinha = []
    tempVCartaVirada = []
    tempVValor = []
    tempVMatch = []
    for(c=0;c<4;c++){
      tempImgLinha[c] = imgCartas[indicesEmbralhados [cont]]
      tempVValor[c] = valoresCartas[indicesEmbralhados [cont]]
      tempVCartaVirada[c] = false
      tempVMatch[c] = false
      cont++
    }
    matrizCartasViradas[l] = tempVCartaVirada
    matrizcartas[l] = tempImgLinha
    matrizvalores[l] = tempVValor
    matrizMatch[l] = tempVMatch
  }
  
  
  
  cartaVirada = true 
  xb = 100
  yb1 = 150
  yb2 = 250
  yb3 = 50
  yb4 = 25
  yvoltar = 340
  xvoltar = 300
  larguraB = 200
  larguraVoltar = 150
  alturaVoltar = 70
  alturaB = 60
  suavizaB = 12
  //console.log(matrizvalores)
  
  frameRate(30)
}

function preload(){
  imginicio = loadImage("menu/fundo2.png")
  imgini = loadImage("menu/fundo5.png")
   imgINST = loadImage("menu/fundo3.png")
   imgcred = loadImage("menu/fundo4.png")
  imgfundocarta = loadImage("menu/imgfundo.jpg")
  imgcarta1 = loadImage("menu/cartas/1.jpg")
  imgprof = loadImage("menu/prof.jpeg")
   imgprog = loadImage("menu/prog.jpeg")
for (i=1;i<=8;i++){
  tempImg = loadImage("menu/cartas/"+i+".jpg")
  imgCartas.push(tempImg)
  valoresCartas.push(i)
   tempImg = loadImage("menu/cartas/"+i+".1.jpg")
  imgCartas.push(tempImg)
  valoresCartas.push(i)
}
  
  
}


function mostraCartas(){
   
    
    //posX = posInicialX
    let posY = posInicialY
  for (l=0;l<4;l++){
    let posX = posInicialX
    for (c=0;c<4;c++){
      if (matrizCartasViradas[l][c] || matrizMatch[l][c]){
    image(matrizcartas[l][c],posX,posY,100,100)
      }
      else{
         image(imgfundocarta,posX,posY,100,100)
      }
      posX = posX + imgCartaLargura
    }
    posY  = posY + imgCartaAltura
  }
}

function convertePosMousePosatriz(mx,my){
  mx = mx - posInicialX
  my = my - posInicialY
  let posC = parseInt(mx/imgCartaLargura)
  let posL = parseInt(my/imgCartaAltura)
  console.log(posL + "" +posC)
  posLC = []
  posLC[0] = posL
  posLC[1] = posC
  return posLC
  
}


//desvirar as cartas despois de algum tempo
function desviraCartas(){
 //conta as cartas desviradas
        for (l=0;l<matrizTamanho;l++){
          for(c=0;c<matrizTamanho; c++){
            
            matrizCartasViradas[l][c] = false
            
   
          }
        }

}
//Tela de instruções
function telaIntruções(){
  background(220)
  fill(0)
  image(imgINST,0,0)
  textSize(32)
  //text ("Instruções", 50,50)
  fill(255)
  if(mouseY > yvoltar +70 && mouseY < yvoltar +70 + alturaVoltar && mouseX > xvoltar+40  && mouseX < xvoltar+40  + larguraVoltar){
        fill(250,200,150)
    if(mouseIsPressed){
      tela = 0
    }
   }
  rect(xvoltar+40 ,yvoltar +70,larguraVoltar,alturaVoltar,suavizaB)
  textSize(32)
  fill(0)
  text("Voltar", xvoltar+ 70, yvoltar + 115)
}
//Tela de Créditos
function telaCreditos(){
  background(220)
  fill(153,0,153)
  image(imgcred,0,0)
  /*
  image(imgprof,20,70,125,150)
  image(imgprog,20,230,125,150)
  textSize(32)
  text ("Instruções", 170,50)
   fill(153,0,153)
  textSize(20)
  text ("Helter Jorge", 160,290)
  text ("Estudante de CET, Programador", 160,320)
  text ("Maria Lucia", 160,150)
  text ("Professora da Educação Infantil", 160,180)
  */
  
  fill(255)
  if(mouseY > yvoltar +70 && mouseY < yvoltar +70 + alturaVoltar && mouseX > xvoltar+40  && mouseX < xvoltar+40  + larguraVoltar){
        fill(250,200,150)
    if(mouseIsPressed){
      tela = 0
    }
   }
  rect(xvoltar+40 ,yvoltar +70,larguraVoltar,alturaVoltar,suavizaB)
  textSize(32)
  fill(0)
  text("Voltar", xvoltar+ 70, yvoltar + 115)
}
//Tela inicial/Menu
function telaInicio(){
  background(220);
  image(imgini,0,0)
 textSize(40)
textFont("Cursive")
  fill(0,125,255)
  //text("PARTES DA MEMORIA", xb - 40  ,yb4 + 50)
  
  fill(255)
   if(mouseY > yb3+ 100 && mouseY < yb3+ 100 + alturaB && mouseX > xb +60 && mouseX < xb +60 + larguraB){
        fill(153,50,204)
   }
  rect(xb +60,yb3+ 100,larguraB,alturaB,suavizaB)
textFont("Cursive")
  textSize(28)
  fill(0)
  text("Iniciar jogo", xb + 90,yb1+40)
  
   fill(255)
   if(mouseY > yb1+ 100 && mouseY < yb1+ 100 + alturaB && mouseX > xb +60 && mouseX < xb +60 + larguraB){
    fill(153,50,204)
   }
  rect(xb +60,yb1+ 100,larguraB,alturaB,suavizaB)
  fill(0)
  text("Créditos", xb + 110,yb1+140)
  
  
   fill(255)
    if(mouseY > yb2+100 && mouseY < yb2+100 + alturaB && mouseX > xb+60 && mouseX < xb+60 + larguraB){
    fill(153,50,204)
  }
 
   rect(xb+60,yb2+100,larguraB,alturaB,suavizaB)
  fill(0)
  text("Instruções", xb+95 ,yb2+140)
  fill(255)
}
//tela do jogo
function telaDoJogo(){
   background(220)
  image(imginicio,0,0)
  
  //convertePosMousePosatriz(mouseX,mouseY)
  //fill(0)
  //textSize(32)
 // text ("Inicio", 50,50)
  
 /* if(cartaVirada)
      image(matrizcartas[0][1],10,50,100,100)
  else
     image(imgfundocarta,10,50,100,100)
  */
textSize(20)
  textFont("Helvetica")
  fill(0)
        text("Tempo: " + contSegundos, 300,50)
   mostraCartas()
    if(contClicks == 1 ||  contClicks == 2){
        contTempo++
      contSegundos = parseInt (contTempo / framesPorSegundo)
      if(contSegundos>5){
        contTempo = 0
        contClicks = 0
        desviraCartas()
        contSegundos = 0
      }
      }
    textSize(25)
    fill(255)
   textSize(25)
  if(mouseY > yvoltar -330 && mouseY < yvoltar -330 + alturaVoltar && mouseX > xvoltar-280 && mouseX < xvoltar-280  + larguraVoltar){
        fill(250,200,150)
    if(mouseIsPressed){
      tela = 0
    }
   }
     textSize(25)
  rect(xvoltar-280 ,yvoltar -330,larguraVoltar,50,suavizaB)
  textSize(32)
  fill(0)
  text("Voltar", xvoltar-250, yvoltar -295)
  
  
}

function draw() {
if(tela == 0){
 telaInicio()
  } 
  //tela creditos
if( tela == 1){
  telaCreditos()
}
  //tela instruções
if( tela == 2){
  telaIntruções()
}  
  //tela do jogo
if( tela == 3){
  telaDoJogo()
} 
}


function mouseClicked(){
  if(tela == 0){
    if(mouseY > yb3+ 100 && mouseY < yb3+ 100 + alturaB && mouseX > xb +100 && mouseX < xb +100 + larguraB){
     
    console.log("mouse sobre")
   tela = 3
  
    }else{
      if(mouseY > yb1+ 100 && mouseY < yb1+ 100 + alturaB && mouseX > xb +100 && mouseX < xb +100 + larguraB){
    
  console.log("mouse sobre")
   tela = 1
     
      }else{
         if(mouseY > yb2+100 && mouseY < yb2+100 + alturaB && mouseX > xb+100 && mouseX < xb+100 + larguraB){
     
    console.log("mouse sobre")
   tela = 2
  
    
  }
      }
    }
  }else{
    if(tela == 3){
      linCol = convertePosMousePosatriz(mouseX,mouseY)
      console.log(linCol)
      //cartaVirada = ! cartaVirada
      matrizCartasViradas[linCol[0]][linCol[1]] = true
      contClicks = contClicks+1
      
      //contar os clicks do cronometro
      if(contClicks==2){
         if (matrizvalores[linCol[0]][linCol[1]] == matrizvalores[linColAnterior[0]][linColAnterior[1]]){
           matrizMatch[linCol[0]][linCol[1]] = true
           matrizMatch[linColAnterior[0]][linColAnterior[1]] = true
            contTempo =0
         }
      }
      if(contClicks > 2){
        desviraCartas()
      matrizCartasViradas[linCol[0]][linCol[1]] = true
        contClicks = 1
        contTempo =0
      }
      //if(contClicks == 1 ||  contClicks == 2){
        
     // }
      if(contClicks == 1){
        linColAnterior = linCol
      }
    }
  }
}

    //Tecla Esc
  /*  
function keyPressed(){
  if(tela === 1 || tela === 2 ){
    if(keyCode === ESCAPE)
      tela = 0
  }
}
*/
// embaralha as cartas
function embaralhar(vetorA){
  vetorB = []
  qtInicalElementos = vetorA.length
  for(j=0;j<qtInicalElementos;j++){
    i = parseInt (Math.random()* vetorA.length)
    vx = vetorA.splice(i,1)
    vetorB.push(vx[0])
  }
 // console.log(vetorB)
  return vetorB
}