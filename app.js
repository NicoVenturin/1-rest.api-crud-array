const express = require('express');
const app = express();
const port = 3000;
//datos array
let productos = [];
//middleware
app.use(express.json());
//rutas
app.get('/productos', (req,res) =>{
    //res.send(`Listado de productos`);
    res.json(productos);
});
app.post('/productos', (req,res) =>{
    //console.log(req.body);
    //asigna un id al producto
    res.json({mensaje:'producto agregado',producto:req.body});
    nuevoproducto={id:productos.length+1,...req.body}
    productos.push(nuevoproducto);
    //res.send(`mandando nuevo producto`);
});
app.put('/productos/:id', (req,res) =>{
    const prodEncontrado = productos.find((p)=>p.id == req.params.id);
    if(!prodEncontrado){
        return res.status(404),res.json("no se encuentra el producto");
    }
    console.log(req.params.id);
    console.log(req.body);
    const nuevosDatos = req.body;
    //const x = (condicion) ?(if true):(else)
    productos = productos.map(p=>p.id==req.params.id ? {...p,...nuevosDatos} : p)
    res.json("prod actualizado");
    //res.send(`actualizando un producto`);
});
app.delete('/productos/:id', (req,res) =>{
    //res.send(`borrando un producto`);
    const prodEncontrado = productos.find((p)=>p.id == req.params.id);
    if(!prodEncontrado){
        return res.status(404),res.json("no se encuentra el producto");
    }
    //filter crea un reemplazo del array sin el borrado
    productos = productos.filter((p)=>p.id != req.params.id);
    console.log(productos);
    res.json("producto eliminado");
});
app.get('/productos/:id', (req,res) =>{
    console.log(req.params.id);
    //formato largo:
    //const prodEncontrado=productos.find((producto)=>{
    //    return producto.id == req.params.id;
    //});
    //formato corto:
    const prodEncontrado = productos.find((p)=>p.id == req.params.id);
    if(!prodEncontrado){
        res.json("no se encuentra el producto");
    }
    else{
        res.json({"mensaje":"producto encontrado","producto":prodEncontrado});
    }
    


});
app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
});