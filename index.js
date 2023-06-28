var express=require("express");
var path=require("path");
var app=express();
var session=require("express-session");
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: process.env.SECRETO_SESSION,
    resave: true,
    saveUninitialized: true
}));
var usuariosRutas=require("./rutas/usuarios");
require("dotenv").config();
app.set("view engine","ejs");
app.use("/web",express.static(path.join(__dirname,"/web")));
app.use("/",usuariosRutas);
var port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Servidor en http://localhost:${port}`);
});