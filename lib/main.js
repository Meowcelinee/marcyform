import ownerElementBuilder from './owners/ownerElementBuilder.js';
import submitRequest from './request.js';
import materials from './materials.js';

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

const material = document.getElementById('material');
const amount = document.getElementById('amount');
const amountText = document.getElementById('maxAmount');

// display max amount of material
material.onchange = event => {
    if (!event.target.value) {
        amountText.textContent = '(please select a material)';
        amount.value = '';
        return;
    }

    const materialMax = materials[event.target.value].amount;

    amount.max = typeof materialMax !== 'number' ? 1 : materialMax;
    amountText.textContent = materialMax || 'any';

    // force input value to update if higher than max
    if (amount.value > materialMax) amount.value = materialMax;
};

Object.keys(materials).forEach(mat => {
    // dynamically load material options
    const option = document.createElement('option');
    option.value = materials[mat].optionValue;
    option.text = materials[mat].optionValue;

    material.appendChild(option);

    // append each material to the list of available materials
    const list = document.getElementById('item-list');
    const listElem = list.appendChild(document.createElement('li'));
    listElem.textContent = materials[mat].optionValue.toLowerCase();
});
