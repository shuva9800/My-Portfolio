const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try{
        console.log("body is -",body);
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASSWORD,
                }
            })


            let info = await transporter.sendMail({
                from: 'PORTFOLIO',
                to:`${email}`,
                subject: `${title}`,
                html: `
                    <h1>{body.name}</h1>
                    <p>{body.email}</p>
                    <p>{body.phoneNumber}</p>
                    <p>{body.message}</p>
                `,
            })
            console.log(info);
            return info;
    }
    catch(error) {
        console.log(error.message);
    }
}


module.exports = mailSender;