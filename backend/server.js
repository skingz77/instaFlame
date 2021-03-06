const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');
const bodyParser = require('body-parser')



dotenv.config();

// Import Routes
const authRoute = require("./Routes/auth");
const postRoute = require("./Routes/posts");


// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.get('/tester', (req,res)=>{
    res.json({'w': true})
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port: ${port}`));
