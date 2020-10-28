function checkForm(f){
    
    var bool = true;
    
    
    // Nom !! 
    var filtre = new RegExp(/^[A-Za-z]+$/);
    
    var test = filtre.test(document.getElementById("name").value);
    
    if(!test)
    {
        
        document.getElementById("error").innerHTML="Votre nom n'est pas valide";
        
        bool = false;
        
    }


    // Prénom !! 
    filtre = new RegExp(/^[A-Za-z]+$/);
    test = filtre.test(document.getElementById("firstname").value);
    if(!test)
    {
        document.getElementById("error1").innerHTML="Votre prénom n'est pas valide";
        
        bool = false;
    }


    // Date de naissance !! 
    filtre = new RegExp (/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/);
     test = filtre.test(document.getElementById("datebirth").value);
    if(!test)
    {
        document.getElementById("error2").innerHTML="Date de naissance non valide";
        bool = false;
    }


    // Code Postale !!
    filtre = new RegExp(/^[0-9]{5}$/);
    test = filtre.test(document.getElementById("postal1").value);
    
    if(!test)
    {
        document.getElementById("error3").innerHTML="Code Postal non valide";
        bool = false;
    }


    // Adresse !!
    filtre = new RegExp(/^([0-9a-z'àâéèêôùûçÀÂÉÈÔÙÛÇ\s-,-']{1,50})$/);
    test = filtre.test(document.getElementById("inputAddress").value);
    if(!test)
    {
        document.getElementById("error4").innerHTML="Adresse non valide";
        bool = false;
    }


    // Ville !!
    filtre = new RegExp(/^[A-Za-z]+$/);
    test = filtre.test(document.getElementById("lieu").value);
   
    if(!test)
    {
        document.getElementById("error5").innerHTML="Ville non valide";
        bool = false;
    }
   


    // Email !!
    filtre = new RegExp(/^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/);
    test = filtre.test(document.getElementById("mail").value);
    if(!test)
    {
        document.getElementById("error6").innerHTML="mail non valide";
        bool = false;
    }

    
    return bool;
    
}