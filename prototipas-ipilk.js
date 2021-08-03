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

--------------------------

function Termosas(spalva, turis) {
    Puodukas.call(this, spalva, turis);
    this.temperatura = 20;
    }

    function Termosas(spalva, turis) {
        Puodukas.call(this, spalva, turis);
        this.temperatura = 20;
        }
        Termosas.prototype = Object.create(Puodukas.prototype);
        Termosas.prototype.constructor = Termosas;
        Termosas.prototype.super = Puodukas.prototype;
        Termosas.prototype.pasildyk = function(kiek) {
        this.temperatura += kiek;
        if (this.temperatura > 80) {
        this.temperatura = 80;
        }
        }
        Termosas.prototype.ipilk = function(kiek) {
        this.super.ipilk.call(this, kiek);
        this.temperatura -= 5;
        };
        let t1 = new Termosas("zalias", 1000);
        console.log(t1);
        t1.ipilk(100);

        /*
sukurti klase Zmogus su savybem
vardas
pavarde
gimimoMetai
amzius (get)
pilnas vardas (get/set)
funksionalumas
labas() -> atspausdinti Labas Vardas Pavadre
sukurti klase Studentas paveldeta nuo zmogaus
mokykla
kursas
labas() -> atspausdinti Labas Vardas Pavadre, mokausi Mokykla
peritiIKitaKursa(balai) -> balai gali buti (1..100) jei balai < 35 i kita kursa nepereina
sukurti ir su sena ir su nauja sintakse
*/
