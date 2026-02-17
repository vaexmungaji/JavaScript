

    function buscarcep(){
    let txtcep=document.getElementById('cep').value;

    ajax.open ('GET', 'https://viacep.com.br/ws/'+txtcep+'/json/');
    ajax.send();
    
    ajax.onload=function(){
    document.getElementById("texto").innerHTML=this.responseText;  

}
}