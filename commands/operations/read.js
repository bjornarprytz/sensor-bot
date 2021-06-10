const { controllerIp } = require('../../config.json');
const needle = require('needle');

module.exports = {
	name: 'read',
	description: '**TODO** Read sensor data.',
	guildOnly: true,
	channels: ['operations'],
	args: true,
	usage: 'hum|ec|ph|all',
	execute(message, args) {
		const sensorToRead = args[0];

		needle.get(`${controllerIp}/${sensorToRead}`, function(error, response) {
			if (!error && response.statusCode === 200) {
				message.channel.send(`${sensorToRead}: ${response.body}`);
			} else {
				message.channel.send(`Error:${error}`);
				console.error(error);
			}
		});
	},
};