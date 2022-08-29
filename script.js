const numero = document.querySelectorAll(`[data-numero]`);
const operador = document.querySelectorAll(`[data-operador]`);
const igual = document.querySelector(`[data-igual]`);
const borrartodo = document.querySelector(`[data-borrar-todo]`);
const borrar = document.querySelector(`[data-borrar]`);
const valorSuperior = document.querySelector(`[data-valor-superior]`);
const valorInferior = document.querySelector(`[data-valor-inferior]`);


class Calculadora {
    constructor(valorInferior, valorSuperior){
        this.valorInferior = valorInferior;
        this.valorSuperior = valorSuperior;
        this.inferior = ``;
        this.superior = ``;
        this.operador = undefined;
    }
    
    agregarNumero(numeros){
        if( numero === `.` && this.inferior.includes(`.`))return;
        this.inferior = this.inferior + numeros;
    }
    imprimirDisplay() {
        this.valorInferior.innerText = this.inferior;
        this.valorSuperior.innerText = this.superior
    }
    borrar () {
        this.inferior = this.inferior.slice(0, -1)
    }
    elegirOperacion(operacion){
        if( this.inferior == ``)
        return;
        if( this.superior != ``){
            this.realizarCalculo()
        }
        this.operacion = operacion;
        this.superior = this.inferior;
        this.inferior = ``;
    }
    realizarCalculo() {
        let resultado
        let conversionValorSuperior = parseFloat(this.superior);
        let conversionValorInferior = parseFloat(this.inferior);
        if(isNaN(conversionValorSuperior) || isNaN(conversionValorInferior))return;

        switch (this.operacion) {
            case `+`:
                resultado = conversionValorSuperior + conversionValorInferior;
                break;
            case `-`:
                resultado = conversionValorSuperior - conversionValorInferior;
                break;
            case `*`:
                resultado = conversionValorSuperior * conversionValorInferior;
                break;
            case `/`:
                resultado = conversionValorSuperior / conversionValorInferior;
                break;
            default:
                return;
        }

        this.inferior = resultado;
        this.operacion = undefined;
        this.superior = ``;
    }
    limpiarPantalla() {
        this.inferior = ``;
        this.superior = ``;
        this.operacion = undefined
    }
}

const calculadora = new Calculadora (valorInferior, valorSuperior);



numero.forEach(boton => {
    boton.addEventListener(`click`, () => {
        calculadora.agregarNumero(boton.innerText)
        calculadora.imprimirDisplay()
    })
})
 console.log();

borrar.addEventListener(`click`, () => {
    calculadora.borrar();
    calculadora.imprimirDisplay()
})

operador.forEach(boton => {
    boton.addEventListener(`click`, () => {
        calculadora.elegirOperacion(boton.innerText)
        calculadora.imprimirDisplay()
    })
})

igual.addEventListener(`click`, () => {
    calculadora.realizarCalculo()
    calculadora.imprimirDisplay()
})

borrartodo.addEventListener(`click`, () => {
    calculadora.limpiarPantalla()
    calculadora.imprimirDisplay()
})