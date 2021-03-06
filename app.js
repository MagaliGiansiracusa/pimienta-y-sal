const express = require("express");
const app = express();
const mainRoutes = require("./routes/mainRoutes");
const path = require("path");
const PORT = process.env.PORT || 4001;
app.use(express.static("public"));

app.listen(5000,()=>{
    console.log("El servidor está corriendo en el puerto 5000");
});

app.set("view engine", "ejs");

app.use("/", mainRoutes);


