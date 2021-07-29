const meow = require('./commands/meow.js');
const nora = require('./commands/nora.js');
const pspsps = require('./commands/pspsps.js');

const commands = { meow, nora, pspsps};

module.exports = async function (msg) {
    let tokens = msg.content.split("");
    let token = tokens[0];
    if (token === '!' || token === '&' || token === '?') {
        command = msg.content.substring(1);
        commands[command](msg, tokens);
    }
}