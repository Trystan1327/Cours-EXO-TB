/*var element = document.getElementById("button1")  

document.querySelector('#button1').onclick = function() 
{
    alert("Vous avez saisie" + document.getElementById("fname").value);
}   */

 var nbr= nb_aleatoire(1,100);

document.getElementById('button1').onclick = function verif() 
{
    var value = parseInt(document.getElementById("textBox1").value);
    if(value<nbr)
    {
        document.getElementById("label1").innerHTML="plus grand" ;
    }
    else if(value>nbr)
    {
        document.getElementById("label1").innerHTML="plus petit";
    }
    else
    {
        document.getElementById("label1").innerHTML="Gagner";
    }
    
}   

function nb_aleatoire(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;

}



