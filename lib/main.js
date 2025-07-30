const link = document.getElementById('icon');

console.log(link);

setTimeout(() => {
    link.setAttribute('href', 'http://localhost:1234/assets/icons/sent.png');
    console.log('icon updated (hopefully)');
    console.log(link);
}, 2000);
