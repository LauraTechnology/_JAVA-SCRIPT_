// cia yra ne komanda, o tekstas, kuri programutojas pasirase sau. 
// - single line komentaras (viena eilute) 
var a;
var b;
var c; // var - komanda Java Scriptui. Fiksuotas terminas, variable-kintamasis. Deklaruojam kintamaji

//kaip galima vadinti kintamuosiuos?

/* siuo atveju vidurkis yra kintamasis


KINTAMIESIEMS galima:
naudoti bet kurias raides - didziasias ir mazasias (ir simbolius)
skaicius
_$ - simbolius

KINTAMIEJI negali prasideti skaiciumi
           negali buti tarpu

iprasta naudoti 'camel-case'

*/

//Java Script yra Case sensitive, t.y. pvz.: var LabasPasauli ir var labaspasauli
// Java Scriptui t.y. 2 skirtingi kintamieji.

var LabasPasauli;
var labaspasauli;

var bendrasasakitossuma;
var bendra_saskaitos_suma; /* underscore'ais atskirti zodziai - snake case */
var bendraSaskaitosSuma /* camel case (- didziosios raides kaip kupra */
var BENDRASASKAITOSSUMA /* galima rasytu ir sitaip */
var BENDRA_SASKAITOS_SUMA /* galima atskirti ir taip */


a = 2;
b = 7;
c = 9;
// komentaras po
// viena
// eilute 

var suma;

/* cia prasideda komentaras
cia tesiasi tas pats komentaras

cia jis baigiasi*/

suma = a /* cia kintamasis a */ + b /* cia b */+ c /* ir dar pabaigoj c*/ ;

var vidurkis;

vidurkis = suma / 3;

console.log(vidurkis);


