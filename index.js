const express = require('express');
const cron = require("node-cron");
const fs = require("fs");
const nodemailer = require("nodemailer");

const app = express();
app.listen(3000,()=>{
    console.log('The server is on ...')

})
//-----normal cron job-----
// cron.schedule("*/10 * * * * *", function() {
//     console.log("running a task every 10 second");
// });


//-----create a file every 10 sec -----
// cron.schedule("*/10 * * * * *", function() {
  
//     // Data to write on file
//     let data = `${new Date().toUTCString()} : Server is working\n`;
      
//     // Appending data to logs.txt file
//     fs.appendFile("logs.txt", data, function(err) {
          
//         if (err) throw err;
          
//         console.log("Status Logged!");
//     });
// });

//----send mail every 10 sec-----
// Send Mail function using Nodemailer
function sendMail() {
    let mailTransporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: false,
        tls: {
            rejectUnauthorized: false
        },
        auth: {
        user: "soumya.parida@iserveu.in",
        pass: "vvuozameaaburmoj"
        }
    });

      
    // Setting credentials
    let mailDetails = {
        to: "biswajit.dash@iserveu.in",
        from: "soumya.parida@iserveu.in",
        subject: "Test mail using Cron job",
        text: "Node.js cron job email"
           + " testing by soumya priyadarsini"
    };
      
      
    // Sending Email
    mailTransporter.sendMail(mailDetails, 
                    function(err, data) {
        if (err) {
            console.log("Error Occurs", err);
        } else {
            console.log("Email sent successfully");
        }
    });
}

 cron.schedule("*/1 * * * *", function() {
    sendMail();
     });
