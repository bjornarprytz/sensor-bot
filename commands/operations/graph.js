module.exports = {
	name: 'graph',
	description: '**TODO** Display a graph of sensor data',
	guildOnly: true,
	channels: ['operations'],
	args: true,
	usage: 'hum|ec|ph|all',
	execute(message, args) {
		message.channel.send(`${this.description}. ${args}`);
	},
};