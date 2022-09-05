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
    <a href="https://foursome.com.br/signup/convite/${mail.mail}/${code.code}/${patron.patron}/${type.type}" target="_blank">Criar minha conta agora!</a> <br/>
    <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (22)99791-0510<br/>
    contato@foursome.com.br <br/>
    
    FOURSOME <a href="https://www.foursome.com.br" target="_blank">www.foursome.com.br</a><p/>`, // html body.
  });



  if(info) {
        res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
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
    FOURSOME foi criado com o objetivo de aproximar pessoas com o mesmo pensamento de relacionamento de   ma livre, segura e respeitosa. <br /><br/>
    Este convite foi enviado por: ${patronNickname.patronNickname} <br /> 
    Esse convite é intransferível. <br/><br/>
    crie seu perfil agora mesmo: <br/>
    <a href="https://foursome.com.br/signup/convite/${mail.mail}/${code.code}/${patron.patron}/${type.type}" target="_blank">Criar minha conta agora!</a> <br/>
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
    console.log("Email não enviado")
  }
});

mailRoutes.post("/accountaproved", async (req, res) =>  {
  const mail = req.body;
  console.log(mail);


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
    from: '"Estamos muito felizes" <contato@foursome.com.br>', // sender address
    to: mail.mail, // list of receivers
    subject: "Vem com a gente 🚀", // Subject line
    text: "Vem com a gente 🚀", // plain text body
    html: `<p>Sua conta foi aprovada!!! <br/>
    Sua solicitação para fazer parte da mais nova rede de relacionamento, exclusivo para casais, solteiros e solteiras, foi aprovada.<br/>

    Acesse agora mesmo: <a href="https://foursome.com.br" target="_blank">www.foursome.com.br</a> <br/><br/>
    
    Estamos esperando por você!. <br/><br/>

    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (22)99791-0510<br/>
    contato@foursome.com.br <br/><br/>
    
    FOURSOME <a href="https://www.foursome.com.br" target="_blank">www.foursome.com.br</a><p/>`, // html body.
  });


  console.log(info)
  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});
mailRoutes.post("/accountrecused", async (req, res) =>  {
  const mail = req.body;

  console.log(mail)

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
    from: '"algo deu errado" <contato@foursome.com.br>', // sender address
    to: mail.mail, // list of receivers
    subject: "Que pena 😞", // Subject line
    text: "Que pena 😞", // plain text body
    html: `<p>Sua solicitação foi reprovada! <br/>
    Seus dados não estão em conformidade com a política de nosso site ( foto do perfil ou dados incompletos). <br/><br/>
    ** ATENÇÃO **<br/>
- PERFIL CASAL ( FOTO DO CASAL)<br/>
- PERFIL SOLTEIRO (A) ( FOTO DO SOLTEIRO (A))<br/><br/>
Obs.: Foto NÃO necessariamente do rosto.<br/><br/>
Mas não fique triste, você pode enviar uma nova solicitação agora mesmo.<br/>
Crie uma nova conta e preste bem atenção em todos os detalhes. Ok?.<br/><br/>
Acesse site e crie uma nova conta: <a href="https://foursome.com.br" target="_blank">www.foursome.com.br</a> <br/><br/>
    
    Estamos esperando por você!. <br/><br/>

    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (22)99791-0510<br/>
    contato@foursome.com.br <br/><br/>
    
    FOURSOME <a href="https://www.foursome.com.br" target="_blank">www.foursome.com.br</a><p/>`, // html body.
  });


  console.log(info)
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
    Agora bastar aguardar a análise de nossos moderadores para liberação de sua conta.<br/>
    <br/>
    Acessar site: <a href="https://foursome.com.br" target="_blank">www.foursome.com.br</a> <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (22)99791-0510<br/>
    contato@foursome.com.br <br/><br/>
    
    FOURSOME <a href="https://www.foursome.com.br" target="_blank">www.foursome.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});

mailRoutes.post("/paymentaproved", async (req, res) =>  {
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
    from: '"Tudo ok por aqui" <contato@foursome.com.br>', // sender address
    to: mail.mail, // list of receivers
    subject: "Pagamento confrmado 👏", // Subject line
    text: "Pagamento confrmado 👏", // plain text body
    html: `<p>Parabéns, identificamos seu pagamento<br/>
    Continue a usar o nosso site com todos os benefícios que seu plano oferece.<br/>
    <br/>
    Acessar site: <a href="https://foursome.com.br" target="_blank">www.foursome.com.br</a> <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (22)99791-0510<br/>
    contato@foursome.com.br <br/><br/>
    
    FOURSOME <a href="https://www.foursome.com.br" target="_blank">www.foursome.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});

mailRoutes.post("/paymentreproved", async (req, res) =>  {
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
    from: '"Ops. Temos um problema" <contato@foursome.com.br>', // sender address
    to: mail.mail, // list of receivers
    subject: "Temos um problema 😢", // Subject line
    text: "Ops. Temos um problema 😢", // plain text body
    html: `<p>Não identificamos o seu pagamento.<br/>
    O comprovante enviado não é válido ou não bate com nossa base de pagamentos.
    <br/><br/>
    <b>Não envie tela de confirmação.<br/>
    Não envie comprovante resumido.<br/>
    Não envie linha de extrato.<br/>
    Não rasure ou corte o comprovante.<br/>
    O envio de comprovante fora dos padrões poderá causar o bloqueio do seu acesso.</b> <br/><br/>
    Você pode enviar um novo comprovante para o nosso whatsapp, para acelerar a liberação de seu acesso.<br/>
    <br/>
    <br/>
    Acessar site: <a href="https://foursome.com.br" target="_blank">www.foursome.com.br</a> <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (22)99791-0510<br/>
    contato@foursome.com.br <br/><br/>
    
    FOURSOME <a href="https://www.foursome.com.br" target="_blank">www.foursome.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});
mailRoutes.post("/invtefriend", async (req, res) =>  {
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
    from: '"Convide e ganhe" <contato@foursome.com.br>', // sender address
    to: mail.mail, // list of receivers
    subject: "Convide e ganhe 😉", // Subject line
    text: "Convide e ganhe 😉", // plain text body
    html: `<p>Convide seus amigos.<br/><br/>
    A cada 5 amigos assinantes, você ganha 1 mensalidade grátis.
    <br/><br/>
    <img src="https://firebasestorage.googleapis.com/v0/b/foursome4-b925c.appspot.com/o/images%2Fposts%2F1cf28d47-0092-4541-8f65-bd627d0b82eb?alt=media&token=7ab2aa54-b30c-435f-9c76-cf558ec36a30" width="500px"Plano promocional" />
    <br/><br/>
    Aproveite!<br/>
    Assinatura premium apenas R$ 9,90 mensal
    <br/>
    <br/>
    Acessar site: <a href="https://foursome.com.br" target="_blank">www.foursome.com.br</a> <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (22)99791-0510<br/>
    contato@foursome.com.br <br/><br/>
    
    FOURSOME <a href="https://www.foursome.com.br" target="_blank">www.foursome.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});
mailRoutes.post("/plain", async (req, res) =>  {
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
    from: '"Plano Promocional" <contato@foursome.com.br>', // sender address
    to: mail.mail, // list of receivers
    subject: "Plano Promocional 🤑", // Subject line
    text: "Plano Promocional 🤑", // plain text body
    html: `<p>Assine o plano premium com o valor promocional.<br/><br/>
    Tenha todos os benefícios do plano Premium por apenas R$9,90.
    <br/><br/>
    <img src="https://firebasestorage.googleapis.com/v0/b/foursome4-b925c.appspot.com/o/images%2Fposts%2F918b249d-f332-4a8e-bc93-74262b1541a2?alt=media&token=7cfd16b4-98f9-4e20-8ec1-7d428dcfe9fc" width="500px"Plano promocional" />
    <br/><br/>
    Promoção válida até 31/12/2022
    <br/>
    <br/>
    Acessar site: <a href="https://foursome.com.br" target="_blank">www.foursome.com.br</a> <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (22)99791-0510<br/>
    contato@foursome.com.br <br/><br/>
    
    FOURSOME <a href="https://www.foursome.com.br" target="_blank">www.foursome.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
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
  })

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
}

});



export { mailRoutes };


