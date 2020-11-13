const agree = "✅";
const { channeles } = require("../../data/config.json");
const { welcome } = require("../../data/definedMessages.json");
const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "verificare",
        description: "Verifica daca esti un robot. Beep Boop?",
        usage: "",
        category: "miscellaneous",
        accessableby: "Membru",
        aliases: [""]
    },
    run: async (bot, message, args) => {
       let NewBie = new MessageEmbed()
      .setAuthor("Welcome", bot.user.avatarURL)
      .setDescription("Bine ai venit pe serverul nostru de discord, pentru a putea accesa celelalte canale trebuie să citeşti regulamentul şi câteva informaţii despre server.")
      .addField("Regulament", "** 1.**  Nu este permisă jignirea directă sau indirectă a unei persoane indiferent de rasă, sex, aspect, națiune, religie, vârstă și tot ce ține de persoana respectivă - __Warn/Mute/Kick/Ban__.\n** 2.**  Nu distribuiți link-uri dăunatoare, reclame fără aprobare sau imagini inadecvate - __Warn/Kick/Ban__.\n** 3.**  Nu este permisă reclama la alt server de discord fără acordul unui administrator - __Ban__.\n** 4.**  Chatul este un loc unde să vă exprimați părerile/concepțiile despre orice, în niciun caz un loc pentru certuri.\n**5.** Este interzis să faceți SPAM, spre exemple:\n- Mesaje scurte şi frecvente.\n- Mesaje cu publicităţi şi link-uri de orice tip.\n- Orice link pus oriunde spre alte servere/site-uri care nu sunt în parteneriat cu noi.")
      .addField("Informaţii suplimentare", `La acumularea a 3 Warn-uri primeşti ban.\nToţi membrii serverului, inclusiv membrii staff-ului trebuie să respecte regulamentul.\nPentru a avea acces la tot serverul apasă pe ${agree} de sub mesaj.`)
      .setColor("#1ABC9C")
      .setThumbnail("http://icons.iconarchive.com/icons/graphicloads/polygon/128/problem-2-icon.png")
      .setTimestamp();
      let newbiechannel = message.guild.channels.cache.find(channel => channel.name === channeles.newbie);
      //if(!newbiechannel) return message.channel.send("Canalul pentru începători nu există.");
      let msg1 = await newbiechannel.send(NewBie);
      msg1.react(agree);

      const filter = (reaction, user) => {
          return [agree].includes(reaction.emoji.name) && user.id === message.author.id;
      };

      msg1.awaitReactions(filter, { max: 1, time: 120000, errors: ['time'] })
      .then(collected => {
          const reaction = collected.first();
          if (reaction.emoji.name === agree) {
        msg1.delete();
        const VERIFICAT = message.guild.roles.get('646698118653411329'); // Verificat
        const IF = message.guild.roles.get('646722983548944394'); // FACULTATEA: ISTORIE SI FILOLOGIE
        const a = message.guild.roles.get('646736799669944320'); // Istorie 
        const b = message.guild.roles.get('646736837058232324'); // Limba si literatura
        const c = message.guild.roles.get('646724815377661985'); // Limbi Moderne

        const SE = message.guild.roles.get('646722220051267631'); // FACULTATEA: STIINTE ECONOMICE
        const d = message.guild.roles.get('646737628829319168'); // Economia Comertului
        const e = message.guild.roles.get('646725544750219294'); // Administrarea Afacerilor
        const f = message.guild.roles.get('646738159941451776'); // Contabilitate
        const g = message.guild.roles.get('646738240770146324'); // Marketing

        const SEI = message.guild.roles.get('646722466181545986'); // FACULTATEA: STIINTE EXACTE SI INGINERESTI
        const h = message.guild.roles.get('646738447616442408'); // Informatica
        const i = message.guild.roles.get('646738501856919562'); // Electronica Aplicata
        const j = message.guild.roles.get('646738653212704779'); // Cadastru
        const k = message.guild.roles.get('646738567598440472'); // Ingineria Mediului
        const l = message.guild.roles.get('646738742815621120'); // Inginerie Urbana

        const DSS = message.guild.roles.get('646724700927557642'); // FACULTATEA: DREPT SI STIINTE SOCIALE

        const TO = message.guild.roles.get('646723322297450536'); // FACULTATEA: TEOLOGIE ORTODOXA

        if(message.member.roles.has(IF.id) || message.member.roles.has(SE.id) || message.member.roles.has(SEI.id) || message.member.roles.has(DSS.id) || message.member.roles.has(TO.id)){
        return message.channel.send('Ai deja un rol, daca vrei sa-l schimbi, contacteaza un membru staff!').then(m => m.delete(3000));
      }
        const filter = (reaction, user) => ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬', '🇭', '🇮', '🇯', '🇰', '🇱', '🇲', '🇳','❌'].includes(reaction.emoji.name) && user.id === message.author.id;

      const embed = new MessageEmbed()
        .setTitle('Alege domeniul facultatii tale:')
        .addField(`Isorie si Filologie`, `
        A - ${a.toString()}
            B - ${b.toString()}
            C - ${c.toString()}`, true)
        .addField(`Stiinte Economice`, `
        D - ${d.toString()}
            E - ${e.toString()}
            F - ${f.toString()}
            G - ${g.toString()}`, true)
        .addField(`Stiinte Exacte`, `
        H - ${h.toString()}
        I - ${i.toString()}
        J - ${j.toString()}
        K - ${k.toString()}
        L - ${l.toString()}`, true)
        .addField(`Drept si Stiinte Sociale`, `
        M - ${DSS.toString()}`, true)
        .addField(`Teologie Ortodoxa`, `
        n - ${TO.toString()}`, true)
        .addField(`Nu sunt la facultate`, `
        X - Anuleaza`, true)
            /*.setDescription(`
            Istorie si Filologie:
            A - ${a.toString()}
            B - ${b.toString()}
            C - ${c.toString()}
        Stiinte Economice:
            D - ${d.toString()}
            E - ${e.toString()}
            F - ${f.toString()}
            G - ${g.toString()}
        Stiinte Exacte si Inginerest:
        H - ${h.toString()}
        I - ${i.toString()}
        J - ${j.toString()}
        K - ${k.toString()}
        L - ${l.toString()}
        Drept si Stiinte Sociale:
        M - ${DSS.toString()}
        Teologie Ortodoxa:
        N - ${TO.toString()}
            `)*/
            .setColor(0xdd9323)
            .setFooter(`ID: ${message.author.id}`);

      newbiechannel.send(embed).then(async msg => {

            await msg.react('🇦');//a
            await msg.react('🇧');//b
            await msg.react('🇨');//c
            await msg.react('🇩'); //d

            await msg.react('🇪');//e
            await msg.react('🇫');//f
            await msg.react('🇬');//g
            await msg.react('🇭');//h
            await msg.react('🇮');//i
            await msg.react('🇯'); //j

            await msg.react('🇰');//k
            await msg.react('🇱');//l
            await msg.react('🇲');//m
            await msg.react('🇳'); //n

        await msg.react('❌'); //x

            msg.awaitReactions(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
            }).then(collected => {
          let WelcomeMessage = welcome[Math.floor(Math.random()*welcome.length)];
                const reaction = collected.first();
                switch (reaction.emoji.name) {
            case '🇦'://a
              message.member.addRole(VERIFICAT).catch(console.error);
              message.member.addRole(a).catch(console.error);
              message.member.addRole(IF).catch(console.error);
              message.member.guild.channels.cache.find("name", "👋bun-venit").send(message.member.toString() + " " + WelcomeMessage);
              msg.delete();
              break;
            case '🇧'://b
              message.member.addRole(VERIFICAT).catch(console.error);
              message.member.addRole(b).catch(console.error);
              message.member.addRole(IF).catch(console.error);
              message.member.guild.channels.cache.find("name", "👋bun-venit").send(message.member.toString() + " " + WelcomeMessage);
              msg.delete();
              break;
            case '🇨'://c
              message.member.addRole(VERIFICAT).catch(console.error);
              message.member.addRole(c).catch(console.error);
              message.member.addRole(IF).catch(console.error);
              message.member.guild.channels.cache.find("name", "👋bun-venit").send(message.member.toString() + " " + WelcomeMessage);
              msg.delete();
              break;
            case '🇩'://d
              message.member.addRole(VERIFICAT).catch(console.error);
              message.member.addRole(d).catch(console.error);
              message.member.addRole(SE).catch(console.error);
              message.member.guild.channels.cache.find("name", "👋bun-venit").send(message.member.toString() + " " + WelcomeMessage);
              msg.delete();
              break;
            case '🇪'://e
              message.member.addRole(VERIFICAT).catch(console.error);
              message.member.addRole(e).catch(console.error);
              message.member.addRole(SE).catch(console.error);
              message.member.guild.channels.cache.find("name", "👋bun-venit").send(message.member.toString() + " " + WelcomeMessage);
              msg.delete();
              break;
            case '🇫'://f
              message.member.addRole(VERIFICAT).catch(console.error);
              message.member.addRole(f).catch(console.error);
              message.member.addRole(SE).catch(console.error);
              message.member.guild.channels.cache.find("name", "👋bun-venit").send(message.member.toString() + " " + WelcomeMessage);
              msg.delete();
              break;
            case '🇬'://g
              message.member.addRole(VERIFICAT).catch(console.error);
              message.member.addRole(g).catch(console.error);
              message.member.addRole(SE).catch(console.error);
              message.member.guild.channels.cache.find("name", "👋bun-venit").send(message.member.toString() + " " + WelcomeMessage);
              msg.delete();
              break;
            case '🇭'://h
              message.member.addRole(VERIFICAT).catch(console.error);
              message.member.addRole(h).catch(console.error);
              message.member.addRole(SEI).catch(console.error);
              message.member.guild.channels.cache.find("name", "👋bun-venit").send(message.member.toString() + " " + WelcomeMessage);
              msg.delete();
              break;
            case '🇮'://i
              message.member.addRole(VERIFICAT).catch(console.error);
              message.member.addRole(i).catch(console.error);
              message.member.addRole(SEI).catch(console.error);
              message.member.guild.channels.cache.find("name", "👋bun-venit").send(message.member.toString() + " " + WelcomeMessage);
              msg.delete();
              break;
            case '🇯'://j
              message.member.addRole(VERIFICAT).catch(console.error);
              message.member.addRole(j).catch(console.error);
              message.member.addRole(SEI).catch(console.error);
              message.member.guild.channels.cache.find("name", "👋bun-venit").send(message.member.toString() + " " + WelcomeMessage);
              msg.delete();
              break;
            case '🇰'://k
              message.member.addRole(VERIFICAT).catch(console.error);
              message.member.addRole(k).catch(console.error);
              message.member.addRole(SEI).catch(console.error);
              message.member.guild.channels.cache.find("name", "👋bun-venit").send(message.member.toString() + " " + WelcomeMessage);
              msg.delete();
              break;
            case '🇱'://l
              message.member.addRole(VERIFICAT).catch(console.error);
              message.member.addRole(l).catch(console.error);
              message.member.addRole(SEI).catch(console.error);
              message.member.guild.channels.cache.find("name", "👋bun-venit").send(message.member.toString() + " " + WelcomeMessage);
              msg.delete();
              break;
            case '🇲'://m
              //member.addRole(m).catch(console.error);
              message.member.addRole(VERIFICAT).catch(console.error);
              message.member.addRole(DSS).catch(console.error);
              message.member.guild.channels.cache.find("name", "👋bun-venit").send(message.member.toString() + " " + WelcomeMessage);
              msg.delete();
              break;
            case '🇳'://n
              //member.addRole(n).catch(console.error);
              message.member.addRole(TO).catch(console.error);
              message.member.addRole(VERIFICAT).catch(console.error);
              message.member.guild.channels.cache.find("name", "👋bun-venit").send(message.member.toString() + " " + WelcomeMessage);
              msg.delete();
              break;
            case '❌'://x
              message.channel.send(`Ai anulat.`).then(m => m.delete(3000));
              msg.delete();
              break;
                }
            }).catch(collected => {
          console.log(`Timpul a expirat`);
          msg.delete();
            });

        });

          } else return;
      })
      .catch(collected => {
          console.log(`Only ${collected.size} out of 4 reacted.`);
          msg1.delete();
      });
  
    }
}
