var character =
document.getElementById("character")

var block = document.getElementById("block");
var counter= 0;

/* character jumping */
function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
     character.classList.remove("animate");  
     counter++; 
    },500);
}
/* death of game */
var checkDead = setInterval(function(){
       var characterTop= 
       parseInt(window.getComputedStyle(character).getPropertyValue("top"));
       var blockLeft= 
       parseInt(window.getComputedStyle(block).getPropertyValue("left"));
       if(blockLeft<20 && blockLeft>0 && characterTop>=130){
           block.style.animation = "none";
           block.style.display = "none";
           alert("Dead score: "+counter);
           counter=0;
           block.style.animation = "block 1s infinite linear";
       }
       else{
           counter++;
           document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100); 
       }
},10);


