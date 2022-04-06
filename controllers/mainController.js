const {listaPlatos, about} = require("../models/data");


const controller = {
    index: (req,res) => {
        return res.render("index",{ about:about, menu: listaPlatos});
    },
    detalleMenu: (req,res) =>{
        let plato= listaPlatos.find(plato) => plato.id ==req.parans.menuId);
        res.render("detalleMenu", {plato: plato
            
        });
    }
 }

module.exports = controller;
