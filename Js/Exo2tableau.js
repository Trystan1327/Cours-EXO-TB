//function ONE !!
var tab = new Array();
var somme = 0;
var moyenne = 0;
   
function GetInteger(message)
{
    var entier = parseInt (prompt(message));
    return entier;
}

// function TWO !!

function InitTab()
{
    var valeur = GetInteger("Entrez un entier");
    tab = new Array(valeur);
    SaisieTab();
}

//function  THREE !!
function SaisieTab()
{
    for(var i=0;i<tab.length;i++)
    {
        var valeurstab = GetInteger("Entrez une valeur");
        tab[i] = valeurstab;
        somme += valeurstab;
    }
    moyenne = somme / tab.length;
}

// function FOUR !!

function AfficheTab()
{
    document.write(" Vont valeurs sont : "+tab + "<br>");

    /*for(var i=0;i<tab.length;i++)
    {
        document.write("Vos valeurs sont " + tab[i] );
    }*/
}

// funcion Five !!

function RechercheTab()
{
    
    var recup = GetInteger("recup valeur");
    if(recup > tab.length)
    {
        alert("Trop grand"); 
        RechercheTab();
        

    }
    else if(recup < 0){
        alert (" Trop petit");
        RechercheTab();
    }
    else
    {
        document.write(" La valeur recup est  : " + tab[recup -1] + "<Br>");
    }
    
}

// function InfoTab

function InfoTab() 
{
    var max = tab[0] ;
    for (i=1;i<tab.length;i++)
    {
        if (tab[i] > max)
        {
            mettre une valeur 
        } 
    }
    document.write( " le max est : " + max + " La Moyenne est : " + moyenne);
}





InitTab();
AfficheTab();
RechercheTab();
InfoTab();
