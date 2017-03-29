var TelegramBot = require('node-telegram-bot-api');

var token = '362696927:AAE87SYadacstdIeJZGQcnXXhZWNpdXLEgU';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});


bot.onText(/\/maikerusan/, function(msg, match) {
	var fromId = msg.from.id;
	var insults = [
		"maikeru-san te rapta y la atención te capta. Y si no te gusta, 'te adapta'",
		"Si fueras más tonto, maikeru-san te compraría una diadema de flores",
		"Mira, cuando maikeru-san sale a la calle, la calle se vuelve a casa",
	  "Si el sol fuera maikeru-san... Se llamaría maikeru-sun"
	];
	var chosenInsult = insults[Math.floor(Math.random() * insults.length)];
	bot.sendMessage(fromId, chosenInsult);
});

bot.onText(/\/help/, function(msg, match) {
	var fromId = msg.from.id;
	bot.sendMessage(fromId, "Maikeru-san te miró. 9 meses left.");
});