var nbr= nb_aleatoire(1,99);
var cpt= 0;
var cpt1=0;
var cpt2=0;

document.getElementById('button1').onclick = function verif() 
{
    var value = parseInt(document.getElementById("textBox1").value);
    if(value<20)
    {
        cpt++;
        document.getElementById("label1").innerHTML="Vous êtes un jeunot" ;
        document.getElementById("moins20").innerHTML="Moins de 20 : " + cpt;
        
    }
     if(value>=20 & value <= 40)
    {
        cpt1++;
        document.getElementById("label1").innerHTML="Vous êtes au Moyen age";
        document.getElementById("entre2040").innerHTML="Moins de 20 : " + cpt1;
    }
    if ( value >40 & value < 100)
    {
        cpt2++;
        document.getElementById("label1").innerHTML="Vous êtes mûre";
        document.getElementById("plus40").innerHTML="Moins de 20 : " + cpt2;
    }
    if(value>= 100)
    {
        cpt2++;
        document.getElementById("plus40").innerHTML="Moins de 20 : " + cpt2;
        alert("Vous êtes sortie du programme")
    }
    
}   

function nb_aleatoire(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
