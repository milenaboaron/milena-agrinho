let olhoX, olhoY;
let etapa = 0;

function preload(){
 img= loadImage( "milho.png")
  img3= loadImage( "mercado.png")
 img2= loadImage( "estrada.png")}
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("#FFECB3"); // fundo claro

  desenhaCenario();
  desenhaRosto();

  olhoX = map(mouseX, 0, width, 130, 170);
  olhoY = map(mouseY, 0, height, 130, 170);

  // Pupilas móveis
  fill("black");
  circle(olhoX, olhoY, 10);
  circle(olhoX + 100, olhoY, 10);

  mostraEtapa();

  if (mouseIsPressed) {
    if (mouseX < 200) etapa = 1;         // Campo
    else if (mouseX < 400) etapa = 2;    // Estrada
    else etapa = 3;                      // Cidade
  }
}

function desenhaRosto() {
  fill("#11A3E6");
  circle(200, 200, 300); // cabeça
  fill("white");
  circle(150, 150, 60); // olho esq
  circle(250, 150, 60); // olho dir
  fill("#A8E3F3");
  triangle(50, 100, 350, 100, 200, 40);
  fill("#EBEEE6");
  
 
let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("5");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if(idade >= 10) {
    if(idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      return "As aventuras de pi";
    }
  } else {
    return "A viagem de chihiro";
  }
}

  line(150, 270, 250, 250); // boca
}

function desenhaCenario() {
  // Campo
  fill("#AED581");
  rect(0, 0, 200, 400);
  fill("green");
  textSize(20);
  text("🌾 Campo", 50, 30);

  // Estrada
  fill("#00FFB4");

  text("🚚 Estrada", 230, 30);
  rect(200, 0, 200, 400);
  fill("black");
  text("🚚 Estrada", 230, 30);

  // Cidade
  fill("#90CAF9");
  rect(400, 0, 200, 400);
  fill("gray");
  text("🏪 Cidade", 450, 30);
}

function mostraEtapa() {
  textSize(15);
  fill("black");

  if (etapa == 1) {
    text("Etapa: Plantio e colheita!", 20, 370);
    image(img,0,190,120,130)
     text("🧑‍🌾🌽", 10, 350);
  } else if (etapa == 2) {
    
    text("Etapa: Transporte dos alimentos.", 190, 370);
   text("🚜🚛", 200, 390);
    image(img2,195,250,180,100);
  } else if (etapa == 3) {
    text("Etapa: Chegada ao mercado.", 400, 350);
    image(img3,420,150,180,160);
    text("🛒👩🏿‍🦲", 430, 370);
     
  } else {
    text("Clique no cenário para explorar o caminho do alimento!", 100, 370);
  }
}

