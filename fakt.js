var sk = 4;
if (sk >= 0) {
var f = 1;
for (var i = 2; i <= sk; i++) {
f = f * i;
}
console.log(f);
} else {
console.log("Negalima paskaiciuoti neigiamo skaiciaus faktorialo");
}