const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();
const port = 4000
const crypto = require("crypto")
const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}

app.use(cors())

app.listen(port, () => {
    console.log(`Server is working at port ${port}`)
});
app.get('/download', async (req, res) => {
    try {
    var URL = req.query.URL;
    res.header('Content-Disposition', `attachment; filename="${createSerial(15)}.mp4`);
    ytdl(URL, {
        format: 'mp3'
    }).pipe(res);
    } catch (e) {
            console.log(e);
            return res.json({
                status: 'Please enter your video url'
            });
        }
});