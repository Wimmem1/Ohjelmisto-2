// Etsitään HTML-sivulta painike sen id-tunnisteen perusteella

const nappi = document.getElementById("minunNappi");

// Lisätään napille kuuntelija, joka odottaa klikkausta
nappi.addEventListener("click", function() {
    alert("Hienoa! Koodi toimii omasta tiedostostaan.")
});