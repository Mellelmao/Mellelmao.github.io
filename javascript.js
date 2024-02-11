document.addEventListener("DOMContentLoaded", function() {
    const discordLink1 = document.getElementById('discord-link1');
    discordLink1.addEventListener('click', function(event) {
        event.preventDefault();
        const username = this.getAttribute('data-clipboard-text');
        myFunction(username);
    });
});

function myFunction(username) {
    var tempInput = document.createElement("input");
    tempInput.setAttribute("value", username);
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
