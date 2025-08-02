import owners from './owners.js';

export default async function ownerElementBuilder() {
    const ownerList = document.getElementById('ownerList');
    owners.forEach(async owner => {
        const imgUrl = await owner.getPlayerHead();

        const ownerContainer = document.createElement('div');
        ownerContainer.className = 'owner';

        const img = document.createElement('img');
        img.className = 'owner-img';
        img.src = imgUrl;

        const descContainer = document.createElement('div');
        descContainer.className = 'owner-desc';

        const name = document.createElement('p');
        name.className = 'owner-name';
        name.textContent = owner.name;

        const mcUser = document.createElement('p');
        mcUser.className = 'owner-username';
        mcUser.textContent = `MC ign: ${owner.mcUsername}`;

        const disc = document.createElement('p');
        disc.className = 'owner-username';
        disc.textContent = `Discord: ${owner.discUsername}`;

        descContainer.append(name, mcUser, disc);
        ownerContainer.append(img, descContainer);

        ownerList.appendChild(ownerContainer);
    });
}
