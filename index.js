const discord = require("discord.js");
const fs = require('fs')
const {prefix, token} = require("./config.json");


const client = new discord.Client();
client.commands = new discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log(`logged in as ${client.user.username}`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    console.log(message.content)

    const args = message.content.slice(prefix.length).trim().split(" ");
    console.log(args);
    console.log(typeof args);
    const command = args.shift().toLocaleLowerCase();

    if (command === "ping") {
        client.commands.get('ping').execute(message, args);
    }
    if (command === "monkey") {
        client.commands.get('monkey').execute(message, args);
    }
    if (command == "args") {
        client.commands.get("args").execute(message, args);
    }
})



client.login(token);

