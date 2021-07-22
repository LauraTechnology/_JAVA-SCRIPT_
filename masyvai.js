var m = [5, 8, 12];
console.log(m);
console.log(m[1]);
m[2] = 53;
console.log(m);

// sekantis

var m = [5, 8, 12];
var suma = 0;
for (var i = 0; i < m.length; i++) {
suma += m[i];
}
var vidurkis = suma / m.length;
console.log(vidurkis);
