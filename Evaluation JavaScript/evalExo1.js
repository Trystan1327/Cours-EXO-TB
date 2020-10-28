
//exo1 1er exemple

/*var nbr= nb_aleatoire(1,99);

document.getElementById('button1').onclick = function verif() 
{
    var value = parseInt(document.getElementById("textBox1").value);
    if(value<20)
    {
        document.getElementById("label1").innerHTML="Vous avez moins de 20 ans" ;
    }
    else if(value>=20 & value<=40)
    {
        document.getElementById("label1").innerHTML=" Vous étes chez les Moyens";
    }
    else if (value>40 & value <= 99)
    {
        document.getElementById("label1").innerHTML="Vieux";
    }
    else if (value=+100)
    {
        return false;
    }
    
}   

function nb_aleatoire(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}*/

var cpt = 0;
    var cpt1= 0;
    var cpt2 = 0;
    function age()
{
    do{
        var valeur= parseInt(prompt("Entrez votre âge"));
    
if (valeur<20)
    {
     cpt++;
    } 
  
    else if(valeur >=20 & valeur <= 40)
        {
            cpt1++;
        }

        else if(valeur>40)
            {
                cpt2++;
            }
        } while(valeur<100)

                    alert("jeunes"+ cpt+ "moyen"+cpt1+"vieux"+cpt2);
}
age()






