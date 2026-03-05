let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;
let ST = prix * quantite;
console.log("Sous-total : " + ST + " MAD");
let red = (codePromo !== null && estMembre) ? (ST * reductionPourcentage / 100) : 0;
console.log("Réduction : " + red + " MAD");
let total = ST - red;
console.log("Total : " + total + " MAD");
let pA = soldeCompte >= total;
console.log(pA ? "Paiement accepté" : "Solde insuffisant");
let nS;
if (pA) {
    nS = soldeCompte - total;
    console.log("Nouveau solde : " + nS + " MAD");
}
console.log("Produit   : " + nomProduit);
console.log("Quantité  : " + quantite);
console.log("Prix unit.: " + prix + " MAD");
console.log("Sous-total: " + ST + " MAD");
console.log("Réduction : " + red + " MAD");
console.log("Total     : " + total + " MAD");
console.log("Statut    : " + (pA ? "Paiement accepté" : "Solde insuffisant"));