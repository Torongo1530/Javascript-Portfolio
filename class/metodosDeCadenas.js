let cadena = "Esto es un texto cualquiera"

//------------concat-------------

concatenado = cadena.concat("cualquiera"); // returns "Esto es un texto cualquiera cualquiera"

//------------startsWith and endsWith-------------

primeraLetra = cadena.startsWith("e") || cadena.startsWith("E"); //returns true

ultimaletra = cadena.endsWith(concatenado); //returns false

//----------------includes--------------------

incluye = cadena.includes("texto"); // returns true


//-----------indexOf, mostrara en que indice comienza la letra o palabra----------------

indice = cadena.indexOf("texto"); //returns "12" (si devuelve -1 es porque no existe)

//------------lastIndexOf, devolvera la ultima "a" que hay en la cadena------------

lastIndice = cadena.lastIndexOf("a")

//-----------padStart y padEnd, rellena la cadena con el texto que le ingresemos

padEnd = cadena.padEnd(50, "-"); //returns: Esto es un texto cualquiera-----------------------

//---------------repeat, repite el texto---------------

repetir = cadena.repeat(5); //repite el texto 5 veces

//-------------split, divide el texto----------------

dividir = cadena.split(" "); //returns "Esto es un texto cualquiera" (separado por 5 indices)

//----------------substring, nos permite seleccionar un texto por indices----------------

rango = cadena.substring(3,12); //returns: "o es un te"

//----------------toLowerCase, toUpperCase----------------

minuscula = cadena.toLowerCase();
mayusculas = cadena.toUpperCase();

//----------------toString, convierte a string----------------

convertidoCadena = cadena.toString();

//trim, trimEnd, trimStart elimina los espacios en blanco

recortado = cadena.trim();




