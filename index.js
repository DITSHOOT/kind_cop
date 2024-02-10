const Discord  = require("discord.js")
const bot = new Discord.Client({intents: 3276799})
const config = require('./config')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

bot.login(process.env.TOKEN)


app.listen(PORT, () => {
  console.log(`Le bot est en cours de lancement sur le port ${PORT}`);
});


const status = {
    name: "DU BON VIEUX JDG | Tar l'époque ahaha",
    url: "https://www.twitch.tv/joueur_du_grenier",
    type: Discord.ActivityType.Streaming,
};




bot.on('ready', () => {
  const channel = bot.channels.cache.get('1163902591768477776');
  if (!channel) return console.error('Le salon spécifié est introuvable.');
  channel.send('Le bot est maintenant connecté ! <@510818650307952640>');
  console.log(`Connecté en tant que ${bot.user.tag}`);
  bot.user.setActivity(status);
});





bot.on('messageCreate', (message) => {
  if (message.author.bot) return; // Ne répondez pas aux messages des bots
  if (!message.content.startsWith(config.prefix)) return; // Vérifiez s'il commence par le préfixe

  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'say') {
    // Vérifiez si l'utilisateur est un administrateur
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      return message.reply('Seuls les administrateurs sont autorisés à utiliser cette commande.');
    } 

    // Supprime la commande de l'utilisateur
    message.delete();

    // Vérifiez si l'utilisateur est également un administrateur pour utiliser args.join
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      return message.reply('Seuls les administrateurs sont autorisés à utiliser cette partie de la commande.');
    }

    // Récupère le message de l'utilisateur, en excluant le préfixe
    const userMessage = args.join(' ');
    if (!userMessage) {
      return message.channel.send('Veuillez écrire un message.');
    }

    // Envoie le message personnalisé de l'utilisateur
    message.channel.send(userMessage);
  }
});




bot.on('messageCreate', async (message) => {
  if (message.content.startsWith(config.prefix + 'annonce')) {
    message.delete(); // suppression du message direct

    const reminderEmbed = new Discord.EmbedBuilder()
      .setColor('#099ef9')
      .setTitle('<a:rappel:1185911636565954620> Rappels Importants <a:rappel:1185911636565954620>')
      .setDescription(`
      
      Bonjour à tous ! Voici quelques rappels importants à ne pas oublier à faire pendant votre période en entreprise 🚀:
      
      ▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰ Exercices ▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
      ╒═══════════════════════════════════════════════╕
      
      **Compte rendu FlopSecurity :**
      ➾ Ce [TP](https://github.com/fabrice1618/flopsecurity) se focalise sur la compréhension des failles de sécurité telles que les injections SQL et XSS, ainsi que sur la sécurisation des applications web. Vous devez être concis et utiliser un langage technique. Vous devez expliquer les étapes pour installer et configurer le serveur LAMP, ainsi que la différence entre la configuration d'un serveur de développement et un serveur de production. Ensuite, pour les injections SQL et XSS, vous devez expliquer leur nature, les risques qu'elles représentent et proposer au moins une solution technique. Enfin, vous devez aborder les mesures de sécurité à mettre en place pour protéger l'application, faire un résumé des enseignements tirés de ce TP, souligner l'importance de la sécurité dans le développement et l'administration des applications web, et enfin présenter vos perspectives futures pour renforcer la sécurité de l'application. \nUne fois tout ça fait, vous pourrez envoyer à l'adresse suivante que vous avez bien apporté des modifications sur votre git : __fabrice1618@gmail.com__.
      Avec l'autorisation de mon maître, je vous envoi son projet fini afin de vous inspirer.\n **Disponible sur GitHub :** [Projet SLAM](https://github.com/DITSHOOT/report-flopsecurityl)


      ➾ ⚠️ Dernier délai : __19 Février__. ⚠️

      **7speaking :**
      ➾ N'oubliez pas de consacrer au moins 10 heures à [7speaking](https://user.7speaking.com) avant le **26 Février**, date du conseil de classe du 1er semestre.

      **Projet Voltaire :**
      ➾ N'oubliez pas d'atteindre le maximum de niveau au [Projet Voltaire](https://easi-training.fr/student/) avant le **26 Février**, date du conseil de classe du 1er semestre.
      ➾ **Niveau** : Fondamentaux / Supérieur / Orthotypographie / Excellence
      
      
      **Vérification PROJET SLAM sur GITFORM**  
      ➾ Assurez-vous que tous vos fichiers Markdown sur GitForm sont corrects, bien structurés et compréhensibles avant l'évaluation du formateur au cours des deux prochaines semaines d'alternance. De plus, vérifiez attentivement que les exercices ont été réalisés en C# lors des TP1/TP2 et que vous avez bien fait la correction du contrôle, et assurez-vous de les avoir également complétés en Python en guise de bonus. N'oubliez pas de mettre des commentaires dans votre code, expliquer à quoi sert cette ligne de commande etc. De plus pensez à bien faire en sorte qu'on retrouve votre export SQL en PLAIN du projet DBeaver sur le Git. Ensuite que vous avez bien fait votre page de connexion et inscription en HTML et PHP. Puis dans votre markdown nous devons bien retrouver toutes les définitions de csharp/bdd. Pensez aussi à bien faire un schema sur le fonctionnement de Git (référentiel/ client/serveur...). Puis pour finir faîte aussi bien un schema expliquant le fonctionnement le plus détaillé possible de comment marche un serveur web. \nUne fois tout ça fait, vous pourrez envoyer à l'adresse suivante que vous avez bien apporté des modifications sur votre git : __fvivet@cilog.fr__. \nAvec l'autorisation de mon maître, je vous envoi son projet fini afin de vous inspirer.\n **Disponible sur GitHub :** [Projet SLAM](https://github.com/DITSHOOT/projet_chassignol) 


      ➾ ⚠️ Dernier délai : __19 Février__. ⚠️

      
      ╘═══════════════════════════════════════════════╛
      ▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
      
      `)


      .addFields(
        { name: '\u200B', value: '▰▰▰▰▰▰▰▰▰▰▰▰▰▰ Évaluations ▰▰▰▰▰▰▰▰▰▰▰▰▰▰'},
        { name: '╒═══════════════════════════════════════════════╕', value: '**Points d\'évaluation à noter** :\n● Évaluation en SISR portant sur le niveau 2 (spanning-tree, aggregation de lien, routage statique).   [Refais les TP sur Cisco Packet Tracer](https://www.mediafire.com/file/ctw1pr2lcby8gar/traning_controleSISR_PROVOST.rar/file)\n● Évaluation possible en CEJM sur le [Chapitre 7](https://www.notion.so/dimitrichassignol/Chapitre-7-La-r-gulation-de-l-activit-conomique-par-le-droit-5614d77fa15045f48da0e80294e9eb70?pvs=4)   ❔\n╘═══════════════════════════════════════════════╛\n▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰' },
      )
      .setFooter({
        text: `${message.guild.name} - ${new Date().toLocaleString()}`,
        iconURL: message.guild.iconURL({ dynamic: true, format: 'png', size: 1024 })
      })
      .setAuthor({
        name: `${bot.user.username}`,
        iconURL: `${bot.user.displayAvatarURL()}`
      })

    // Ensuite, vous pouvez envoyer cet embed dans un canal spécifique :
    const sentMessage = await message.channel.send({ embeds: [reminderEmbed] });

    await sentMessage.react('👍');
    
    message.channel.send('@everyone');
  }
});





bot.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    const embed = new Discord.EmbedBuilder()
      .setTitle('Ping')
      .setDescription('Pong!')
      .setColor('#0099ff');

    message.channel.send({ embeds: [embed] });
  }

    
});
