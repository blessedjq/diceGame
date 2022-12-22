var rand=Math.floor(Math.random()*6)+1;
var imgsrc="images/dice"+rand+".png";
var ima=document.querySelectorAll("img")[0];
ima.setAttribute("src",imgsrc);
var rand1=Math.floor(Math.random()*6)+1;
var imgsrc1="images/dice"+rand1+".png";
var ima1=document.querySelectorAll("img")[1];
ima1.setAttribute("src",imgsrc1);
if(rand>rand1)
{
    document.querySelector("h1").innerHTML="🏁 Player 1 wins";
    var audio=new Audio('dice.mp3');
    audio.play();
}
else if(rand1>rand)
{
    document.querySelector("h1").innerHTML="🏁 Player 2 wins";
    var audio=new Audio('dice.mp3');
    audio.play();
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
document.querySelector(".roll").addEventListener('click',function(){
   
   
    window.location.reload();
});