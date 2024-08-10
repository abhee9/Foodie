const express = require('express');
const cors = require('cors');
const { connect } = require('mongoose');
const { sign } = require('jsonwebtoken');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb configuration using mongoose

connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@foodie-cluster.d7imwif.mongodb.net/foodie-db?retryWrites=true&w=majority&appName=foodie-cluster`
  )
  .then(
    console.log("MongoDB Connected Successfully!")
  )
  .catch((error) => console.log("Error connecting to MongoDB", error));

  // jwt authentication
  app.post('/jwt', async(req, res) => {
    const user = req.body;
    const token = sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '1hr' 
    })
    res.send({token});
    console.log(token);
  })


//   import routes here
const menuRoutes = require('./api/routes/menuRoutes');
const cartRoutes = require('./api/routes/cartRoutes');
const userRoutes = require('./api/routes/userRoutes');

app.use('/menu', menuRoutes)
app.use('/carts', cartRoutes);
app.use('/users', userRoutes);

app.get("/", (req, res) => {
  res.send("Hello Foodi Client Server!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
