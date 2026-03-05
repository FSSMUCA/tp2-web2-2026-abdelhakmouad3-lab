const t=[0,1,"","0",null,undefined,NaN,false,[],{}]
for (let i=0;i<t.length;i++){
    const v=t[i];
    const label = v === "" ? "(chaine vide)" : String(v);
    if (v) {
        console.log(label +"->truthy");
    }
    else {
        console.log(label +"->falsy");
    }

}