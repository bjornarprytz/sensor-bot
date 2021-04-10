module.exports = {
	name: 'configure-alert',
	description: '**TODO** Configure an alert. No alerts available atm',
	guildOnly: true,
	channels: ['operations'],
	args: true,
	usage: '<alert-args>, !help <alert> for more info.',
	execute(message, args) {
		message.channel.send(`${this.description}. ${args}`);
	},
};