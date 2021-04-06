module.exports = {
	name: 'hello',
	description: 'Hello World!',
	guildOnly: true,
	args: false,
	aliases: ['yello', 'yo'],
	execute(message) {
		message.channel.send('World!');
	},
};