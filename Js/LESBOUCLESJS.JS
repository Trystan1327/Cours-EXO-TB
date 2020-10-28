
//...Exo 1 les Boucles//

/*var i = 0;
var cpt = 0;
var firstName = " Saisissez le prénom ";
while ( prénom!== "" ) 
{
    var prénom = window.prompt("Saisissez le prénom N° " + (i+1) + "\nou Clic sur Annuler pour arrêter le saisie.") ;
    cpt = i++ ;
    firstName += " " + prénom ;
}
document.write(" Prénoms saisis :" +firstName + " nombre de prénoms : " + cpt );*/

//... Exo 2...//

/*var N = window.prompt("Saisir N");

while (N > 0) 
{
    N--;
    document.write(N + " <br>");
}*/

//... Exo 3...//

var cpt=0;
var saiSir1 = parseInt(window.prompt ("Saisir un Entiers"));
var somme = 0;

while(saiSir1!=0)
{
  cpt++;
  somme+=saiSir1;
  saiSir1 = parseInt(window.prompt ("Saisir un Entiers"));

}
  document.write("Voici la somme : " +somme + " La moyenne est de : " + (somme/cpt));


  //...Exo 4 ...//  

/*var N = window.prompt("Saisir N")
var X = window.prompt("Saisir X")

for (i=1; i<=N; i++)

{
    resultat = X * i;

    document.write( i + "x" + " " +X+" = "+resultat +"<br>");
}*/


//... Exo 5 ... //

/*var mots = prompt(" Saisissez un mot ");
var voYelle = "aeiouy";
var cpt = 0;

for (i=0;i<mots.length;i++)
{
 var chaine2 = (mots.substr(i,1));
 if(voYelle.indexOf(chaine2)!=-1)
 {
     cpt++;
 }
}
document.write (" le nombre de voyelles dans votre mots : " +cpt)*/









