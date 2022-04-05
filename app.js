const express = require("express");
const app = express();
const mainRoutes = require("./routes/mainRouters");
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use("/",mainRoutes);

app.listen(3000, () =>{
    console.log("Servidor corriendo en puerto 3000");
})
app.get("/", (req, res) => {
    res.render("index")
});


