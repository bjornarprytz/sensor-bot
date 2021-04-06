module.exports = {
	name: 'suggest',
	description: 'Suggest features for the bot!',
	args: true,
	usage: '<suggestion>',
	cooldown: 30,
	execute(message) {
		message.channel.send('World!');
	},
};