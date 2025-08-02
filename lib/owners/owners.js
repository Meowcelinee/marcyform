class Owner {
    constructor(name, mcUsername, discUsername) {
        this.name = name;
        this.mcUsername = mcUsername;
        this.discUsername = discUsername;
    }

    getPlayerHead() {
        return `https://vzge.me/face/256/${this.mcUsername}?no=ears`;
    }
}

const owners = [
    new Owner('Marceline', 'Meowcelinee', 'meowcelinee.'),
    new Owner('Marcy/Lavender', 'ItsMarbles', 'itsmarbles_'),
];

export default owners;
