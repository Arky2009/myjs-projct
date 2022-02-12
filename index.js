let health=100;
let x=5;
let y=5;
let healthbarwidth=5;
let healthbarheight=20;
const healthbar=new healthbar(x,y,healthbarwidth, healthbarheight,"green");

const frame=function(){
    context.clearRect(0,0,width,height);
    healthbar.show(context);
    requestAnimationframe(frame);
}