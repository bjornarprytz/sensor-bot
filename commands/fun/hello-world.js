module.exports = {
	name: 'hello',
	description: 'Hello World!',
	execute(message, args) {
		message.channel.send('World!');
	},
};