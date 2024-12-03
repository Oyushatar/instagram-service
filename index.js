const express = require("express");
const useRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
app.use(useRouter);
app.use(postRouter);
const database = async () => {
  try {
    const base = await mongoose.connect(
      process.env(
        "mongodb+srv://oyushatar:Oyushatar1112@cluster0.hpqt3.mongodb.net/instagram?retryWrites=true&w=majority&appName=Cluster0"
      )
    );

    console.log("DB success");
  } catch (error) {
    console.log(error);
  }
};
database();

app.listen(8080, console.log("running on port 8080"));
