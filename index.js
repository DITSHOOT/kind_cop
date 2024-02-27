const Discord  = require("discord.js")
const bot = new Discord.Client({intents: 3276799})
const config = require('./config')
const express = require('express');
const fs = require('fs');
const archiver = require('archiver');
const app = express();
const PORT = process.env.PORT || 3000;

bot.login(config.token)


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


// bot.on('messageCreate', async (message) => {
//   if (message.content.startsWith(config.prefix + 'c')) {
//       const files = ['02_-_lab1_-_initial_configuration_correction.pka', '03_-_Lab2_-_spanning_tree_1_correction.pka', '04_-_Lab3_-_Link_aggregation_1_correction.pka' , '06_-_Lab5_-_static_routing_correction.pka', '02_-_lab1_-_initial_configuration.pka', '03_-_Lab2_-_spanning_tree_1.pka', '04_-_Lab3_-_Link_aggregation_1.pka' , '06_-_Lab5_-_static_routing.pka', ];
//       const outputZip = 'cpt_provost.zip';

//       // Création de l'archive zip
//       const archive = archiver('zip', { zlib: { level: 9 } });
//       const output = fs.createWriteStream(outputZip);

//       output.on('close', async () => {


//           // Envoi de l'embed
//           const embed = new Discord.EmbedBuilder()
//               .setTitle('Préparation au Contrôle Cisco Packet Tracer')
//               .setDescription('Bienvenue dans la préparation au contrôle **Cisco Packet Tracer** ! Le fichier et les commandes ci-dessous vous aideront à vous entraîner sur des scénarios liés au __**Spanning-Tree**__, à la configuration de base des équipements réseau, et à l\'__**agrégation de liens**__. N\'hésitez pas à explorer les différentes sections ci-dessous pour vous familiariser avec les **commandes essentielles**. En cas de questions, n\'oubliez pas de discuter entre vous et de solliciter de l\'aide.')


//               .setColor('#3498db')
//               .addFields(
//                   { name: '▰▰▰▰▰▰▰▰▰▰▰▰▰▰ Informations ▰▰▰▰▰▰▰▰▰▰▰▰▰▰', value: '╒═══════════════════════════════════════════════╕' },
//                   { name: 'Date du contrôle', value: 'Lundi 4 mars de 13h à 17h.' },
//                   { name: "Que contient le fichier compressé au format .zip ?", value: "Ci-joint, vous trouverez une archive au format .zip contenant les TP sur le Spanning-Tree (STP) et l'agrégation de liens. Les fichiers inclus contiennent à la fois les versions avec et sans corrections." },
//                   { 
//                     name: "Besoin d'aide ? Consultez la documentation !",
//                     value: "[Documentation Cisco - Configuration de base](https://www.it-connect.fr/configurer-linterface-reseau-sur-un-routeur-cisco%ef%bb%bf/)\n[Documentation Cisco - Spanning-Tree](https://www.cisco.com/c/fr_ca/support/docs/smb/switches/Cisco-Business-Switching/kmgmt-2251-configure-stp-settings-on-a-switch-through-the-cli.html)\n[Documentation Cisco - Agrégation de liens](https://idum.fr/spip.php?article233)",
//                 },
//                 { name: '╘═══════════════════════════════════════════════╛', value: '▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰'},
//                 { name: '\u200b', value: '\u200b' },
//                 { name: '▰▰▰▰▰▰▰▰▰▰▰▰▰▰ Commandes ▰▰▰▰▰▰▰▰▰▰▰▰▰▰', value: '╒═══════════════════════════════════════════════╕' },
//                 { 
//                     name: 'Commandes Switch - Configuration de l\'agrégation de liens', 
//                     value: '```bash\nconfigure terminal\ninterface range Ethernet0/23 - 24\nchannel-group 1 mode active\n```' 
//                 },
//                 // ... (autres commandes inchangées)
            
//                   { name: 'Commandes de Configuration Switch', value: '```\nconfigure terminal\ninterface GigabitEthernet0/1\nswitchport mode trunk\n```' },
//                   { name: 'Commandes de Configuration Spanning-Tree', value: '```\nconfigure terminal\nspanning-tree vlan 1 priority 24576\n```' },
//                   { name: 'Commandes de Configuration LACP', value: '```\nconfigure terminal\ninterface range GigabitEthernet0/1 - 2\nchannel-group 1 mode active\n```' },
//                   { name: 'Commandes Switch - Configuration du Hostname et Utilisateur', value: '```bash\nhostname pod1-sw1\nusername admin secret Cisco\nusername admin privilege 15\n```' },
//                   { name: 'Commandes Switch - Sécurité', value: '```bash\nservice password encryption\nbanner motd\nLes accès non autorisés sont interdits\n```' },
//                   { name: 'Commandes Switch - Configuration IP', value: '```bash\ninterface vlan 1\nip address 192.168.1.1 255.255.255.0\nno shutdown\nip default-gateway 192.168.1.254\n```' },
//                   { name: 'Commandes Switch - Sauvegarde de la configuration', value: '```bash\ncopy run start\n```' },
//                   { name: 'Commandes Router - Configuration de base', value: '```kotlin\nhostname pod1-rtr1\n```' },
//                   { name: 'Commandes Router - Configuration de l\'interface', value: '```kotlin\ninterface GigabitEthernet0/0\nip address 192.168.1.254 255.255.255.0\nno shutdown\n```' },
//                   { name: 'Commandes Router - Configuration du pool DHCP', value: '```kotlin\nip dhcp pool Lan\nnetwork 192.168.1.0 255.255.255.0\ndns-server 192.0.2.14\ndefault-router 192.168.1.254\n```' },
//                   { name: 'Commandes Router - Exclusion d\'adresses DHCP', value: '```kotlin\nip dhcp excluded-address 192.168.1.0 192.168.1.10\nip dhcp excluded-address 192.168.1.254\n```' },
//                   { name: 'Commandes Router - Sauvegarde de la configuration', value: '```kotlin\ncopy run start\n```' },
                  

//                   { 
//                     name: 'Commandes Switch - Configuration de l\'agrégation de liens', 
//                     value: '```bash\nconfigure terminal\ninterface range Ethernet0/23 - 24\nchannel-group 1 mode active\n```' 
//                 },
//                 { 
//                     name: 'Commandes Switch - Vérification de l\'agrégation de liens', 
//                     value: '```bash\nshow etherchannel summary\nshow interfaces port-channel 1\n```' 
//                 },
//                 { 
//                     name: 'Commandes Switch - Configuration du Spanning-Tree (STP)', 
//                     value: '```bash\nconfigure terminal\nspanning-tree vlan 1 priority 24576\n```' 
//                 },
//                 { 
//                     name: 'Commandes Switch - Vérification du Spanning-Tree (STP)', 
//                     value: '```bash\nshow spanning-tree vlan 1\n```' 
//                 },
//                 { name: '╘═══════════════════════════════════════════════╛', value: '▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰'},
                
                  

//               )
//               .setAuthor({
//                   name: `${bot.user.username}`,
//                   iconURL: `${bot.user.displayAvatarURL()}`
//               })
//               .setFooter({
//                   text: `${message.guild.name} - ${new Date().toLocaleString()}`,
//                   iconURL: message.guild.iconURL({ dynamic: true, format: 'png', size: 1024 })
//               });

//               const sentMessage = await message.channel.send({ embeds: [embed] }).catch(console.error);
//               await sentMessage.react('👍');

//               // Envoi du fichier zip
//               await message.channel.send({
//                   files: [{
//                       attachment: outputZip,
//                       name: 'cpt_provost.zip'
//                   }]
//               }).catch(console.error);
  
//               // Suppression du fichier zip après envoi
//               fs.unlinkSync(outputZip);
//           });
  
//           archive.on('warning', (err) => {
//               if (err.code === 'ENOENT') {
//                   console.warn(err);
//               } else {
//                   throw err;
//               }
//           });
  
//           archive.on('error', (err) => {
//               throw err;
//           });
  
//           archive.pipe(output);
  
//           // Ajout des fichiers à l'archive
//           files.forEach((file) => {
//               archive.file(file, { name: file });
//           });
  
//           archive.finalize();
  
//           // Pause de 1 seconde pour s'assurer que l'archive est bien créée avant l'envoi du fichier zip
//           await new Promise(resolve => setTimeout(resolve, 1000));
  
//           // Envoi de l'embed des définitions
//           const embeddef = new Discord.EmbedBuilder()
//               .setTitle('Définitions pour le Contrôle Cisco Packet Tracer')
//               .setDescription('Voici quelques __définitions__ importantes pour vous aider à comprendre les concepts clés du contrôle **Cisco Packet Tracer**.')
//               .setColor('#3498db')
//               .addFields(
//                 { 
//                     name: 'Spanning-Tree Protocol (STP)', 
//                     value: 'Le Spanning-Tree est un protocole utilisé dans les réseaux informatiques pour éviter les boucles de commutation. Il identifie et désactive automatiquement les chemins redondants dans un réseau, assurant ainsi une topologie d\'arbre sans boucle.' 
//                 },
//                 { 
//                     name: 'Agrégation de Liens', 
//                     value: 'L\'agrégation de liens est une technique qui permet de combiner plusieurs connexions physiques entre deux appareils réseau pour augmenter la bande passante et la redondance. Cela améliore les performances et la fiabilité du réseau.' 
//                 }
//             )
//               .setAuthor({
//                   name: `${bot.user.username}`,
//                   iconURL: `${bot.user.displayAvatarURL()}`
//               })
//               .setFooter({
//                   text: `${message.guild.name} - ${new Date().toLocaleString()}`,
//                   iconURL: message.guild.iconURL({ dynamic: true, format: 'png', size: 1024 })
//               });
  
//           const sentMessage = await message.channel.send({ embeds: [embeddef] }).catch(console.error);
//           await sentMessage.react('👍');
//           message.channel.send("@everyone")
//       }
//   });
  


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




// bot.on('messageCreate', async (message) => {
//   if (message.content.startsWith(config.prefix + 'annonce')) {
//     message.delete(); // suppression du message direct

//     const reminderEmbed = new Discord.EmbedBuilder()
//       .setColor('#099ef9')
//       .setTitle('<a:rappel:1185911636565954620> Rappels Importants <a:rappel:1185911636565954620>')
//       .setDescription(`
      
//       Bonjour à tous ! Voici quelques rappels importants à ne pas oublier à faire pendant votre période en entreprise 🚀:
      
//       ▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰ Exercices ▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//       ╒═══════════════════════════════════════════════╕
      
//       **Compte rendu FlopSecurity :**
//       ➾ Ce [TP](https://github.com/fabrice1618/flopsecurity) se focalise sur la compréhension des failles de sécurité telles que les injections SQL et XSS, ainsi que sur la sécurisation des applications web. Vous devez être concis et utiliser un langage technique. Vous devez expliquer les étapes pour installer et configurer le serveur LAMP, ainsi que la différence entre la configuration d'un serveur de développement et un serveur de production. Ensuite, pour les injections SQL et XSS, vous devez expliquer leur nature, les risques qu'elles représentent et proposer au moins une solution technique. Enfin, vous devez aborder les mesures de sécurité à mettre en place pour protéger l'application, faire un résumé des enseignements tirés de ce TP, souligner l'importance de la sécurité dans le développement et l'administration des applications web, et enfin présenter vos perspectives futures pour renforcer la sécurité de l'application. \nUne fois tout ça fait, vous pourrez envoyer à l'adresse suivante que vous avez bien apporté des modifications sur votre git : __fabrice1618@gmail.com__.
//       Avec l'autorisation de mon maître, je vous envoi son projet fini afin de vous inspirer.\n **Disponible sur GitHub :** [Projet SLAM](https://github.com/DITSHOOT/report-flopsecurity)


//       ➾ ⚠️ Dernier délai : __19 Février__. ⚠️

//       **7speaking :**
//       ➾ N'oubliez pas de consacrer au moins 10 heures à [7speaking](https://user.7speaking.com) avant le **26 Février**, date du conseil de classe du 1er semestre.

//       **Projet Voltaire :**
//       ➾ N'oubliez pas d'atteindre le maximum de niveau au [Projet Voltaire](https://easi-training.fr/student/) avant le **26 Février**, date du conseil de classe du 1er semestre.
//       ➾ **Niveau** : Fondamentaux / Supérieur / Orthotypographie / Excellence
      
      
//       **Vérification PROJET SLAM sur GITFORM**  
//       ➾ Assurez-vous que tous vos fichiers Markdown sur GitForm sont corrects, bien structurés et compréhensibles avant l'évaluation du formateur au cours des deux prochaines semaines d'alternance. De plus, vérifiez attentivement que les exercices ont été réalisés en C# lors des TP1/TP2 et que vous avez bien fait la correction du contrôle, et assurez-vous de les avoir également complétés en Python en guise de bonus. N'oubliez pas de mettre des commentaires dans votre code, expliquer à quoi sert cette ligne de commande etc. De plus pensez à bien faire en sorte qu'on retrouve votre export SQL en PLAIN du projet DBeaver sur le Git. Ensuite que vous avez bien fait votre page de connexion et inscription en HTML et PHP. Puis dans votre markdown nous devons bien retrouver toutes les définitions de csharp/bdd. Pensez aussi à bien faire un schema sur le fonctionnement de Git (référentiel/ client/serveur...). Puis pour finir faîte aussi bien un schema expliquant le fonctionnement le plus détaillé possible de comment marche un serveur web. \nUne fois tout ça fait, vous pourrez envoyer à l'adresse suivante que vous avez bien apporté des modifications sur votre git : __fvivet@cilog.fr__. \nAvec l'autorisation de mon maître, je vous envoi son projet fini afin de vous inspirer.\n **Disponible sur GitHub :** [Projet SLAM](https://github.com/DITSHOOT/projet_chassignol) 


//       ➾ ⚠️ Dernier délai : __19 Février__. ⚠️

      
//       ╘═══════════════════════════════════════════════╛
//       ▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
      
//       `)


//       .addFields(
//         { name: '\u200B', value: '▰▰▰▰▰▰▰▰▰▰▰▰▰▰ Évaluations ▰▰▰▰▰▰▰▰▰▰▰▰▰▰'},
//         { name: '╒═══════════════════════════════════════════════╕', value: '**Points d\'évaluation à noter** :\n● Évaluation en SISR portant sur le niveau 2 (spanning-tree, aggregation de lien, routage statique).   [Refais les TP sur Cisco Packet Tracer](https://www.mediafire.com/file/ctw1pr2lcby8gar/traning_controleSISR_PROVOST.rar/file)\n● Évaluation possible en CEJM sur le [Chapitre 7](https://www.notion.so/dimitrichassignol/Chapitre-7-La-r-gulation-de-l-activit-conomique-par-le-droit-5614d77fa15045f48da0e80294e9eb70?pvs=4)   ❔\n╘═══════════════════════════════════════════════╛\n▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰' },
//       )
//       .setFooter({
//         text: `${message.guild.name} - ${new Date().toLocaleString()}`,
//         iconURL: message.guild.iconURL({ dynamic: true, format: 'png', size: 1024 })
//       })
//       .setAuthor({
//         name: `${bot.user.username}`,
//         iconURL: `${bot.user.displayAvatarURL()}`
//       })

//     // Ensuite, vous pouvez envoyer cet embed dans un canal spécifique :
//     const sentMessage = await message.channel.send({ embeds: [reminderEmbed] });

//     await sentMessage.react('👍');
    
//     message.channel.send('@everyone');
//   }
// });





bot.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    const embed = new Discord.EmbedBuilder()
      .setTitle('Ping')
      .setDescription('Pong!')
      .setColor('#0099ff');

    message.channel.send({ embeds: [embed] });
  }

    
});
