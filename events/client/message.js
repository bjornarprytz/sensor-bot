const { prefix } = require('./../../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'message',
	execute(message, client) {
		if (!message.content.startsWith(prefix) || message.author.bot) {
			return;
		}

		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();

		const command = client.commands.get(commandName)
                    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) return;

		if (command.channels && !command.channels.includes(message.channel.name)) {
			return;
		}

		if (command.permissions) {
			const authorPermissions = message.channel.permissionsFor(message.author);
			if(!authorPermissions || authorPermissions.has(command.permissions)) {
				return message.reply('You cannot do this!');
			}
		}

		if (command.guildOnly && message.channel.type === 'dm') {
			return message.reply('I can\'t execute that command inside DMs!');
		}

		if (command.args && !args.length) {
			let reply = `You didn't provide any arguments, ${message.author}!`;

			if (command.usage) {
				reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
			}

			return message.channel.send(reply);
		}

		const { cooldowns } = client;

		if (!cooldowns.has(command.name)) {
			cooldowns.set(command.name, new Discord.Collection());
		}

		const now = Date.now();
		const timestamps = cooldowns.get(command.name);
		const cooldownAmount = (command.cooldown || 3) * 1000;

		if (timestamps.has(message.author.id)) {
			const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;
				return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
			}
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

		try {
			command.execute(message, args);
		}
		catch (error) {
			console.error(error);
			message.reply('there was an error trying to execute that command!');
		}
	},
};