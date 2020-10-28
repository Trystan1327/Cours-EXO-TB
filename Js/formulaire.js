function checkForm(f)
{
    alert("ok");
    var bool = true;
    var filtre = new RegExp(/^[A-Za-z]+$/);
    var test = filtre.test(document.getElementById("choose").value);
    alert(test);
    if(!test)
    {
        alert('Il manque des caracteres pour la votre société');
        bool = false;
    }
    //filtre = new RegExp(/^[A-Za-z]+$/);
     filtre.test(document.getElementById("contact1").value);
    alert(test);
    if(!test)
    {
        alert('Mettez la personne a contacter avec les bons caracteres');
        bool = false;
    }
    filtre = new RegExp(/^[0-9]{5}$/);
    test = filtre.test(document.getElementById("postal").value);
    alert(test);
    if(!test)
    {
        alert('Entrez le code postale sur 5 chiffres s.v.p');
        bool = false;
    }

    filtre = new RegExp(/^[A-Za-z]+$/);
    test = filtre.test(document.getElementById("lieu").value);
    alert(test);
    if(!test)
    {
        alert('Il manque un caractères au nom de votre ville');
        bool = false;
    }
    filtre = new RegExp(/^[A_Za-z0-9-_.]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/);
    test = filtre.test(document.getElementById("mail").value);
    alert(test);
    if(!test)
    {
        alert('L\'email n\'est pas valide');
        bool = false;
    }


    return bool;
    
}