const express =  require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const register=require("./models/registers");
const dotenv = require('dotenv')
const routeUrls = require('./routes/routes')
const loginurl = require('./routes/loginroute')
const cors = require('cors')
const mongoose = require("mongoose")

dotenv.config({ path: path.resolve(__dirname, '../.env')})

const port=process.env.PORT || 4000;

const static_path =path.join( __dirname, "../public");
const template_path =path.join( __dirname, "../templates/views");
const partials_path =path.join( __dirname, "../templates/partials");

mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("successful connection")
}).catch((e) => {
    console.log("unsuccessful connection");
    console.log(e);
})

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());


// app.use(express.static(static_path));
// app.set("view engine","hbs");
// app.set("views",template_path)
// hbs.registerPartials(partials_path);

app.use('/app', [routeUrls,loginurl])
//app.use('/app',loginurl)

app.listen(port, ()=>{
    console.log('server is runnning')
})
