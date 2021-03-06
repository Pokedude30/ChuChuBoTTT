// The WEBSOCKET server and port the bot should connect to.
// Most of the time this isn't the same as the URL, check the `Request URL` of
// the websocket.
//place the URL of the showdown server you are aiming to connect to
exports.url = 'play.pokemonshowdown.com';


// The nick and password to log in with
// If no password is required, leave pass empty
var nick = exports.nick = ''
exports.pass = '';

// Any private rooms that should be joined.
// Private rooms will be moderated differently (since /warn doesn't work in them).
// The bot will also avoid leaking the private rooms through .seen
exports.privaterooms = [];

// The character text should start with to be seen as a command.
// Note that using / and ! might be 'dangerous' since these are used in
// Showdown itself.
// Using only alphanumeric characters and spaces is not allowed.
// Add more command characters 
exports.commandcharacter = ['+', '.'];

// The default rank is the minimum rank that can use a command in a room when
// no rank is specified in settings.json
exports.defaultrank = '@';

// Whether this file should be watched for changes or not.
// If you change this option, the server has to be restarted in order for it to
// take effect.
exports.watchconfig = false;

// Secondary websocket protocols should be defined here, however, Showdown
// doesn't support that yet, so it's best to leave this empty.
exports.secprotocols = [];

// What should be logged?
// 0 = error, ok, info, debug, recv, send
// 1 = error, ok, info, debug, cmdr, send
// 2 = error, ok, info, debug (recommended for development)
// 3 = error, ok, info (recommended for production)
// 4 = error, ok
// 5 = error
exports.debuglevel = 3;

// Users who can use all commands regardless of their rank. Be very cautious
// with this, especially on servers other than main.
// This, however does NOT give dev permissions which are declared in parser.js
exports.excepts = [];

// Add a link to the help for the bot here. When there is a link here, .help and .guide
// will link to it.
exports.botguide = 'http://pastebin.com/zT0eFG8a';

// This allows the bot to act as an automated moderator. If enabled, the bot will
// mute users who send 6 lines or more in 6 or fewer seconds for 7 minutes. NOTE: THIS IS
// BY NO MEANS A PERFECT MODERATOR OR SCRIPT. It is a bot and so cannot think for itself or
// exercise moderator discretion. In addition, it currently uses a very simple method of 
// determining who to mute and so may miss people who should be muted, or mute those who 
// shouldn't. Use with caution.
exports.allowmute = true;

// The punishment values system allows you to customise how you want the bot to deal with
// rulebreakers. Spamming has a points value of 2, all caps has a points value of 1, etc.
exports.punishvals = {
	1: 'warn',
	2: 'mute',
	3: 'mute',
	4: 'hourmute',
	5: 'roomban'
};

//This key is used to deliver requests from Google Spreadsheets. Used by the wifi room.
exports.googleapikey = '';

//alt tracking - generally disabled bc it takes up a LOT of memory
exports.alts = false;
//default avatar
exports.avatar = 23;
