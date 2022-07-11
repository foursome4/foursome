import { Router } from "express";
import nodemailer from 'nodemailer';


const mailRoutes = Router();

 mailRoutes.post("/invite", async (req, res) =>  {
  const mail = req.body;
  const code = req.body;
  const patron = req.body;
  const name = req.body;
  const patronNickname = req.body;
  const type = req.body;

  console.log(mail.mail)


 let transporter = nodemailer.createTransport({
    host: "email-ssl.com.br",
    port: 465,
    secure: true,
    auth: {
      user: "contato@foursome.com.br",
      pass: "Foursome2021*"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Você tem um convite" <contato@foursome.com.br>', // sender address
    to: mail.mail, // list of receivers
    subject: "Convite Especial ✔", // Subject line
    text: "Convite Especial ✔", // plain text body
    html: `<p>Parabens ${name.name}! <br/>
    Você foi convidado por ${patronNickname.patronNickname} a fazer parte de uma rede de relacionamento, exclusivo para casais, solteiros e solteiras. <br /> FOURSOME foi criado com o objetivo de aproximar pessoas com o mesmo pensamento de relacionamento de forma livre, segura e respeitosa. <br /><br/>
    Esse convite é intransferível. <br/><br/>
    Para criar seu perfil agora, acesse: <br/>
    <a href="https://foursome.com.br/signup/${mail.mail}/${code.code}/${patron.patron}/${type.type}" target="_blank">Criar minha conta agora!</a> <br/>
    <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (22)99791-0510<br/>
    contato@foursome.com.br <br/>
    
    FOURSOME <a href="https://www.foursome.com.br" target="_blank">www.foursome.com.br</a><p/>`, // html body.
  });



  if(info) {
        res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
  } else {
    res.status(500)
  }
});

mailRoutes.post("/reinvite", async (req, res) =>  {
  const mail = req.body;
  const code = req.body;
  const patron = req.body;
  const name = req.body;
  const patronNickname = req.body;
  const type = req.body;

  console.log(mail.mail)


 let transporter = nodemailer.createTransport({
    host: "email-ssl.com.br",
    port: 465,
    secure: true,
    auth: {
      user: "contato@foursome.com.br",
      pass: "Foursome2021*"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Apenas um lembrete" <contato@foursome.com.br>', // sender address
    to: mail.mail, // list of receivers
    subject: "Não esqueça de nós 🤭", // Subject line
    text: "Não esqueça de nós 🤭", // plain text body
    html: `<p>Olá ${name.name}! <br/>
    Crie sua conta e faça parte de uma rede de relacionamento, exclusivo para casais, solteiros e solteiras. <br />
    FOURSOME foi criado com o objetivo de aproximar pessoas com o mesmo pensamento de relacionamento de forma livre, segura e respeitosa. <br /><br/>
    Este convite foi enviado por: ${patronNickname.patronNickname} <br /> 
    Esse convite é intransferível. <br/><br/>
    crie seu perfil agora mesmo: <br/>
    <a href="https://foursome.com.br/signup/${mail.mail}/${code.code}/${patron.patron}/${type.type}" target="_blank">Criar minha conta agora!</a> <br/>
    <br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (22)99791-0510<br/>
    contato@foursome.com.br <br/>
    
    FOURSOME <a href="https://www.foursome.com.br" target="_blank">www.foursome.com.br</a><p/>`, // html body.
  });



  if(info) {
        res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
  } else {
    res.status(500)
  }
});

mailRoutes.post("/confirmation", async (req, res) =>  {
  const mail = req.body;


 let transporter = nodemailer.createTransport({
    host: "email-ssl.com.br",
    port: 465,
    auth: {
      user: "contato@foursome.com.br",
      pass: "Foursome2021*"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Agora você faz parte" <contato@foursome.com.br>', // sender address
    to: mail.mail, // list of receivers
    subject: "Que Felicidade 🚀", // Subject line
    text: "Que Felicidade 🚀", // plain text body
    html: `<p>Você conseguiu! <br/>
    Você criou sua conta com sucesso. Agora precisa dar mais um passo. Completar suas informações <br/><br/>
    Acesse agora o nosso site, faça login e complete seu cadastro <br/>
    Acessar site: <a href="https://foursome.com.br" target="_blank">www.foursome.com.br</a> <br/><br/>
    
    Estamos esperando por você!. <br/><br/>

    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (22)99791-0510<br/>
    contato@foursome.com.br <br/><br/>
    
    FOURSOME <a href="https://www.foursome.com.br" target="_blank">www.foursome.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
} else {
res.status(500)
}

});


mailRoutes.post("/complete", async (req, res) =>  {
  const mail = req.body;
  console.log(mail.mail)


 let transporter = nodemailer.createTransport({
    host: "email-ssl.com.br",
    port: 465,
    auth: {
      user: "contato@foursome.com.br",
      pass: "Foursome2021*"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Você está pronto" <contato@foursome.com.br>', // sender address
    to: mail.mail, // list of receivers
    subject: "Missão cumprida 😎", // Subject line
    text: "Só mais um passo 😎", // plain text body
    html: `<p>Parabéns, você concluiu seu cadastro com sucesso.<br/><br/>
    Acesse agora o nosso site, e divirta-se <br/>
    Acessar site: <a href="https://foursome.com.br" target="_blank">www.foursome.com.br</a> <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (22)99791-0510<br/>
    contato@foursome.com.br <br/><br/>
    
    FOURSOME <a href="https://www.foursome.com.br" target="_blank">www.foursome.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
} else {
res.status(500)
}

});


mailRoutes.post("/username", async (req, res) =>  {
  const mail = req.body;
  const username = req.body;
  console.log(mail.mail)


 let transporter = nodemailer.createTransport({
    host: "email-ssl.com.br",
    port: 465,
    auth: {
      user: "contato@foursome.com.br",
      pass: "Foursome2021*"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Aqui está!" <contato@foursome.com.br>', // sender address
    to: mail.mail, // list of receivers
    subject: "Trouxemos o que nos pediu 😎", // Subject line
    text: "Trouxemos o que nos pediu 😎", // plain text body
    html: `<p>Você solicitou seu nome de usuário?<br/>
    Aqui está. Utilize-o para acessar o nosso site:<p/>
    <p>Seu nome de usuário:</p>
    <h3>${username.username}</h3>
    <p>Acessar site: <a href="https://foursome.com.br" target="_blank">www.foursome.com.br</a> <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (22)99791-0510<br/>
    contato@foursome.com.br <br/><br/>
    
    FOURSOME <a href="https://www.foursome.com.br" target="_blank">www.foursome.com.br</a></p>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
} else {
res.status(500)
}

});

mailRoutes.post("/passwordcode", async (req, res) =>  {
  const mail = req.body;
  const code = req.body;
  console.log(mail.mail)
  console.log(code.code)


 let transporter = nodemailer.createTransport({
    host: "email-ssl.com.br",
    port: 465,
    auth: {
      user: "contato@foursome.com.br",
      pass: "Foursome2021*"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Seu código está aqui!" <contato@foursome.com.br>', // sender address
    to: mail.mail, // list of receivers
    subject: "Recupere seu acesso 🗝️", // Subject line
    text: "Recupere seu acesso 🗝️", // plain text body
    html: `<p>Você solicitou código de recuperação de senha?<br/>
    Aqui está. Utilize-o para redefinir seu acesso:<p/> 
    <p>Seu código:</p>
    <h3>${code.code}</h3>
    <p>Acesse o link para alterar sua senha: <a href="https://foursome.com.br/recuperationcode/${mail.mail}" target="_blank">Recuperar minha senha</a> <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (22)99791-0510<br/>
    contato@foursome.com.br <br/><br/>
    
    FOURSOME <a href="https://www.foursome.com.br" target="_blank">www.foursome.com.br</a></p>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email com código de recuperação enviado com sucesso")
} else {
res.status(500)
}

});



export { mailRoutes };


