

var resultat;
var port;
var total;



    var prix= prompt("Saissisez un prix en Euros");
    var quantité = prompt("Saisissez une quantité");

    if (prix * quantité > 100 & prix * quantité < 200 )
    {
        resultat = (prix * quantité) *( 5 / 100);
        total = (prix * quantité) - (resultat);
        
    }
    else if(prix * quantité > 200)
    {
        resultat = (prix * quantité) * (10 / 100);
        total = (prix * quantité) - (resultat);
        

    }
    if(total>500)
    {
        total=total
        port=0 
    }
    if(total<500)
    {
        port=total*2/100;
        if(port>6)
        {
            total=total+port

        }else if(port < 6)
        {
            total=total+6
        }
        
        
    }
    document.write("  Votre remise est de : " + resultat + "<br>"  + " Frais de port  : "+port+ "<br>" +"ttc : "+" " + total );
    



