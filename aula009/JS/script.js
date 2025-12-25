
const iniciar = document.getElementById('btnIniciar');
const parar = document.getElementById('btnParar');
const contador = document.getElementById('contador');

iniciar.addEventListener('mousemove', function() {

    tempo=setTimeout(() => 
        {
            var counter=parseInt(contador.innerText);
            counter++;
            contador.innerText=counter;
    }, 1000);
});

parar.addEventListener('click', function() {
    clearTimeout(tempo);
    document.getElementById('contador').innerText = 'Contagem parada antes de completar 5 segundos!';

});

const iniciar1 = document.getElementById('btnIniciar1');
const parar1 = document.getElementById('btnParar1');
const contador1 = document.getElementById('contador1');
let intervalo;
iniciar1.addEventListener('click', function() {
    intervalo = setInterval(() => {
        var cromometro = parseInt(contador1.innerText);
        cromometro++;
        contador1.innerText = cromometro;
    }, 1000);
});

parar1.addEventListener('click', function() {
    clearInterval(intervalo);           
    var cromometro = parseInt(contador1.innerText);
});