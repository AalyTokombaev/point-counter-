module.exports = {
    "name" : "args",
    "description" : "testing the args command",
    execute(message, args) {
        message.channel.send("the first argumet is: " +  args[0]);
    }
}