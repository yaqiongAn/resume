var can1;
var can2;

// 获取canvas的尺寸
var canWidth;
var canHeight;

var ctx1;
var ctx2;

var lastTime;//上一帧执行的时间
var deltaTime;//两针间隔的时间差

var bgPic=new Image();

var ane;
var fruit;

var mom;
var baby;

var mx;
var my;//定义鼠标

var babyTail=[];
var babyBody=[];
var babyEye=[];

var momTail=[];
var momEye=[];
var momBodyOra=[];
var momBodyBlue=[];

var data;

var wave;
var halo;

document.body.onload=game;
function game(){
init();
lastTime=Date.now();
deltaTime=0;
gameloop();
}
function init(){
  // 获得canvas context
  can1=document.getElementById('canvas1');
  can2=document.getElementById('canvas2');
  ctx1=can1.getContext('2d');//通过画布的 getContext() 方法获得一个“绘图环境”对象
  ctx2=can2.getContext('2d');

  can1.addEventListener('mousemove',onMouseMove,false);

  bgPic.src='./src/background.jpg';
  canWidth=can1.width;
  canHeight=can1.height;

  ane=new aneObj();
  ane.init();

  fruit=new fruitObj();
  fruit.init();

  mom=new momObj();
  mom.init();

  baby=new babyObj();
  baby.init();

  mx=canWidth*0.5;
  my=canHeight*0.5;

  data=new dataObj();




  for (var i = 0; i < 8; i++) {
    babyTail[i]=new Image();
    // i=i-10;
    babyTail[i].src='./src1/babyTail'+i+'.png';
  }

  for (var i = 0; i < 2; i++) {
    babyEye[i]=new Image();
    babyEye[i].src='./src1/babyEye'+i+'.png';
  }
  for (var i = 0; i < 20; i++) {
    babyBody[i]=new Image();
    babyBody[i].src='./src1/babyFade'+i+'.png';
  }
  for (var i = 0; i < 8; i++) {
    momTail[i]=new Image();
    // i=i-10;
    momTail[i].src='./src1/bigTail'+i+'.png';
  }
  for (var i = 0; i < 2; i++) {
    momEye[i]=new Image();
    momEye[i].src='./src1/bigEye'+i+'.png';
  }
  for (var i = 0; i < 8; i++) {
    momBodyOra[i]=new Image();
    momBodyBlue[i]=new Image();
    momBodyOra[i].src='./src1/bigSwim'+i+'.png';
    momBodyBlue[i].src='./src1/bigSwimBlue'+i+'.png';
  }
  ctx1.font='30px Verdana';
  ctx1.textAlign='center';

  wave=new waveObj();
  wave.init();
  // wave.num;
  halo=new haloObj();
  halo.init();

}
function gameloop(){
  window.requestAnimFrame(gameloop);
  // console.log('loop');
  var now=Date.now();
  deltaTime=now-lastTime;
  lastTime=now;
  // 解决果实特别大的问题，使detaTime保持小于50
  if (deltaTime>40) {
    deltaTime=40;
  }
  // console.log(lastTime);
  // console.log(deltaTime);
  drawBackground();

  ane.draw();
  fruitMointor();
  fruit.draw();
  ctx1.clearRect(0,0,canWidth,canHeight);
  mom.draw();
  baby.draw();
  momFruitsCollision();
  momBabyCollision();

  data.draw();
  wave.draw();
  halo.draw();

}
function onMouseMove(e){
  if (!data.gameOver) {
    if (e.offSetX||e.layerX) {
      mx=e.offSetX==undefined?e.layerX:e.offSetX;
      my=e.offSetY==undefined?e.layerY:e.offSetY;
      // console.log(mx);
      // console.log(my);
    }
  }

}
