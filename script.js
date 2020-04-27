var tabellParent = document.getElementById('tabellParent');
var tabell = new Tabell(tabellParent);
tabell.lagRad(["",{txt:"Fly",style:"b"},{txt:"Bil",style:"b"},{txt:"Båt",style:"b",id:"hello"}]);
tabell.lagRad([{txt:"Jenter",style:"b",colspan:2},{txt:5,style:"normal"},11,12]);
tabell.lagRad([{txt:"Gutter",style:"b"},"100","90","80"],1);
tabell.slettRad(1);