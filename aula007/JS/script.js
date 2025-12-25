
let btnClick=document.getElementById("btnclick");
btnClick.addEventListener("click",() =>
{
    if(btnClick.style.width=="200px")
    {
        btnClick.style.width="500px";
    }
    else{
        btnClick.style.width="200px";
    }
})

function eventomauseover(){
    document.getElementById("btnover").style.backgroundColor="RGBA(55,55,55,0.93)";
    document.getElementById("btnover").style.color="White";
    document.getElementById("btnover").textContent="Evento mouseout";
}
function mouseout(){
    document.getElementById("btnover").style.backgroundColor="#39f30a56";
    document.getElementById("btnover").style.color="black";
    document.getElementById("btnover").textContent="Eventomouseover";
}

let btnmousedown=document.getElementById("btnmousedown");
btnmousedown.addEventListener("mousedown",() =>
{
    btnmousedown.style.backgroundColor="RGBA(47,47,47,0.21)";
})
btnmousedown.addEventListener("mouseup",() =>
{
    btnmousedown.style.backgroundColor="#39f30a56";
})
//Efeito botão que se move ao ser pressionar 
let botaomove=    document.getElementById("btnmousemove");
let posicao=0;
botaomove.addEventListener("mousemove",() =>
{
    posicao+=20;
    botaomove.style.left=posicao+"px";
});

//Eventos para inputs
//Caixas de texto

function mudou()
{
    alert("mudou");
}
let txt=document.getElementById("txtTeste");
txt.addEventListener("keyup",() =>
{
      txt.style.border="0px solid yellow";

});

function modificar()
{
    document.body.style.fontSize='16px';
}
function resiz()
{
    alert("Modificou o tamamnho");
}