$(document).ready(function () {

    //$("#validate").click(imc);

    $("#validate").click(function () {
        imc();
        $(".hide").removeClass("hide");
      //  $("#tableaucaché").removeClass("tableaucaché");
    });

});




function imc() {
    $("#tabimc").children().children().removeClass("tableau");
    
    let taille = $("[id=taille]").val();
    let poid = $("[id=poid]").val();
    //console.log(taille);
   // console.log(poid);
   //const affichage =$("[id=calcul]").val();
   let resultat = Math.round((poid / Math.pow(taille,2)) * 10) / 10;
    
    $("#taille").text(taille);
    $("#poids").text(poid);
    $("#calcul").text(resultat);
    categorief(resultat);
    
}




// comment faire en sorte d'accéder à result tout en fesant en sorte qu'il se mette à jour avec l'évènement ?




function categorief(resultat) {
    let message;
    let valeur = resultat;


    if (valeur<16.5) {

        message = "dénutrition";
        $("#anorexie").addClass("tableau");
    }
    else if (valeur>16.5 && valeur<18.5) {
        message = "maigreur";
        $("#maigre").addClass("tableau");

    }
    else if (valeur>25 && valeur<30) {
        message = "surpoid";
        $("#oups").addClass("tableau");
    }
    else if (valeur>35 && valeur<40) {
        message = "obésité modéré";
        $("#obese1").addClass("tableau");//
    }
    else   {
        message = " obésité sévere";
        $("#obese2").addClass("tableau");
    }
    
    
    $("#categorie").text(message);
}

