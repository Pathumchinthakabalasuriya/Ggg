//Devoloper Script 

global.owner = ['6283191296807']
global.botname = 'Madara'
global.author = 'My Sticker'
global.packname = 'Nocure'
global.bodyfooter = 'Madara Multi Device'
global.fotonya2 = "https://telegra.ph/file/c5eb1485207e04371bc19.jpg"
global.namastore = "LimmvzSky"
global.wlcm = []
global.wlcmm = []
global.delaypushkontak = 5500
global.usePairingCode = true
global.footer = '© ィ• MadaraMD 1.0 || Powered By Nocure'
global.idch = '120363302865191524@newsletter'
global.newsname = `MadaraMD 1.0 © - Nocure`
global.nameid = `MadaraMD 1.0 © - Nocure`
global.botkey = "yoau5Tt3fZQSouo",
// CPANEL SETTING

global.host = "https://"
global.application = {
  api_key: "ptla",
  c_api_key: "ptlc"
}
global.eggs = '15' // id eggs yang dipakai kalo id nya 5 biarin aja ini jangan di ubah by telegram 
global.location = '1' // id location by telegram 
global.serverCreate = {
  nestId: "5", //Nest Id panel lu
    eggId: "15", //Egg Id panel lu
  limits: {
    db: "1", //Mending ga usah diganti
    backups: "1", //Mending ga usah diganti
    allocation: "0" //Mending ga usah diganti
  },
  eggs: {
    environment: {
      "CMD_RUN": "npm start", //Sesuaiin sama eggs lu
      "GIT_ADDRESS": "",
      "BRANCH": "",
      "USERNAME": "",
      "ACCESS_TOKEN": ""
    }
  }
}

global.nodana = "-" //Nomor dana
global.nogopy = "-" //Nomor Gopay
global.payqris = "https://files.catbox.moe/c7tbym.jpeg" //Masukan link Qris / url
global.payovo = "-" //Nomor Ovo
global.limitawal = {

    premium: "Infinity",

    free: 100

}

//rpg

global.buruan = {

   ikan: 5,

   ayam: 5,

   kelinci: 5,

   domba: 5,

   sapi: 5,

   gajah: 5

}

global.rpg = {

   darahawal: 100,

   besiawal: 5,

   goldawal: 1,

   emeraldawal: 1,

   umpanawal: 1,

   potionawal: 1

}
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔 ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    OnlyOwner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    OnlyGrup: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*khusus Premium" Mau Prem? Chat Owne_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})