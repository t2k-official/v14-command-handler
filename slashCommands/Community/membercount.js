const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'invite',
	description: "Get the bot's invite link",
	cooldown: 3000,
	type: ApplicationCommandType.ChatInput,
	userPerms: [],
	botPerms: [],
	run: async (client, interaction) => {
		const memberCount = interaction.guild.memberCount
                const mc = new EmbedBuilder()
                .setColor("Random")                 
                .setTitle(`${interaction.guild.name}'s Member count!`)
                .setDescription(`This server has ${memberCount} members!`)
                .setTimestamp()
                interaction.reply({ embeds: [mc] })
        }
}
