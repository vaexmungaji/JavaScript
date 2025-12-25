
/*const btnLogar=document.getElementById("btnLogin");


btnLogar.addEventListener("click", function(){
    const txtName=document.getElementById("name").value;
    const txtPassword=document.getElementById("senha").value;

    if(txtName==="Dom" && txtPassword==="1234"){
        window.location.href="home.html";
    } else{
        alert("Nome de usuário ou senha incorretos.");
    }   
});*/


const texto="Seja bem-vindo ao nosso site!";
let index=0;
const textoElemento=document.getElementById("texto");

function escreverTexto() {
    if(index < texto.length) {
        textoElemento.textContent += texto.charAt(index);
        index++;
        setTimeout(escreverTexto, 110);
    }
}

escreverTexto();