
document.addEventListener("DOMContentLoaded", function () {

    const envelope = document.getElementById("envelope");
    const openButton = document.getElementById("openButton");
    const opening = document.getElementById("opening");
    const invitation = document.getElementById("invitation");

    // OPEN ENVELOPE
    openButton.addEventListener("click", function () {

        // Prevent multiple clicks
        openButton.disabled = true;

        // Start envelope animation
        envelope.classList.add("open");

        openButton.textContent = "OPENING INVITATION...";

        // Move to invitation after animation
        setTimeout(function () {

            opening.style.display = "none";

            invitation.classList.add("show");

            invitation.style.display = "flex";

            window.scrollTo(0, 0);

        }, 1000);

    });


    

});
