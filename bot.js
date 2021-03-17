'use strict';

require('dotenv').config();
const fs = require('fs');
const { prefix, token, suggestions } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', onMessage);

client.login(token);


function onMessage(message) {
	if (!message.content.startsWith(prefix) || message.author.bot) {
		return;
	}

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	switch(command) {
	case 'ping':
		message.reply(args.join(' '));
		break;
	case 'suggest':
		fs.appendFile(suggestions, `\n${args.join(' ')}`, err => {
			if (err) console.log(err);
		});
		message.reply('your suggestion was noted');
		break;
	default:
		message.reply(`Unrecognized command: ${command}, but I am a work in progress. suggest something with !suggest <suggestion>`);
		break;
	}
}

