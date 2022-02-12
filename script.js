class healthbar{
    constructor(x,y,w, h,maxhealth , color){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.maxhealth=maxhealth;
        this.maxWidth=w;
        this.health=maxhealth;
        this.color=color;
    }
    
    show(context){  //Think
        context.linewidth=5;
        context.strokeStyle="#333";
        context.fillStyle=this.color;
        context.fillRect=(this.x,this.y,this.maxWidth,this.h);
        context.strokeRect=(this.x,this.y,this.maxWidth,this.h);
    }
   updateHealth(val){
  this.health=val
  this.w=(this.halth/this.maxhealth)*this.maxWidth}
}



canvas.onclick=function(){
health -=10;
healthbar.updateHealth(health);
};


startGame(){
   //Think
}

playTurn(){
  //Think
}