let data= new Date()
let diaSemana= data.getDay();
let dataformatada= data.toLocaleDateString('pt-BR', {dateStyle: 'long'});
console.log("Data formatada: " + dataformatada);