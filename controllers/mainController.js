const controller = {
    index: (req,res) => {
        return res.send("Index");
    },
    detalleMenu: (req,res) =>{
        return res.send("detalleMenu");
    }
 }

module.exports = controller;
