


/*var str1 = prompt('entrez une liste de mot separé par un point virgule');
var str2 = prompt('entrez un point virgule');
var n = prompt('entrez une position');

function strtok(str1, str2, n) {
    var cpt = 0;
    var mempositionstart = 0;
    var separateur = str2;
    var mot = str1;
    var resultat = "";
    var posiFin = 0;
    for (i = 0; i < mot.length; i++) {
        var lettre = (mot.substr(i, 1));
        if (lettre == separateur) {
            cpt++;
            if (cpt == n) {
                posiFin = i;
                resultat = str1.substr(mempositionstart, (posiFin - mempositionstart));
            } else {
                mempositionstart = i;
            }
        }


    }
    return resultat;

}
document.write(strtok(str1, str2, n));*/

// Tableau exo 1 //
/*var tailleTableau = new Array (parseInt(prompt( " donnez la taille de votre tableau ?")));

for (var i = 0; i< tailleTableau.length ; i ++)
{
valeur=prompt( "Vos saisies" );
tailleTableau[i]=valeur

}
document.write( " Vos saisies sont : " + tailleTableau );*/


var tab= new Array()
var i=-1;
var cpt=0;
var somme=0;
var moyenne=0;
do{

    var valeur=parseInt(prompt("Saisissez une valeur: "))
            if(valeur!=0)
                {
                i++
                cpt=i+1;
                tab[i]=valeur;
                somme+=valeur;
                moyenne=somme/cpt
                }
        }
    while(valeur!=0)
    document.write("Il y a: "+cpt+" valeur"+"<br>"+"La somme est de: "+somme+"<br>"+"La moyenne est de :"+moyenne)

