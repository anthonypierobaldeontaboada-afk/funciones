(function () {
    'use strict';

    function validarNumero(valor) {
        return typeof valor === 'number' && Number.isFinite(valor);
    }

    function saludar(nombre = 'mundo') {
        if (typeof nombre !== 'string' || nombre.trim() === '') {
            return 'Hola, mundo!';
        }
        return `Hola, ${nombre.trim()}!`;
    }

    function despedirse(nombre = 'amigo') {
        if (typeof nombre !== 'string' || nombre.trim() === '') {
            return 'Adiós, amigo.';
        }
        return `Adiós, ${nombre.trim()}.`;
    }

    function sumar(a, b) {
        if (!validarNumero(a) || !validarNumero(b)) {
            throw new Error('La suma requiere dos números válidos.');
        }
        return a + b;
    }

    function restar(a, b) {
        if (!validarNumero(a) || !validarNumero(b)) {
            throw new Error('La resta requiere dos números válidos.');
        }
        return a - b;
    }

    function multiplicar(a, b) {
        if (!validarNumero(a) || !validarNumero(b)) {
            throw new Error('La multiplicación requiere dos números válidos.');
        }
        return a * b;
    }

    function dividir(a, b) {
        if (!validarNumero(a) || !validarNumero(b)) {
            throw new Error('La división requiere dos números válidos.');
        }
        if (b === 0) {
            throw new Error('No se puede dividir entre cero.');
        }
        return a / b;
    }

    function miNombre(nombre) {
        if (typeof nombre !== 'string' || nombre.trim() === '') {
            return 'No se ha indicado un nombre.';
        }
        return `Me llamo ${nombre.trim()}.`;
    }

    function esMayor(edad) {
        if (!validarNumero(edad)) {
            return false;
        }
        return edad >= 18;
    }

    function doble(numero) {
        if (!validarNumero(numero)) {
            throw new Error('Debe ingresar un número válido.');
        }
        return numero * 2;
    }

    function esPar(numero) {
        if (!validarNumero(numero)) {
            return false;
        }
        return numero % 2 === 0;
    }

    function contarLetras(texto) {
        if (typeof texto !== 'string') {
            return 0;
        }
        return texto.trim().length;
    }

    function mayusculas(texto) {
        if (typeof texto !== 'string') {
            return '';
        }
        return texto.toUpperCase();
    }

    function minusculas(texto) {
        if (typeof texto !== 'string') {
            return '';
        }
        return texto.toLowerCase();
    }

    function aleatorio(minimo = 0, maximo = 9) {
        if (!validarNumero(minimo) || !validarNumero(maximo)) {
            throw new Error('Los límites deben ser números válidos.');
        }
        if (minimo > maximo) {
            [minimo, maximo] = [maximo, minimo];
        }
        return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    }

    function repetir(texto, veces) {
        if (typeof texto !== 'string') {
            return '';
        }
        if (!validarNumero(veces) || veces < 0) {
            return '';
        }
        return texto.repeat(veces);
    }

    function contarPalabras(texto) {
        if (typeof texto !== 'string') {
            return 0;
        }
        const palabras = texto.trim().split(/\s+/).filter(Boolean);
        return palabras.length;
    }

    function invertirTexto(texto) {
        if (typeof texto !== 'string') {
            return '';
        }
        return texto.split('').reverse().join('');
    }

    function esPalindromo(texto) {
        if (typeof texto !== 'string') {
            return false;
        }
        const limpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
        return limpio === limpio.split('').reverse().join('');
    }

    function calcularPromedio(numeros) {
        if (!Array.isArray(numeros) || numeros.length === 0) {
            return 0;
        }

        const valores = numeros.filter(validarNumero);
        if (valores.length === 0) {
            return 0;
        }

        const suma = valores.reduce((total, valor) => total + valor, 0);
        return suma / valores.length;
    }

    function valorMaximo(numeros) {
        if (!Array.isArray(numeros) || numeros.length === 0) {
            return null;
        }
        const validos = numeros.filter(validarNumero);
        if (validos.length === 0) {
            return null;
        }
        return Math.max(...validos);
    }

    function valorMinimo(numeros) {
        if (!Array.isArray(numeros) || numeros.length === 0) {
            return null;
        }
        const validos = numeros.filter(validarNumero);
        if (validos.length === 0) {
            return null;
        }
        return Math.min(...validos);
    }

    function esVocal(caracter) {
        if (typeof caracter !== 'string' || caracter.length !== 1) {
            return false;
        }
        return /[aeiou]/i.test(caracter);
    }

    function obtenerIniciales(nombreCompleto) {
        if (typeof nombreCompleto !== 'string' || nombreCompleto.trim() === '') {
            return '';
        }
        return nombreCompleto
            .trim()
            .split(/\s+/)
            .map((parte) => parte.charAt(0).toUpperCase())
            .join('');
    }

    function formatFecha(fecha = new Date()) {
        const d = new Date(fecha);
        return new Intl.DateTimeFormat('es-ES', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }).format(d);
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
        { nombre: 'aleatorio', valor: aleatorio(1, 10) },
        { nombre: 'repetir', valor: repetir('ja', 3) },
        { nombre: 'contarPalabras', valor: contarPalabras('JavaScript es poderoso') },
        { nombre: 'invertirTexto', valor: invertirTexto('javascript') },
        { nombre: 'esPalindromo', valor: esPalindromo('anita lava la tina') },
        { nombre: 'calcularPromedio', valor: calcularPromedio([8, 9, 10, 7]) },
        { nombre: 'valorMaximo', valor: valorMaximo([3, 9, 1, 12, 6]) },
        { nombre: 'valorMinimo', valor: valorMinimo([3, 9, 1, 12, 6]) },
        { nombre: 'esVocal', valor: esVocal('a') },
        { nombre: 'obtenerIniciales', valor: obtenerIniciales('Ana Maria Lopez') },
        { nombre: 'formatFecha', valor: formatFecha(new Date('2024-03-23')) }
    ];

    const funciones = {
        validarNumero,
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
        repetir,
        contarPalabras,
        invertirTexto,
        esPalindromo,
        calcularPromedio,
        valorMaximo,
        valorMinimo,
        esVocal,
        obtenerIniciales,
        formatFecha
    };

    if (typeof window !== 'undefined') {
        window.funciones = funciones;
    }

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
        module.exports = funciones;
    }
})();