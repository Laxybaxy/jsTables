/*
Sist oppdatert(24/04/2020)
Dette er et library som gjør det lett å lage tabeller i javascript.

EKSEMPEL:
var tabellParent = document.getElementById('tabellParent');
var tabell = new Tabell(tabellParent);
tabell.lagRad(["",{txt:"Fly",style:"b"},{txt:"Bil",style:"b"},{txt:"Båt",style:"b",id:"hello"}]);
tabell.lagRad([{txt:"Jenter",style:"b",colspan:2},{txt:5,style:"normal"},11,12]);
tabell.lagRad([{txt:"Gutter",style:"b"},"100","90","80"],1);
tabell.slettRad(1);
*/
class Tabell{
	constructor(parent,celleData) {
		if(parent == undefined) {
			console.log("definer parent for tabell");
			return false;
		}
		this._tabell = document.createElement("table");
		parent.appendChild(this._tabell);
		if(celleData == undefined)
			return true;
		this.lagRad(celleData);
	}

	lagRad(celleData,){
		this._rad = this._tabell.insertRow();

		for(let data of celleData)
		{
			let type = typeof(data);
			if(!["string","array","boolean","number","function","object"].includes(type))
			{
				console.log(`${type} ikke gyldig`);
				return false;
			}

			this._cell = this._rad.insertCell();
			switch(type){
				case "string":
				case "array":
				case "boolean":
				case "number":
				case "function":
					this._cell.innerHTML = data;
					break;

				case "object":
					if(data.style != undefined)
						this._cell.innerHTML = ((data.txt != undefined) ? `<${data.style}>${data.txt}</${data.style}>` : "");
					else
						this._cell.innerHTML = data.txt || "";
					if(data.colspan != undefined)
						this._cell.colSpan = data.colspan;
					if(data.id != undefined)
						this._cell.id = data.id;
					break;
				default:
					console.log("celleData er ugyldig");
					return false;
			}
		}
	}
	slettRad(rad){
		this._tabell.deleteRow(rad);
	}
	erstattRad(rad,celleData){
		this.slettRad(rad);
		this.lagRad(celleData,rad);
	}
}
