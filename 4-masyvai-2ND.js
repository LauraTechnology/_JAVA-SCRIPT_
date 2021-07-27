//var skaiciai = [45, 7, -4, -7, 42, 7, 1, 0, 9];
// surusiuoti masyvo elementus didejimo tvarka
// surusiuoti masyvo elementus mazejimo tvarka

var skaiciai = [45, 7, -4, -7, 42, 7, 1, 0, 9];
//console.log(skaiciai);
//skaiciai.sort((s1, s2) => s1 - s2);
//console.log(skaiciai);
//skaiciai.sort((s1, s2) => s2 - s1);
//console.log(skaiciai);


// surusiuoti masyvo elementus didejimo tvarka
var skaiciai = [45, 7, -4, -7, 42, 7, 1, 0, 9];
console.log(skaiciai);
for (let i = 0; i < skaiciai.length - 1; i++) {
for (let j = i + 1; j < skaiciai.length; j++) {
if (skaiciai[i] > skaiciai[j]) {
let tmp = skaiciai[i];
skaiciai[i] = skaiciai[j];
skaiciai[j] = tmp;
}
}
}
console.log(skaiciai);
// surusiuoti masyvo elementus mazejimo tvarka
for (let i = 0; i < skaiciai.length - 1; i++) {
for (let j = i + 1; j < skaiciai.length; j++) {
if (skaiciai[i] < skaiciai[j]) {
let tmp = skaiciai[i];
skaiciai[i] = skaiciai[j];
skaiciai[j] = tmp;
}
}
}
console.log(skaiciai);