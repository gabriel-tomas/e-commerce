const cron = require("cron");
const https = require("https");

const url = process.env.ONRENDER_URL;
const job = new cron.CronJob("*/14 * * * *", function () {
    console.log("");
    console.log("Restarting server...");

    https.get(url, (res) => {
        if(res.statusCode === 200) {
            console.log("Server restarted");
        } else {
            console.error("Failed to restart server, status:", res.statusCode);
        };
    }).on("error", (err) => {
        console.error("Error during restart", err.message);
    });
});

module.exports = job;