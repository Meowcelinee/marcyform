class Owner {
    constructor(name, mcUsername, discUsername) {
        this.name = name;
        this.mcUsername = mcUsername;
        this.discUsername = discUsername;
    }

    // used for fetching player heads more efficiently
    async fetchMcUUID() {
        // => string
        try {
            const data = await fetch(
                `https://api.minetools.eu/uuid/${this.mcUsername}`
            );

            const userData = await data.json();

            if (!userData.id)
                throw new Error(`Unknown player (${this.mcUsername}).`);

            return userData.id;
        } catch (e) {
            console.error(
                `Failed to fetch Minecraft UUID for ${this.mcUsername}.`
            );
            throw e;
        }
    }

    async getPlayerHead() {
        // => string
        try {
            const imgUrl = `https://vzge.me/face/256/${await this.fetchMcUUID()}?no=ears`;

            return imgUrl; // string
        } catch (e) {
            console.error(
                `Failed to fetch player head for ${this.mcUsername}.`
            );
            throw e;
        }
    }
}

const owners = [
    new Owner('Marceline', 'Meowcelinee', 'meowcelinee.'),
    new Owner('Marcy/Lavender', 'ItsMarbles', 'itsmarbles_'),
];

export default owners;
