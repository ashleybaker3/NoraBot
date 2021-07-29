const meow = ['meow', 'puurrrr', 'drools', 'mew!', 'mewmewmew!', 'play?', 'mew?', 'blep', 'prrrt?', 'WET FOOD?', 'WET FOOD!', 'food?'] 

module.exports = async function (msg, args) {
    msg.channel.send(meow[Math.floor(Math.random() * meow.length)]);
}