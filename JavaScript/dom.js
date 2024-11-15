//Metodos de seleccion de elementos
document.getElementById();
document.getElementsByTagName();
document.getElementsByClassName();
document.querySelector(".parrafo"); //selecciono la clase parrafo

/// modificar valores de atributos

whatever = document.querySelector(".parrafo");
whatever.setAttribute("type", "range"); //cambia el tipo de entrada con el primer valor y luego lo cambia al sengundo valor

obtenerAtributo = whatever.getAttribute("Type");//muestra el valor que esta dentro del atributo type

removerAtributo = whatever.removeAttribute("type");//Remueve el atributo type

//contentEditable (indicar si el texto es editable por el usuario o no)

atributo = whatever.setAttribute("contentEditable", "true");

//dir (indica la direccion del texto)

atributo2 = whatever.setAttribute("dir", "ltr");//comienza el texto de izquierda a derecha (normal)
atributo3 = whatever.setAttribute("dir", "rtl"); //comienza el texto de derecha a izquierda

//hidden (oculta el contenido)

atributo4 = whatever.setAttribute("hidden")

//tabindex (indica si el elemeto puede obtener un focus de input)

atributo5 = whatever.setAttribute("tabindex","0"); //asigna el numero de indice a elemento por tab

//---------Atributos de inputs---------------

let input = document.querySelector(".input-normal");

input.className; //muestra el contenido dentro de la clase
input.value; // muestra el contenido dentro del input
input.type = "number"; // asigna el tipo de entrada
input.accept = "image/png" //permite el tipo de datos especificado
input.minLength = "20" //cantidad minima de caracteres para el texto del input
input.placeholder = "klk muchacho" //asigna el placeholder
input.required = "required" // especifica que el input es requerido para continuar

//-------------Atributos style-------------------

input.style.color = "black"; //cambia el color del elemento
input.style.backgroundColor = "blue"; //cambia el fondo de color

