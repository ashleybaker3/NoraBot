require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on("ready", () => {
    console.log("Nora is online!");
})

const commandHandler = require("./commands");

client.on('message', commandHandler);