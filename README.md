# v14-command-handler

##Setup
Put the bots token in the config.json file

Put the client id, token and guild id in the .env file(Only add the guild id if it for 1 server only!)

In a terminal do npm install(If it gives you an error copy the packages from the package.json file)

##Running the bot
To start the bot you need to do node .

##Creating commands 
Just copy the first bit of the command about the name and all that up to the line: run: async(client, interaction) {

Then change the name

All slash commands must be in the slashCommand folder and all prefix commands must go into the commands folder(you can create folders inside the folder)
