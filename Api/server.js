const express=require('express')
const path=require('path')
const http = require('http');
const mongoose=require('mongoose');
const config=require('./db');
const bodyParser=require('body-parser')
const cors=require('cors')

const router = express.Router();
const routes = require('./routes/route'); 


mongoose.Promise=global.Promise;
mongoose.connect(config.DB,{useUnifiedTopology:true,useNewUrlParser:true})
.then(
    ()=>{console.log('Database is connected') },
    err=>{console.log('Cannot connect to the database'+ err) }  
);
const app=express();
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);
let port=process.env.PORT || 4000;
const hostname='localhost'

const server=http.createServer((req,res)=>{
  res.statusCode=200;
}); 
app.listen(port,function(){
  console.log('listening on port '+ port);
});
module.exports = router;