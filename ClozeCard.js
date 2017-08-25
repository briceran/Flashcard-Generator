module.exports = ClozeCard;

function ClozeCard(text,cloze){
	if(this instanceof ClozeCard) {
		this.cloze = cloze;
		this.fullText = text;
		var index = text.search(cloze);
		if (index<0){console.log("Oops, '"+cloze+"' does not appear in :"+text);}
		this.partial =text.replace(cloze,"...");
	} else {
	return new ClozeCard(text,cloze);
	}
}
