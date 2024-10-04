//Crear clase
class smartphone{
    constructor(brand, model, color){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.info = `${this.brand} ${this.model} color ${color}`;
    }
    showInfo(){
        element.style.backgroundColor = this.color;
        element.innerHTML = this.info;
    }
}

class celulares{
    constructor(color, peso, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    //Metodos
    botonEncendido(){
        if (this.encendido == false){
            document.write("Encendiendo celular");
            this.encendido = true;
        }
        else{
            document.write("Celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true){
            document.write("Reiniciando celular")
        }
        else{
            document.write("El celular ya esta apagado")
        } 
    }
    tomarFoto(){
        document.write(`Foto tomada con una resolucion de ${this.resolucionDeCamara}`)
    }
    grabarVideo(){
        document.write(`Grabando video con una resolucion de ${this.resolucionDeCamara}`)
    }
    phoneInfo(){
        document.write(`
            Color: <b>${this.color}</b><br>
            peso: <b>${this.peso}</b><br>
            resolucion de pantalla:<b>${this.resolucionDePantalla}</b><br>
            reslucion de camara:<b>${this.resolucionDeCamara}</b><br>
            memoria ram:<b>${this.ram}</b><br><br>
            `)
    }
    

    
}

//agregar otra clase y utilizar herencia
class celularAltaGama extends celulares{
    constructor(color, peso, rdp, rdc, ram, rdce){
        super(color, peso, rdp, rdc, ram);
        this.resolucionCamaraExtra = rdce;
    }
    phoneInfo(){
        document.write(`
            Color: <b>${this.color}</b><br>
            peso: <b>${this.peso}</b><br>
            resolucion de pantalla:<b>${this.resolucionDePantalla}</b><br>
            reslucion de camara:<b>${this.resolucionDeCamara}</b><br>
            memoria ram:<b>${this.ram}</b><br>
            Resolucion de camara extra: <b>${this.resolucionCamaraExtra}</b><br>
            `)
        }

}

//Guardar clases en variables
celular1 = new celulares("negro", "190g", "5'", "2k", "8gb");
celular2 = new celularAltaGama("blanco", "170g", "6'", "full hd", "10gb", "4k");

//Llamar las clases
celular1.phoneInfo();
celular2.phoneInfo();
