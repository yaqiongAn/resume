//动态原型创建对象
var aneObj=function(){
  // 创建海葵对象
  this.rootx=[];//所有海葵的x坐标
  this.headx=[];
  this.heady=[];
  this.amp=[];
  this.alpha=0;
  // this.len=[];//所有海葵的高
}
aneObj.prototype.num = 50;//海葵的数量50
// 初始化海葵对象
aneObj.prototype.init=function(){
  for (var i = 0; i < this.num; i++) {
    this.rootx[i]=i*16+Math.random()*20;
    this.headx[i]=this.rootx[i];
    this.heady[i]=canHeight-250+Math.random()*50;
    this.amp[i]=Math.random()*50+0;
    // this.len[i]=200+Math.random()*50;
    // 海葵的起始位置
    // console.log('a');
  }
}
aneObj.prototype.draw=function(){
  // 绘制海葵
  this.alpha+=deltaTime*0.0005;
  var l=Math.sin(this.alpha);//-1 到1
  ctx2.save();//保存画布的状态
  ctx2.globalAlpha=0.6;
  ctx2.lineWidth=20;//路径宽度
  ctx2.lineCap='round';//设置或返回线条末端线帽的样式
  ctx2.strokeStyle='#3b154e';
  for (var i = 0; i < this.num; i++) {
    //beginPath,moveTo,lineTo,stroke,strokeStyle,lineWidth,lineCap,globalAlpha透明度
    ctx2.beginPath();//开始一条新路径
    ctx2.moveTo(this.rootx[i],canHeight);//从（x,y)开始定义一条新的子路径
    ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i]+l*this.amp[i],canHeight-100-Math.sqrt((canHeight-this.heady[i]-100)*(canHeight-this.heady[i]-100)-this.amp[i]*l*this.amp[i]*l));//路径结束坐标

    ctx2.stroke();//绘制


  }

}
