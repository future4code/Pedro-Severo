const dna = "ATT GCT GCG CAT TAA CGA CGC GTA";
function convertToRna(dna) {
    const adenina = dna.replace(/A/gi, "U");
    const timina = adenina.replace(/T/gi, "A");
    const citocina = timina.replace(/C/gi, "g");
    const guanina = citocina.replace(/G/g, "C");
    const rna = guanina.toUpperCase();
    return rna;
}
;
console.log(convertToRna(dna));
//# sourceMappingURL=ex6.js.map