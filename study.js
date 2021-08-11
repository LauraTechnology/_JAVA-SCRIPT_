//Sukurti 3 kintamuosius su skaiciaus tipo reiksmemis
// Po kiekvieno ju inicijavimo, isvesti i console

const { Console } = require("console");


//neteisingas
/* var a
var b
var c

a = 1;
b = 2;
c = 3;

console.log(var) */ 

var a = 1;
console.log(a);
var b = 6;
console.log(b);
var c = 7;
console.log(c);


//Sukurti 3 kintamuosius su teksto tipo reiksmemis
// Po kiekvieno ju inicijavimo, isvesti i console

var a = 'auksas';
console.log(a)
var v = 'varis';
console.log(v)
var s = 'sidabras';
console.log(s)


//Sukurti 3 saraso (sarasas yra masyvas) tipo kintamuosius su penkiomis skaiciu tipo reiksmemis
// Po kiekvieno ju inicijavimo, isvesti i console

var m = [1, 2, 3, 4, 5];
console.log(m)
var n = [6, 7, 8, 9, 8];
console.log(n)
var o = [3, 4, 5, 6, 7];
console.log(o)


// Susumuoti visus skaiciaus tipo kintamuosius
// rezultatai isvesti i console

var a = 1;
var b = 2;
var c = 3;

suma = a + b + c;

console.log(suma)


// Sujungti visus tkesto tipo kintamuosius taip, jog tarp ju butu sudarytas tarpas
// Rezultatą išvesti į console

var a = 'auksas';
var v = 'varis';
var s = 'sidabras';

suma =  a + ' ' + v + ' ' + s;

console.log(suma)


// Tarpusavyje palyginti skaiciaus tipo kintamuosius:
// kuris didesnis
// kuris mazesnis
// ar jie lygus
// ar jie nelygus
// kuris didesnis arba lygus
// kuris mazesnis arba lygus

var skaicius1 = 1;
var skaicius2 = 2;

if (skaicius1 > skaicius2) {
    console.log(skaicius1 + ' yra didesnis ' + skaicius2);
}
if (skaicius1 < skaicius2) {
    console.log(skaicius1 + ' yra mazesnis ' + skaicius2);
} 
if (skaicius1 == skaicius2) {
    console.log(skaicius1 + ' yra lygus ' + skaicius2);
} 
if (skaicius1 != skaicius2) {
    console.log(skaicius1 + ' yra nelygus ' + skaicius2);
} 
if (skaicius1 >= skaicius2) {
    console.log(skaicius1 + ' yra didesnis arba lygus ' + skaicius2);
} 
if (skaicius1 <= skaicius2) {
    console.log(skaicius1 + ' yra mazesnis arba lygus ' + skaicius2);
}




