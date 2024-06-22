PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Dragon-ai,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("Dragon-ai-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function SIGMA_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Dragon_Ai =Arlo_Dragon({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Dra-gon_Ai.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Maher_Zubair.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Dragon_Ai.ev.on('creds.update', saveCreds)
            Pair_Code_By_Dragon_Ai.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(1000);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Dragon_Ai.sendMessage(Pair_Code_By_Maher_Zubair.user.id, { text: '' + b64data });

               let SIGMA_MD_TEXT = `
*Dragon-Ai PAIR CODE SUCCESSFULLY CONNECTED✅*


*FOLLOW OUR CHANNEL*
𓄂 *_https://whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F_*

*JOIN OUR GROUP*
𓄂 *_https://chat.whatsapp.com/CQvUnqaDK4fBjgMXvFEAsI_*

*FORK AND STAR 🌟 THE REPO FOR COURAGE*
𓄂 *_https://github.com/Dragonarlo/Arlodragon*

*VISIT FOR TUTORIALS*
𓄂 *_https://www.youtube.com/@Beltahtech2024_*

*DEVELOPER: Arlodragon Tech*
𓄂 *_https://wa.me/254702713600_*

*POWERED BY 𝐀𝐫𝐥𝐨𝐝𝐫𝐚𝐠𝐨𝐧 𝐭𝐞𝐜𝐡 AND MADE WITH 💎*`
 await Pair_Code_By_𝐀𝐫𝐥𝐨_𝐝𝐫𝐚𝐠𝐨𝐧.sendMessage(Pair_Code_By_Maher_Zubair.user.id,{text:SIGMA_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_𝐀𝐫𝐥𝐨_𝐝𝐫𝐚𝐠𝐨𝐧.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    SIGMA_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await SIGMA_MD_PAIR_CODE()
});
module.exports = router
          
