// toch jQuery voor de compatibiliteit

// document ready
$(function() {
	// fire event als een radio button verandert
	$("section.knoppen > input").change(function(){
    	keuzeGemaakt($(this));
	});
});

// de functie die wordt aangeroepen als een radiobutton wordt aangeroepen
function keuzeGemaakt(radiobutton) {
    // zoek het dier dat bij de radiobutton hoort
    var hetDier = radiobutton.closest("li"); //jquery
    console.log(hetDier);
    // bepaal of op ja of op nee geklikt is
    var keuze = radiobutton.val(); //jquery

    // check of het dier niet al ja of nee is om dubbelklikken tijdens animatie te voorkomen
    if (!hetDier.hasClass("ja") && !hetDier.hasClass("nee") ) { //jquery
        // voeg class ja of nee toe aan het dier om de afbeelding-animatie te triggeren
        hetDier.addClass(keuze); //jquery
		
		// na de animatie het hele diet hiden zodat de volgende tevoorschijn komt
		// de time-out moet evenlang zijn als de duur van de transitie
		setTimeout(function(){
        	hetDier.hide();
		}, 500);

        // check of het dier het eerste dier is - dan kan het formulier verstuurt worden
        if (hetDier.is(':first-child')) { //jquery
            // eerst een timeout om te wachten tot de animatie klaar is
            setTimeout(function(){
                // dan het formulier versturen
                // wellicht eerst even progress indicator tonen - even bekijken hoe snel het opslaan in de database gaat
                document.deDieren.submit();
            }, 750);
        }
    }
}



