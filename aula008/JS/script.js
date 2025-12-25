
const listAlimentos=[2];
let posicao=0;
let txt=document.getElementById("txtAlimento");
let list=document.getElementById("list");

txt.addEventListener("keypress",function(event)
{
    if(event.key==="Enter")
    {
            txt=document.getElementById("txtAlimento").value;
            if(listAlimentos.length<=2)
            {
                listAlimentos[posicao]=txt;
                posicao++;
                alert("Item adicionado");

            }
            else{
                alert("Fim do Array")
                for(let i=0;i<=2;i++){
                    let newOption=document.createElement("option");
                    newOption.value=listAlimentos[i];
                    newOption.text=listAlimentos[i];
                    list.appendChild(newOption);
                    posicao=0;
                }
            }
        txt=document.getElementById("txtAlimento")
        txt.value="";
    }
})


const listPlayers=
[
    "Cristiano Ronaldo",
    "Messi",
    "Pele",
    "Ibrahim Dias",
    "Neymar",
    "Anacleto"
]
listPlayers.sort();
document.getElementById("pTeste").innerHTML=listPlayers;

const numbers=[25,1,100,10];
numbers.sort(function(a,b) {return a-b});
console.log(numbers)