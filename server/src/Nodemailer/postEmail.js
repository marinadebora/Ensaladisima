const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 465,
   secure: true, 
   auth: {
    user: 'ensaladisima02@gmail.com', 
    pass: 'asfjbrugpsqgkyoy',
  },
   tls: {
       rejectUnauthorized: false
   }
 });

 transporter.verify().then(()=>{ 
 console.log('Conectado a Nodemailer');
}).catch((err)=>{
   console.log(err)
});
module.exports ={
    transporter
}