function Termosas(spalva, turis) {
  this.spalva = spalva;
  this.turis = turis;
  this.kiekis = 0;
  this.temperatura = 20;
}

Termosas.prototype = Object.create(Puodukas.prototype);
Termosas.prototype.constructor = Termosas;
let t1 = new Termosas("zalias", 1000);
console.log(t1);
t1.ipilk(100);
console.log(t1);


