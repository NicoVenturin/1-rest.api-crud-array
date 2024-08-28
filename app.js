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
app.put('/productos', (req,res) =>{
    
    
    res.send(`actualizando un producto`);
});
app.delete('/productos', (req,res) =>{
    res.send(`borrando un producto`);
});
app.get('/productos:id', (req,res) =>{
    res.send(`mostrando un producto`);
});
app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
});