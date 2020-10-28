

 var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var saisie = window.prompt("Veuillez choisir un prénom ")
if(tab.includes(saisie)){
    
    tab.splice(tab.indexOf(saisie),1);

	tab.push(",");
	document.write(tab)
}
else{
    alert(" erreur : "+ tab)

}


