let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";
let nC = nom.trim();
if (nC === "") nC = "Inconnu";
console.log("nom              : \"" + nC + "\" (corrigé : espaces supprimés)");
let aC = parseInt(age, 10);
if (isNaN(aC) || aC <= 0) {
    console.log("age              : valeur invalide");
} else {
    console.log("age              : " + aC + " (valide)");
}
let eV = (email.indexOf("@") !== -1 && email.indexOf(".", email.indexOf("@")) !== -1);
if (eV) {
    console.log("email            : \"" + email + "\" (valide)");
} else {
    console.log("email            : \"" + email + "\" (invalide : pas de point après @)");
}
let sC = parseInt(scoreJeu, 10);
if (isNaN(sC)) sC = 0;
console.log("scoreJeu         : " + sC + " (extrait depuis \"" + scoreJeu + "\")");
let eAC = (estAdmin === "true");
console.log("estAdmin         : " + eAC + " (attention : Boolean(\"false\") = true, conversion manuelle requise)");
let dCC = derniereConnexion ?? "Jamais connecté";
console.log("derniereConnexion: \"" + dCC + "\" (valeur par défaut via ??)");
let nCC = parseInt(nombreConnexions, 10);
if (nCC === 0) {
    console.log("nombreConnexions : \"Aucune connexion\" (0 après conversion)");
} else {
    console.log("nombreConnexions : " + nCC);
}