class animal{
    constructor(){
        this.nombre = "";
        this.sonido = "";
    }
    presentarse() {
        //Nada
    }
    emitirSonido(){
        //nada
    }
    comer(){
        //nada
    }
}
class animalCaminante extends animal{
    caminar(){
        //nada
    }
}

class animalNadador extends animal{
    nadar(){
        //nada
    }
}

class animalVolador extends animal{
    volar(){
        //nada
    }
}

class animalConPatas extends animal{
    constructor(){
        super();
        this.patas = 0
    }
}

class perro extends animalCaminante{
    constructor(){
        super();
        this.nombre = "perro <br>";
        this.sonido = "guau <br>";
        this.patas = 4 + "<br>";
    }
    presentarse(){
        return `Hola mi nombre es ${this.nombre} <br>`
    }
    emitirSonido(){
        return this.sonido
    }
    comer(){
        return "Estoy comiendo <br>"
    }
    nadar(){
        return "Estoy nadando <br>"
    }
    patas(){
        return `Tengo ${this.patas} patas <br>`
    }
}

const firulay = new perro;

document.write(firulay.nombre);
document.write(firulay.emitirSonido());
document.write(firulay.presentarse());
document.write(firulay.patas);