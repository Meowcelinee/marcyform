import ownerElementBuilder from './owners/ownerElementBuilder.js';
import submitRequest from './request.js';

const form = document.querySelector('form');
const status = document.getElementById('submitStatus');
const subStatus = document.getElementById('submitStatusSubtext');
const submit = document.getElementById('submit');

ownerElementBuilder();

form.addEventListener('submit', async event => {
    event.preventDefault();
    submit.style.display = 'none';
    status.textContent = 'sending...';

    const data = Object.fromEntries(new FormData(event.currentTarget));
    const req = await submitRequest(data);

    if (!req) {
        status.classList.add('failed');
        status.textContent = 'failed to send request :(';
        subStatus.textContent =
            'internal error, please contact Marceline about this.';

        return;
    }

    status.classList.add('success');
    status.textContent = 'submitted :)';
    subStatus.textContent =
        "if you don't hear from either marcy within 24 hours, feel free to reach out yourself";
});
