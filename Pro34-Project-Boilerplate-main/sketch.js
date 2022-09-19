
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


/*primeiramente eu queria deixar claro que isso é um jogo de simulação de baiseball sem base, e outras coisas, mas era para ser um taco que no timing certo acerta em cheio para fazer ponto
se vc demorar ele vai fraco ou forte para baixo, ou até n vai, mas se vc fazer muito cede ele não vai... tem que acertar o timing, de primeira vc vai ter dificuldade mas vai se acostumando
com a prática, e tou orgulhoso, fiz tudo sózinho, a única coisa complicada, que tive que pesquisar, foi fazer uma alavanca para o taco, eu achei o composite.rotate, dai eu acabei pegando 
o código bruto pq n achei a biblioteca comcertinho, tipo uma biblioteca levava a outra q levava a outra...,queria ter mais tempo para adicionar efeitos sonoros e gifs mas eu já passei muito 
do prazo :( (desculpa aliás)*/
var bola, gamestate = "menu", inicio, timer = false, bolas = [], BSS = []
var taco, tacos = []
var points = 0
var teste
var tempo = 1800 
var estadio, deixa_eu_ver = 0, restart, wow, wows = [], num=0, tempinho = 0

const xzinho = 330
const yzinho = 550

//330, 550
//300, 670
function setup() {
  createCanvas(windowWidth,windowHeight);
  
  engine = Engine.create();
  world = engine.world;

  estadio = loadImage("estadio.jpg")
  
  /*X: 291
  sketch.js:62 Y: 439*/

  inicio = createImg("start.png")
  inicio.position(width/2-250, height/2-125)
  inicio.size(500,250)
  teste = createSprite(xzinho, yzinho-115, 20, 20)
  teste.visible = false
}






function draw() 
{
  background(51);
  if(gamestate == "play"){
    if(tempo>0){
      tempo -=1
    }
    background(estadio)
    push()
    textSize(108)
    fill("red")
    text("faltam " + int(tempo/30) + " segundos", width/2 -200, 200)
    pop()
    bater()
    push()

    textSize(72)
    fill("red")
    text("points= "+points, 100, 100)
    pop()
    if(!timer){
      
      timer = true
      setTimeout(() => {
        timer = false
      }, 3000);
    }
    if(tacos.length > 0){
      taco.rotacionar()
      taco.aparecer()
    }
    if(num == 0){
      num = Math.round(random(20,40))
    }
    //tempinho = 0
    tempinho += 1
    
    if(tempinho == num){
      bola = new Bolas(1500,500, 25)
      Matter.Body.applyForce(bola.body, {x:0, y:0}, {x:-10, y:-15})
      bolas.push(bola)
      num = 0
      tempinho =0
    }
    //ellipse(400, 650,10)
    
    if(wows.length>0){
      for(let i = 0;i<wows.length;i++){
        wows[i].contar()
        if(wows[i].clock<=0){
          //wows[i].destroy()
          wows.splice(i,1)  
        }
      }
    }


    for( let i = 0; i<bolas.length; i++){
      bolas[i].show()
      bolas[i].morrer(i)
    }
    if(tempo <=0){
      gamestate = "gameover"

    }
    /*for(let i = 0; i<BSS.length; i++){
      BSS[i].rot 
    }*/
  }else{
    if(gamestate == "menu"){
      inicio.visible = true
      inicio.mouseClicked(()=>{
        inicio.remove()
        gamestate = "play"
      })
    }else{
      if(gamestate == "gameover"){
        inicio.remove()
        push()
        textSize(120)
        fill("red")
        text("ACABOU", width/2 -500, height/2-200)
        fill("red")
        text(points+" Pontos",width/2 -210, height/2-100)
        pop()
        
        restartar()
        /*restart.mouseClicked(()=>{
          restart.remove()
          gamestate = "play"
          points = 0
          tempo = 1800
          deixa_eu_ver = 0
        })*/

      }
    }
  }
  console.log("num= "+num)
  console.log("tempinho= "+tempinho)
  Engine.update(engine);
  drawSprites()
}

function bater(){
  if(keyDown("z")){
    if(tacos.length == 0){
      taco = new Taco(xzinho, yzinho, 20, 250) //taco = new Taco(250, 400, 20, 700) taco = new Taco(330, 600, 20, 350)
      tacos.push(taco)
    }
  }
}



function mouseReleased(){
  console.log("foi")
  bola = new Bolas(1500,500, 25)
  Matter.Body.applyForce(bola.body, {x:0, y:0}, {x:-10, y:-15})
  bolas.push(bola)
}


function restartar(){
  if(deixa_eu_ver <=0){
    restart= createImg("start.png")
    restart.position(width/2-250, height/2+125)
    restart.size(500,250)
  }else{
    restart.mouseClicked(()=>{
      restart.remove()
      gamestate = "play"
      points = 0
      tempo = 1800
      deixa_eu_ver = 0
      for(let i = 0; i<bolas.length;i++){
        World.remove(world, bolas[bolas.length-1])
        bolas.pop()
      }
    })
  }
  deixa_eu_ver = 1
}