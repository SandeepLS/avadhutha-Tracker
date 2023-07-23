import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"

const app = express();
app.use(cors())
const connectDB = async () => {
    const conn = await mongoose.connect(
      "mongodb+srv://Sandeep:Sandeep123@stackoverflow.9ppbyt9.mongodb.net/avadhutha?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  };

  const userSchema = new mongoose.Schema({
    email: { type: String },
    userName: { type: String },
    password: { type: String },
  });
  
  const userDB = mongoose.model("user", userSchema);

  connectDB();
  app.use(bodyParser.json());

  app.post("/login", async (req, res) => {
    const { userName, password } = req.body;
    console.log(userName, password);
    const results = await userDB.findOne({ userName, password });
    if (results === null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(results);
    }
  });
  
  app.post("/register", async (req, res) => {
    const { email, userName, password } = req.body;
  
    const User = {
      email,
      userName,
      password,
    };
    const result = await userDB.create(User);
    console.log("User record inserted successfully");
    res.sendStatus(200);
  });

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});