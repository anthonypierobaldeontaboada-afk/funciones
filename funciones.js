(function () {
    'use strict';

    function validarNumero(valor) {
        return typeof valor === 'number' && Number.isFinite(valor);
    }

    function exigirNumero(valor, nombre) {
        if (!validarNumero(valor)) {
            throw new TypeError(`${nombre} debe ser un número válido.`);
        }
    }

    function saludar(nombre = 'mundo') {
        return `Hola, ${typeof nombre === 'string' && nombre.trim() ? nombre.trim() : 'mundo'}!`;
    }

    function despedirse(nombre = 'amigo') {
        return `Adiós, ${typeof nombre === 'string' && nombre.trim() ? nombre.trim() : 'amigo'}.`;
    }

    function sumar(a, b) {
        exigirNumero(a, 'El primer valor');
        exigirNumero(b, 'El segundo valor');
        return a + b;
    }

    function restar(a, b) {
        exigirNumero(a, 'El primer valor');
        exigirNumero(b, 'El segundo valor');
        return a - b;
    }

    function multiplicar(a, b) {
        exigirNumero(a, 'El primer valor');
        exigirNumero(b, 'El segundo valor');
        return a * b;
    }

    function dividir(a, b) {
        exigirNumero(a, 'El dividendo');
        exigirNumero(b, 'El divisor');
        if (b === 0) {
            throw new RangeError('No se puede dividir entre cero.');
        }
        return a / b;
    }

    function potencia(base, exponente) {
        exigirNumero(base, 'La base');
        exigirNumero(exponente, 'El exponente');
        const resultado = base ** exponente;
        if (!Number.isFinite(resultado)) {
            throw new RangeError('El resultado está fuera del rango numérico permitido.');
        }
        return resultado;
    }

    function factorial(numero) {
        exigirNumero(numero, 'El valor');
        if (!Number.isInteger(numero) || numero < 0 || numero > 170) {
            throw new RangeError('El factorial requiere un entero entre 0 y 170.');
        }
        let resultado = 1;
        for (let factor = 2; factor <= numero; factor += 1) {
            resultado *= factor;
        }
        return resultado;
    }

    function esPrimo(numero) {
        exigirNumero(numero, 'El valor');
        if (!Number.isInteger(numero) || numero < 2) {
            return false;
        }
        if (numero > 1000000000) {
            throw new RangeError('Para comprobar si es primo, ingresa un entero menor o igual a 1 000 000 000.');
        }
        if (numero % 2 === 0) {
            return numero === 2;
        }
        for (let divisor = 3; divisor <= Math.sqrt(numero); divisor += 2) {
            if (numero % divisor === 0) {
                return false;
            }
        }
        return true;
    }

    function celsiusAFahrenheit(celsius) {
        exigirNumero(celsius, 'La temperatura');
        return (celsius * 9) / 5 + 32;
    }

    function fahrenheitACelsius(fahrenheit) {
        exigirNumero(fahrenheit, 'La temperatura');
        return ((fahrenheit - 32) * 5) / 9;
    }

    function miNombre(nombre) {
        if (typeof nombre !== 'string' || nombre.trim() === '') {
            throw new TypeError('Escribe un nombre para presentarlo.');
        }
        return `Me llamo ${nombre.trim()}.`;
    }

    function esMayor(edad) {
        exigirNumero(edad, 'La edad');
        if (edad < 0) {
            throw new RangeError('La edad no puede ser negativa.');
        }
        return edad >= 18;
    }

    function doble(numero) {
        exigirNumero(numero, 'El valor');
        return numero * 2;
    }

    function esPar(numero) {
        exigirNumero(numero, 'El valor');
        return Number.isInteger(numero) && numero % 2 === 0;
    }

    function contarLetras(texto) {
        if (typeof texto !== 'string') {
            throw new TypeError('El valor debe ser texto.');
        }
        return Array.from(texto.trim()).length;
    }

    function mayusculas(texto) {
        if (typeof texto !== 'string') {
            throw new TypeError('El valor debe ser texto.');
        }
        return texto.toLocaleUpperCase('es');
    }

    function minusculas(texto) {
        if (typeof texto !== 'string') {
            throw new TypeError('El valor debe ser texto.');
        }
        return texto.toLocaleLowerCase('es');
    }

    function aleatorio(minimo = 0, maximo = 9) {
        exigirNumero(minimo, 'El mínimo');
        exigirNumero(maximo, 'El máximo');
        if (!Number.isInteger(minimo) || !Number.isInteger(maximo)) {
            throw new TypeError('Los límites deben ser números enteros.');
        }
        if (minimo > maximo) {
            [minimo, maximo] = [maximo, minimo];
        }
        return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    }

    function repetir(texto, veces) {
        if (typeof texto !== 'string') {
            throw new TypeError('El texto que quieres repetir debe ser una cadena.');
        }
        exigirNumero(veces, 'La cantidad de repeticiones');
        if (!Number.isInteger(veces) || veces < 0) {
            throw new RangeError('La cantidad de repeticiones debe ser un entero igual o mayor que cero.');
        }
        if (texto.length * veces > 10000) {
            throw new RangeError('El resultado es demasiado largo; reduce las repeticiones.');
        }
        return texto.repeat(veces);
    }

    function contarPalabras(texto) {
        if (typeof texto !== 'string') {
            throw new TypeError('El valor debe ser texto.');
        }
        const limpio = texto.trim();
        return limpio ? limpio.split(/\s+/).length : 0;
    }

    function invertirTexto(texto) {
        if (typeof texto !== 'string') {
            throw new TypeError('El valor debe ser texto.');
        }
        return Array.from(texto).reverse().join('');
    }

    function esPalindromo(texto) {
        if (typeof texto !== 'string') {
            throw new TypeError('El valor debe ser texto.');
        }
        const limpio = texto
            .normalize('NFD')
            .replace(/\p{Diacritic}/gu, '')
            .toLocaleLowerCase('es')
            .replace(/[^\p{L}\p{N}]/gu, '');
        return limpio.length > 0 && limpio === Array.from(limpio).reverse().join('');
    }

    function convertirListaANumeros(numeros) {
        if (!Array.isArray(numeros) || numeros.length === 0 || !numeros.every(validarNumero)) {
            throw new TypeError('Ingresa una lista con al menos un número válido.');
        }
        return numeros;
    }

    function calcularPromedio(numeros) {
        const valores = convertirListaANumeros(numeros);
        return valores.reduce((total, valor) => total + valor, 0) / valores.length;
    }

    function valorMaximo(numeros) {
        return convertirListaANumeros(numeros).reduce((maximo, valor) => Math.max(maximo, valor));
    }

    function valorMinimo(numeros) {
        return convertirListaANumeros(numeros).reduce((minimo, valor) => Math.min(minimo, valor));
    }

    function esVocal(caracter) {
        if (typeof caracter !== 'string' || Array.from(caracter).length !== 1) {
            throw new TypeError('Escribe un solo carácter.');
        }
        const vocal = caracter.normalize('NFD').replace(/\p{Diacritic}/gu, '');
        return /^[aeiou]$/i.test(vocal);
    }

    function obtenerIniciales(nombreCompleto) {
        if (typeof nombreCompleto !== 'string' || nombreCompleto.trim() === '') {
            throw new TypeError('Escribe un nombre para obtener sus iniciales.');
        }
        return nombreCompleto
            .trim()
            .split(/\s+/)
            .map((parte) => Array.from(parte)[0].toLocaleUpperCase('es'))
            .join('');
    }

    function formatFecha(fecha = new Date()) {
        const valor = fecha instanceof Date ? fecha : new Date(fecha);
        if (Number.isNaN(valor.getTime())) {
            throw new RangeError('La fecha ingresada no es válida.');
        }
        return new Intl.DateTimeFormat('es-ES', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }).format(valor);
    }

    const funciones = {
        validarNumero,
        saludar,
        despedirse,
        sumar,
        restar,
        multiplicar,
        dividir,
        potencia,
        factorial,
        esPrimo,
        celsiusAFahrenheit,
        fahrenheitACelsius,
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

    const hoy = new Date();
    const fechaLocal = new Date(hoy.getTime() - hoy.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

    const campos = {
        validarNumero: [{ nombre: 'valor', etiqueta: 'Número a validar', tipo: 'number', valor: '42' }],
        saludar: [{ nombre: 'nombre', etiqueta: 'Nombre', tipo: 'text', valor: 'Ana' }],
        despedirse: [{ nombre: 'nombre', etiqueta: 'Nombre', tipo: 'text', valor: 'Ana' }],
        sumar: [
            { nombre: 'a', etiqueta: 'Primer número', tipo: 'number', valor: '12' },
            { nombre: 'b', etiqueta: 'Segundo número', tipo: 'number', valor: '8' }
        ],
        restar: [
            { nombre: 'a', etiqueta: 'Primer número', tipo: 'number', valor: '12' },
            { nombre: 'b', etiqueta: 'Segundo número', tipo: 'number', valor: '8' }
        ],
        multiplicar: [
            { nombre: 'a', etiqueta: 'Primer número', tipo: 'number', valor: '6' },
            { nombre: 'b', etiqueta: 'Segundo número', tipo: 'number', valor: '7' }
        ],
        dividir: [
            { nombre: 'a', etiqueta: 'Dividendo', tipo: 'number', valor: '20' },
            { nombre: 'b', etiqueta: 'Divisor', tipo: 'number', valor: '4' }
        ],
        potencia: [
            { nombre: 'base', etiqueta: 'Base', tipo: 'number', valor: '2' },
            { nombre: 'exponente', etiqueta: 'Exponente', tipo: 'number', valor: '8' }
        ],
        factorial: [{ nombre: 'numero', etiqueta: 'Número entero (0 a 170)', tipo: 'number', valor: '5', step: '1' }],
        esPrimo: [{ nombre: 'numero', etiqueta: 'Número entero (máximo 1 000 000 000)', tipo: 'number', valor: '17', step: '1', max: '1000000000' }],
        celsiusAFahrenheit: [{ nombre: 'celsius', etiqueta: 'Temperatura en °C', tipo: 'number', valor: '25' }],
        fahrenheitACelsius: [{ nombre: 'fahrenheit', etiqueta: 'Temperatura en °F', tipo: 'number', valor: '77' }],
        miNombre: [{ nombre: 'nombre', etiqueta: 'Nombre completo', tipo: 'text', valor: 'Ana López' }],
        esMayor: [{ nombre: 'edad', etiqueta: 'Edad en años', tipo: 'number', valor: '20', min: '0' }],
        doble: [{ nombre: 'numero', etiqueta: 'Número', tipo: 'number', valor: '12' }],
        esPar: [{ nombre: 'numero', etiqueta: 'Número entero', tipo: 'number', valor: '8', step: '1' }],
        contarLetras: [{ nombre: 'texto', etiqueta: 'Texto', tipo: 'text', valor: 'JavaScript' }],
        mayusculas: [{ nombre: 'texto', etiqueta: 'Texto', tipo: 'text', valor: 'Hola, mundo' }],
        minusculas: [{ nombre: 'texto', etiqueta: 'Texto', tipo: 'text', valor: 'HOLA, MUNDO' }],
        aleatorio: [
            { nombre: 'minimo', etiqueta: 'Mínimo', tipo: 'number', valor: '1', step: '1' },
            { nombre: 'maximo', etiqueta: 'Máximo', tipo: 'number', valor: '100', step: '1' }
        ],
        repetir: [
            { nombre: 'texto', etiqueta: 'Texto', tipo: 'text', valor: '¡Hola! ' },
            { nombre: 'veces', etiqueta: 'Repeticiones', tipo: 'number', valor: '3', step: '1', min: '0', max: '10000' }
        ],
        contarPalabras: [{ nombre: 'texto', etiqueta: 'Texto', tipo: 'text', valor: 'Aprender JavaScript es divertido' }],
        invertirTexto: [{ nombre: 'texto', etiqueta: 'Texto', tipo: 'text', valor: 'JavaScript' }],
        esPalindromo: [{ nombre: 'texto', etiqueta: 'Frase o palabra', tipo: 'text', valor: 'Anita lava la tina' }],
        calcularPromedio: [{ nombre: 'numeros', etiqueta: 'Lista de números', tipo: 'list', valor: '8, 9, 10, 7' }],
        valorMaximo: [{ nombre: 'numeros', etiqueta: 'Lista de números', tipo: 'list', valor: '3, 9, 1, 12, 6' }],
        valorMinimo: [{ nombre: 'numeros', etiqueta: 'Lista de números', tipo: 'list', valor: '3, 9, 1, 12, 6' }],
        esVocal: [{ nombre: 'caracter', etiqueta: 'Un carácter', tipo: 'text', valor: 'a', maxLength: '2' }],
        obtenerIniciales: [{ nombre: 'nombreCompleto', etiqueta: 'Nombre completo', tipo: 'text', valor: 'Ana María López' }],
        formatFecha: [{ nombre: 'fecha', etiqueta: 'Fecha', tipo: 'date', valor: fechaLocal }]
    };

    const etiquetas = {
        validarNumero: 'Validar número',
        saludar: 'Saludar',
        despedirse: 'Despedirse',
        sumar: 'Sumar',
        restar: 'Restar',
        multiplicar: 'Multiplicar',
        dividir: 'Dividir',
        potencia: 'Potencia',
        factorial: 'Factorial',
        esPrimo: 'Comprobar número primo',
        celsiusAFahrenheit: 'Convertir °C a °F',
        fahrenheitACelsius: 'Convertir °F a °C',
        miNombre: 'Presentar nombre',
        esMayor: 'Comprobar mayoría de edad',
        doble: 'Calcular el doble',
        esPar: 'Comprobar si es par',
        contarLetras: 'Contar caracteres',
        mayusculas: 'Convertir a mayúsculas',
        minusculas: 'Convertir a minúsculas',
        aleatorio: 'Generar número aleatorio',
        repetir: 'Repetir texto',
        contarPalabras: 'Contar palabras',
        invertirTexto: 'Invertir texto',
        esPalindromo: 'Comprobar palíndromo',
        calcularPromedio: 'Calcular promedio',
        valorMaximo: 'Encontrar valor máximo',
        valorMinimo: 'Encontrar valor mínimo',
        esVocal: 'Comprobar si es vocal',
        obtenerIniciales: 'Obtener iniciales',
        formatFecha: 'Formatear fecha'
    };

    function crearCampo(definicion, indice) {
        const contenedor = document.createElement('div');
        contenedor.className = 'field';

        const id = `argument-${indice}`;
        const etiqueta = document.createElement('label');
        etiqueta.htmlFor = id;
        etiqueta.textContent = definicion.etiqueta;

        const input = document.createElement('input');
        input.id = id;
        input.name = definicion.nombre;
        input.type = definicion.tipo === 'list' ? 'text' : definicion.tipo;
        input.value = definicion.valor;
        input.required = true;
        input.autocomplete = 'off';
        if (definicion.tipo === 'number') {
            input.step = definicion.step || 'any';
        }
        ['min', 'max', 'maxLength'].forEach((atributo) => {
            if (definicion[atributo]) {
                input[atributo === 'maxLength' ? 'maxLength' : atributo] = definicion[atributo];
            }
        });

        contenedor.append(etiqueta, input);
        return contenedor;
    }

    function renderizarCampos() {
        const seleccion = document.getElementById('function-select');
        const contenedor = document.getElementById('arguments');
        if (!seleccion || !contenedor) {
            return;
        }

        contenedor.replaceChildren(...campos[seleccion.value].map(crearCampo));
        const error = document.getElementById('form-error');
        if (error) {
            error.hidden = true;
            error.textContent = '';
        }
    }

    function leerArgumentos(funcion) {
        const definiciones = campos[funcion];
        return definiciones.map((definicion) => {
            const input = document.querySelector(`[name="${definicion.nombre}"]`);
            const valor = input.value.trim();
            if (!valor) {
                throw new TypeError(`Completa el campo "${definicion.etiqueta}".`);
            }

            if (definicion.tipo === 'number') {
                const numero = Number(valor);
                if (!Number.isFinite(numero)) {
                    throw new TypeError(`"${definicion.etiqueta}" debe ser un número válido.`);
                }
                return numero;
            }

            if (definicion.tipo === 'list') {
                const elementos = valor.split(',').map((elemento) => elemento.trim());
                if (elementos.some((elemento) => elemento === '')) {
                    throw new TypeError('Revisa la lista: cada elemento debe ser un número y separarse con comas.');
                }
                const numeros = elementos.map(Number);
                if (!numeros.every(Number.isFinite)) {
                    throw new TypeError('La lista solo puede contener números válidos separados por comas.');
                }
                return numeros;
            }

            if (definicion.tipo === 'date') {
                const [anio, mes, dia] = valor.split('-').map(Number);
                const fecha = new Date(anio, mes - 1, dia, 12);
                if (
                    fecha.getFullYear() !== anio ||
                    fecha.getMonth() !== mes - 1 ||
                    fecha.getDate() !== dia
                ) {
                    throw new RangeError('Selecciona una fecha válida.');
                }
                return fecha;
            }

            return valor;
        });
    }

    function mostrarValor(valor) {
        if (typeof valor === 'boolean') {
            return valor ? 'Sí' : 'No';
        }
        if (typeof valor === 'number') {
            return new Intl.NumberFormat('es-ES', { maximumFractionDigits: 8 }).format(valor);
        }
        return String(valor);
    }

    function agregarAlHistorial(nombre, valor) {
        const historial = document.getElementById('history');
        const item = document.createElement('li');
        const nombreElemento = document.createElement('span');
        const valorElemento = document.createElement('span');
        item.className = 'history-entry';
        nombreElemento.className = 'history-entry-name';
        valorElemento.className = 'history-entry-value';
        nombreElemento.textContent = nombre;
        valorElemento.textContent = valor;
        item.append(nombreElemento, valorElemento);

        const vacio = historial.querySelector('.history-empty');
        if (vacio) {
            vacio.remove();
        }
        historial.prepend(item);
        while (historial.children.length > 8) {
            historial.lastElementChild.remove();
        }
        document.getElementById('clear-history').disabled = false;
    }

    function ejecutar(evento) {
        evento.preventDefault();
        const seleccion = document.getElementById('function-select');
        const nombre = seleccion.value;
        const salida = document.getElementById('result');
        const estado = document.getElementById('result-status');
        const funcionMostrada = document.getElementById('result-function');
        const error = document.getElementById('form-error');
        error.hidden = true;
        salida.classList.remove('is-error');
        estado.classList.remove('is-error');

        try {
            const argumentos = leerArgumentos(nombre);
            const resultado = funciones[nombre](...argumentos);
            const valor = mostrarValor(resultado);
            salida.textContent = valor || '(texto vacío)';
            funcionMostrada.textContent = etiquetas[nombre];
            estado.textContent = '● Ejecutado correctamente';
            agregarAlHistorial(etiquetas[nombre], valor || '(texto vacío)');
        } catch (errorFuncion) {
            const mensaje = errorFuncion instanceof Error ? errorFuncion.message : 'No se pudo ejecutar la función.';
            salida.textContent = mensaje;
            salida.classList.add('is-error');
            funcionMostrada.textContent = etiquetas[nombre];
            estado.textContent = '● Revisa los datos';
            estado.classList.add('is-error');
            error.textContent = mensaje;
            error.hidden = false;
        }
    }

    function limpiarHistorial() {
        const historial = document.getElementById('history');
        historial.replaceChildren();
        const vacio = document.createElement('li');
        vacio.className = 'history-empty';
        vacio.textContent = 'Todavía no has ejecutado ninguna función.';
        historial.append(vacio);
        document.getElementById('clear-history').disabled = true;
    }

    if (typeof window !== 'undefined') {
        window.funciones = funciones;
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = funciones;
    }

    if (typeof document !== 'undefined') {
        const formulario = document.getElementById('playground-form');
        const seleccion = document.getElementById('function-select');
        const botonLimpiar = document.getElementById('clear-history');
        if (formulario && seleccion && botonLimpiar) {
            seleccion.addEventListener('change', renderizarCampos);
            formulario.addEventListener('submit', ejecutar);
            botonLimpiar.addEventListener('click', limpiarHistorial);
            renderizarCampos();
        }
    }
})();
