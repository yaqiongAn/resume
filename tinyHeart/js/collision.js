// 碰撞检测 判断大鱼与果实的距离
function momFruitsCollision(){
  if (!data.gameOver) {
    for (var i = 0; i < fruit.num; i++) {
      if (fruit.alive[i]) {
        var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
        if (l<900) {
          fruit.dead(i);
          wave.born(fruit.x[i],fruit.y[i]);
          data.fruitNum++;
          mom.momBodyCount++;
          if (mom.momBodyCount>7) {
            mom.momBodyCount=7;
          }
          if (fruit.fruitType[i]=='blue') {
            data.double=2;
          }

        }



      }

    }
  }

}
function momBabyCollision(){
  if (data.fruitNum>0&&data.gameOver==false) {
    var l=calLength2(mom.x,mom.y,baby.x,baby.y);
    if (l<900) {
      baby.babyBodyCount=0;
      // data.reset();
      mom.momBodyCount=0;
      data.addScore();
      halo.born(baby.x,baby.y);
      
    }
  }

}
