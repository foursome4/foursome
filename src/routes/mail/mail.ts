import { Router } from "express";
import nodemailer from 'nodemailer';


const mailRoutes = Router();

 mailRoutes.post("/invite", async (req, res) =>  {
  const mail = req.body;
  const code = req.body;
  const patron = req.body;
  const name = req.body;
  const patronNickname = req.body;
  console.log(mail.mail)


 let transporter = nodemailer.createTransport({
    host: "email-ssl.com.br",
    port: 465,
    auth: {
      user: "desenvolvimento@foursome.com.br",
      pass: "Foursome2021*"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Você tem um convite" <desenvolvimento@foursome.com.br>', // sender address
    to: mail.mail, // list of receivers
    subject: "Convite Especial ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<p>Parabens ${name.name}! <br/>
    Você foi convidado por ${patronNickname.patronNickname} a fazer parte de uma rede de relacionamento, exclusivo para casais, solteiros e solteiras. <br /> FOURSOME foi criado com o objetivo de aproximar pessoas com o mesmo pensamento de relacionamento de forma livre, segura e respeitosa. <br /><br/>
    Esse convite é valido por 10 dias e intransferível. <br/><br/>
    Para criar seu perfil agora, acesse: <br/>
    <a href="https://foursome.com.br/signup/${mail.mail}/${code.code}/${patron.patron}" target="_blank">Criar minha conta agora!</a> <br/>
    Utilize o Código: ${code.code} <br/>
    e adicione o código do seu Patrono: ${patron.patron} <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    contato@foursome.com.br <br/><br/>
    
    FOURSOME <a href="https://www.foursome.com.br" target="_blank">www.foursome.com.br</a><p/>`, // html body.
  });


  transporter.sendMail(info, function(err) {
    if(err) {
      console.log(err)
    }
    res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
  })

});


mailRoutes.post("/confirmation", async (req, res) =>  {
  const mail = req.body;
  console.log(mail.mail)


 let transporter = nodemailer.createTransport({
    host: "email-ssl.com.br",
    port: 465,
    auth: {
      user: "desenvolvimento@foursome.com.br",
      pass: "Foursome2021*"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Agora você faz parte" <desenvolvimento@foursome.com.br>', // sender address
    to: mail.mail, // list of receivers
    subject: "Que Felicidade 🚀", // Subject line
    text: "Que Felicidade 🚀", // plain text body
    html: `<p>Você conseguiu! <br/>
    Você criou sua conta com sucesso. Agora precisa dar mais um passo. Completar suas informações <br/><br/>
    Acesse agora o nosso site, faça login e complete seu cadastro <br/>
    Acessar site: <a href="https://foursome.com.br" target="_blank">www.foursome.com.br</a> <br/><br/>
    
    Estamos esperando por você!. <br/><br/>

    Em caso de dúvida, fale conosco. <br/>
    contato@foursome.com.br <br/><br/>
    
    FOURSOME <a href="https://www.foursome.com.br" target="_blank">www.foursome.com.br</a><p/>`, // html body.
  });


  transporter.sendMail(info, function(err) {
    if(err) {
      console.log(err)
    }
    res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
  })

});


mailRoutes.post("/complete", async (req, res) =>  {
  const mail = req.body;
  console.log(mail.mail)


 let transporter = nodemailer.createTransport({
    host: "email-ssl.com.br",
    port: 465,
    auth: {
      user: "desenvolvimento@foursome.com.br",
      pass: "Foursome2021*"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Você está pronto" <desenvolvimento@foursome.com.br>', // sender address
    to: mail.mail, // list of receivers
    subject: "Missão cumprida 😎", // Subject line
    text: "Só mais um passo 😎", // plain text body
    html: `<p>Parabéns, você concluiu seu cadastro com sucesso.<br/><br/>
    Acesse agora o nosso site, e divirta-se <br/>
    Acessar site: <a href="https://foursome.com.br" target="_blank">www.foursome.com.br</a> <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    contato@foursome.com.br <br/><br/>
    
    FOURSOME <a href="https://www.foursome.com.br" target="_blank">www.foursome.com.br</a><p/>`, // html body.
  });


  transporter.sendMail(info, function(err) {
    if(err) {
      console.log(err)
    }
    res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
  })

});
export { mailRoutes };


