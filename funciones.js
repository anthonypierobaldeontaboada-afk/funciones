// 1. Saludar
function saludar() {
    console.log("Hola, mundo!");
}
saludar();

// 2. Despedirse
function despedirse() {
    console.log("Adiós!");
}
despedirse();

// 3. Sumar
function sumar(a, b) {
    console.log(a + b);
}
sumar(5, 3);

// 4. Restar
function restar(a, b) {
    console.log(a - b);
}
restar(10, 4);

// 5. Multiplicar
function multiplicar(a, b) {
    console.log(a * b);
}
multiplicar(6, 7);

// 6. Dividir
function dividir(a, b) {
    console.log(a / b);
}
dividir(20, 4);

// 7. Mi nombre
function miNombre(nombre) {
    console.log("Me llamo " + nombre);
}
miNombre("Carlos");

// 8. Es mayor de edad
function esMayor(edad) {
    console.log(edad >= 18);
}
esMayor(20);

// 9. Doble de un número
function doble(n) {
    console.log(n * 2);
}
doble(5);

// 10. Es par
function esPar(n) {
    console.log(n % 2 === 0);
}
esPar(7);

// 11. Contar letras
function contarLetras(texto) {
    console.log(texto.length);
}
contarLetras("hola");

// 12. A mayúsculas
function mayusculas(texto) {
    console.log(texto.toUpperCase());
}
mayusculas("hola");

// 13. A minúsculas
function minusculas(texto) {
    console.log(texto.toLowerCase());
}
minusculas("HOLA");

// 14. Número aleatorio
function aleatorio() {
    console.log(Math.floor(Math.random() * 10));
}
aleatorio();

// 15. Repetir texto
function repetir(texto, veces) {
    console.log(texto.repeat(veces));
}
repetir("ja", 3);