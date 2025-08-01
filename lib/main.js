const form = document.querySelector('form');

form.onsubmit = ev => {
    ev.preventDefault();
    const data = Object.fromEntries(new FormData(ev.currentTarget));
    document.body.innerHTML = 'submitted :3';
    Object.keys(data).map(entry => {
        if (data[entry])
            document.body.innerHTML += `<p>${entry}: ${data[entry]}</p>`;
    });
};
