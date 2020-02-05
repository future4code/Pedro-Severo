const dna: string = "ATT GCT GCG CAT TAA CGA CGC GTA";

function convertToRna(dna: string): string {
    const adenina: string = dna.replace(/A/gi, "U");
    const timina: string = adenina.replace(/T/gi, "A");
    const citocina: string = timina.replace(/C/gi, "g");
    const guanina: string = citocina.replace(/G/g, "C");
    const rna = guanina.toUpperCase()

    return rna;
};

console.log(convertToRna(dna));