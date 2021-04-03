module.exports = {
	name: 'suggest',
	description: 'Suggest features for the bot!',
	args: true,
	usage: '<suggestion>',
	execute(message, args) {
		message.channel.send('World!');
	},
};