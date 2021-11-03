import { Mongoose } from "mongoose";

Mongoose.connect(
  "mongodb+srv://squad34:squad34-fcamara@squad34fcamara.crfpa.mongodb.net/cadUsers?retryWrites=true&w=majority",
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

export { Mongoose };
