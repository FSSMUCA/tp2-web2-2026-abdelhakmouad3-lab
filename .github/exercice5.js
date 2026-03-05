let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];
for (let i = 0; i < nombres.length; i++) {
    let v= nombres[i];
    let res = v + " -> ";
    if (Number.isNaN(v)) {
        res += "INVALIDE";
    }
    else if (v === Infinity || v === -Infinity) {
        res += "INFINI";
    }
    else if (1 / v === -Infinity) {  // Détection de -0
        res += "ZERO NEGATIF";
    }
    else if (Number.isInteger(v)) {
        if (v >= Number.MIN_SAFE_INTEGER && v <= Number.MAX_SAFE_INTEGER) {
            res += "ENTIER SUR";
        } else {
            res += "ENTIER HORS LIMITES";
        }
    }
    else {
        res += "DECIMAL";
    }
    console.log(res);
}