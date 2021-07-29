function trikampioPlotas(a, b, c) {
    if (
    a + b <= c ||
    b + c <= a ||
    c + a <= b
    ) {
    console.log("ne trikampis");
    return -1;
    }
    let p = (a + b + c) / 2;
    return (p * (p - a) * (p - b) * (p - c)) ** (1/2);
    }
    console.log(trikampioPlotas(2, 4, 5));
    console.log(trikampioPlotas(654, 15, 666));
    console.log(trikampioPlotas(65, 48, 11));

    function div(a, b) {
        return a/b;
        }
        function calc(veiksmas, a, b) {
        function sum (sk1, sk2) {
        return sk1 + sk2;
        }
        if (veiksmas === "suma") {
        return sum(a, b);
        } else if (veiksmas === "atimtis") {
        return sub (a, b);
        } else if (veiksmas === "dalyba") {
        return div (a, b);
        } else {
        console.log("nezinomas veiksmas");
        }
        function sub (b, c) {
        return b - c;
        }
        }
        console.log(calc("suma", 3, 4));
        console.log(calc("atimtis", 15, 7));
        console.log(calc("daugyba", 15, 7));
        console.log(calc("dalyba", 15, 7));