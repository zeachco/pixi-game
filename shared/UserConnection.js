class UserConnection {
    constructor({websocketHandler}) {
        this.ws = websocketHandler;
        console.log('user contructor')
        UserConnection
            .ALL
            .push(this);
    }

    render() {
        console.log(this.name)
    }
}

UserConnection.ALL = [];

UserConnection.broadcast = message => {
    UserConnection
        .ALL
        .forEach((user, index) => {

            try {

                user
                    .ws
                    .send(message);
            } catch (e) {
                console.log(e);
                UserConnection
                    .ALL
                    .splice(index, 1)
            }
        });
}
module.exports = UserConnection;