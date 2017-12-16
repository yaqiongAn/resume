var fruitObj=function(){
  this.alive=[];//bool 是否活着
  this.x=[];
  this.y=[];
  this.l=[];
  this.fruitType=[];
  this.spd=[];
  this.orange=new Image();
  this.blue=new Image();
}
fruitObj.prototype.num=30;//数量
fruitObj.prototype.init=function(){
  for (var i = 0; i < this.num; i++) {
    this.alive[i]=false;
    this.x[i]=0;
    this.y[i]=0;
    this.spd[i]=Math.random()*0.017+0.003;//0.003到0.02
    this.fruitType[i]='';


    // this.born(i);//初始化时所有果实出生
  }
  this.orange.src='./src/fruit.png';
  this.blue.src='./src/blue.png'
}
fruitObj.prototype.draw=function(){
  // console.log('/');
  for (var i = 0; i < this.num; i++) {
    if (this.alive[i]) {
      if (this.fruitType[i]=='blue') {
        var pic=this.blue;
      }else {
        var pic=this.orange;
      }
      if (this.l[i]<=14) {
        this.l[i]+=this.spd[i]*deltaTime;//大小变大
      }else {
        this.y[i]-=this.spd[i]*7*deltaTime;
      }
      ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
      if (this.y[i]<10) {
        this.alive[i]=false;
      }
    }


  }
}
fruitObj.prototype.born=function(i){
  var aneID=Math.floor(Math.random()*ane.num);
  this.x[i]=ane.headx[aneID];
  this.y[i]=ane.heady[aneID];
  this.l[i]=0;
  this.alive[i]=true;
  //大小
  var ran=Math.random();
  if (ran<0.3) {
    this.fruitType[i]='blue';
  }else {
    this.fruitType[i]='orange'
  }

  }
  fruitObj.prototype.dead=function(i){
    this.alive[i]=false;
  }
  function fruitMointor(){
    var num=0;
    for (var i = 0; i < fruit.num; i++) {

      if (fruit.alive[i]) {
        num++;
      }
    }
    if (num<15) {
      sendFruit();
      return;
    }
  }
  function sendFruit(){
    for (var i = 0; i < fruit.num; i++) {
      if (!fruit.alive[i]) {
        fruit.born(i);
        return ;
      }
    }
  }
