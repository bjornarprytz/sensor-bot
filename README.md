# Installation

npm install

[bot setup guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html)

## Running it

node .

## Adding Commands

Add file in `/commands/<category>/<command_name.js>` [example](commands/fun/hello.js)

### Command Options

name: unique string (e.g. !**kick**)
aliases: string[] (alternative names)
description: string (user friendly explanation)
args: bool (does the command have argments?)
cooldown: int (seconds, per user, per alias; **Default: 3**)
guildOnly: bool (true => command only works in server channels (not DMs))
permissions: [discord permissions](https://discordjs.guide/command-handling/adding-features.html#command-permissions)
