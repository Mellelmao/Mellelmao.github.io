function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

const discordLink1 = document.getElementById('discord-link1');
discordLink1.addEventListener('click', function(event) {
    event.preventDefault();
    const username = this.getAttribute('data-clipboard-text');
    copyToClipboard(username);
});
