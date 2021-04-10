# Installation

npm install

[bot setup guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html)

## Running it

node .

## Adding Commands

Add file in `/commands/<category>/<command_name.js>` [example](commands/fun/hello.js)

### Command Options

- name: unique string (e.g. !**kick**)
- execute: command handler function (message, args)
- aliases: string[] (alternative names)
- description: string (user friendly explanation)
- args: bool (does the command have argments?)
- cooldown: int (seconds, per user, per alias; **Default: 3**)
- guildOnly: bool (true => command only works in server channels (not DMs))
- permissions: [discord permissions](https://discordjs.guide/command-handling/adding-features.html#command-permissions)

## Adding Events

Add file in `/events/client/<event_name.js>` [example](events/client/hello.js)

[Client events documentation](https://discord.js.org/#/docs/main/stable/class/Client).

### Event Options

- name: must match the desired event name in [Client.Events](https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelCreate).
- once: bool (true => only runs once)
- execute: event handler function. The client itself will be passed to the event handler as the last parameter.
