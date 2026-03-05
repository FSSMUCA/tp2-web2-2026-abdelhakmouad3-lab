const paires = [
    [0,""],
    [0,"0"],
    [0,false],
    ["",false],
    [null, undefined],
    [null, false],
    [NaN,NaN],
    [1,"1"],
    ["\t\n", 0],
];
let compteur = 0;
for(let i=0;i<paires.length;i++){
    const [a,b] = paires[i];
    const rSimple = (a == b);
    const rStrict = (a === b);
    console.log(a + " == " + b + " -> " + rSimple + "    |   " + a + " === " + b + " -> " + rStrict);
    if (rSimple !== rStrict) {
        compteur++;
    }
}