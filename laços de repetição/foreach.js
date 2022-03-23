const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// forEach leitura: para cada nota 
// callback
notas.forEach(nota => {
    somaDasNotas += nota;
});

//posso fazer usando o function
// arrow function = function
notas.forEach(function(nota) {
    somaDasNotas += nota;
})

let media = somaDasNotas/notas.length

console.log(media)