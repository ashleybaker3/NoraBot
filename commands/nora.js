const nora = ['(=^.^=)', '(๑✪ᆺ✪๑)', '=^._.^= ∫', '(=◉ᆽ◉=)', '(=ಠᆽಠ=)', '(≈ㅇᆽㅇ≈)♡', '(₌♥ᆽ♥₌)', '˓˓ก₍⸍⸌̣ʷ̣̫⸍̣⸌₎ค˒˒', '˓˓ฅ₍˄ุ.͡ ̫.˄ุ₎ฅ˒˒', '*:･ﾟ✧(=✪ ᆺ ✪=)*:･ﾟ✧', 'ᨐᵉᵒʷ', '=＾● ⋏ ●＾=', '(=♡ ᆺ ♡=)', '[^._.^]ﾉ彡', 'ᨐ ∫', '₍=୪ Ⱉ ୪=₎', '（ฅ＾・ﻌ・＾）ฅ', ' ̳ ៱˳_˳៱ ̳ ∫']

module.exports = async function (msg, args) {
    msg.channel.send(nora[Math.floor(Math.random() * nora.length)]);
}