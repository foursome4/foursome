import { Mongoose } from "mongoose";

Mongoose.connect(
  "mongodb+srv://Foursome:Foursome2021@clusterfoursome.4b2rf.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoDB Conectado com sucesso!");
    }
  }
);

// Teste

export { Mongoose };
