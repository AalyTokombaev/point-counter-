module.exports = {
    "name" : "args",
    "description" : "testing the args command",
    execute(message, args) {
        message.channel.send("the first argumet is: " +  args[0]);
        username = args[0].slice(3, -1);
        result = message.client.users.fetch(username);
        result.then(res => {
            message.channel.send(res.avatarURL());
        })
    }
}
