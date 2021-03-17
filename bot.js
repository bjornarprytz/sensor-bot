'use strict';

require('dotenv').config();
const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', onMessage);

client.login(token);


function onMessage(message) {
	if (!message.content.startsWith(prefix)) {
		return;
	}

	const words = message.content.substring(prefix.length).split(' ');

	if (words.length == 0) {
		return;
	}

	const command = words[0];
	const args = words.slice(1);

	switch(command) {
	case 'ping':
		message.reply(args.join(' '));
		break;
	default:
		message.reply(`Unrecognized command: ${command}`);
	}
}