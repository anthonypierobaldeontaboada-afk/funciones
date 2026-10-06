(function () {
    'use strict';

    function saludar(nombre = 'mundo') {
        return `Hola, ${nombre}!`;
    }

    function despedirse(nombre = 'amigo') {
        return `Adiós, ${nombre}.`;
    }

    function sumar(a, b) {
        return a + b;
    }

    function restar(a, b) {
        return a - b;
    }

    function multiplicar(a, b) {
        return a * b;
    }

    function dividir(a, b) {
        if (b === 0) {
            throw new Error('No se puede dividir entre cero.');
        }
        return a / b;
    }

    function miNombre(nombre) {
        return `Me llamo ${nombre}.`;
    }

    function esMayor(edad) {
        return edad >= 18;
    }

    function doble(numero) {
        return numero * 2;
    }

    function esPar(numero) {
        return numero % 2 === 0;
    }

    function contarLetras(texto) {
        return texto.length;
    }

    function mayusculas(texto) {
        return texto.toUpperCase();
    }

    function minusculas(texto) {
        return texto.toLowerCase();
    }

    function aleatorio(minimo = 0, maximo = 9) {
        return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    }

    function repetir(texto, veces) {
        return texto.repeat(veces);
    }

    const ejemplos = [
        { nombre: 'saludar', valor: saludar('Carlos') },
        { nombre: 'despedirse', valor: despedirse('Carlos') },
        { nombre: 'sumar', valor: sumar(5, 3) },
        { nombre: 'restar', valor: restar(10, 4) },
        { nombre: 'multiplicar', valor: multiplicar(6, 7) },
        { nombre: 'dividir', valor: dividir(20, 4) },
        { nombre: 'miNombre', valor: miNombre('Carlos') },
        { nombre: 'esMayor', valor: esMayor(20) },
        { nombre: 'doble', valor: doble(5) },
        { nombre: 'esPar', valor: esPar(7) },
        { nombre: 'contarLetras', valor: contarLetras('hola') },
        { nombre: 'mayusculas', valor: mayusculas('hola') },
        { nombre: 'minusculas', valor: minusculas('HOLA') },
        { nombre: 'aleatorio', valor: aleatorio() },
        { nombre: 'repetir', valor: repetir('ja', 3) }
    ];

    if (typeof document !== 'undefined') {
        const output = document.getElementById('output');

        if (output) {
            ejemplos.forEach((ejemplo) => {
                const item = document.createElement('li');
                item.innerHTML = `<strong>${ejemplo.nombre}:</strong> ${ejemplo.valor}`;
                output.appendChild(item);
            });
        }
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            saludar,
            despedirse,
            sumar,
            restar,
            multiplicar,
            dividir,
            miNombre,
            esMayor,
            doble,
            esPar,
            contarLetras,
            mayusculas,
            minusculas,
            aleatorio,
            repetir
        };
    }
})();