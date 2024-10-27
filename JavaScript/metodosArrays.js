lista = [4,7,2,6,4]

//pop, elimina el ultimo valor

eliminadoUltimo = lista.pop();

//shift, elimina el primer valor

eliminadPrimero = lista.shift();

//push, agrega al final de la lista

agregadoFinal = lista.push(7);

//reverse, invierte la lista

revertido = lista.reverse();

//unshift, agrega elementos al inicio de la lista

agregadoInicial = lista.unshift(9,6,4);

//Ordena un arreglo (Por numeros y alfabeticamente)

arreglado = lista.sort();

//splice, elimina elementos desde un comienzo al final

eliminando = lista.splice(2,5); //Elimina desde el 3ro al 6to valor
eliminando = lista.splice(2,5, "deiby"); //Elimina desde el 3ro al 6to valor y lo reemplaza por "deiby"

//join, une elementos con cualquier separador

unido = lista.join(" - ");

//slice, muestra los elementos desde un comienzo hasta un numero sin incluir

actualizando = lista.slice(2,5);//no incluye el 5
actualizando = lista.slice(2,-1);//Hasta el final

//Filter y forEach para iterar un array

let cadena = ["Naa", "nada", "mmsiii", "nooo"];

cadena.forEach(function (numero){
    document.write(`${numero} <br>`)
})

cadena.filter((numero)=>{
    document.write(`${numero} <br>`)
})

let resultado = cadena.filter(numero => numero.length == 4)
document.write(resultado)