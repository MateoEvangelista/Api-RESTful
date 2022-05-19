const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const routerProductos = express.Router();

const productos = [
    {
        title: 'silla',
        price: 200,
        thumbnail: 'x',
        id: 1
    }]


express.Router.get('/api/productos', (req, res) => {
    res.json(productos);
});

express.Router.get('/api/productos/:id', (req, res) => {
    const idProducto = req.params.id;
    const productoEncontrado = productos.find(productos => productos.id == idProducto);
    if(!productoEncontrado){
        res.status(404).send('Producto no encontrado')
    }else{
        res.json(productoEncontrado);
    }
});

express.Router.post('/api/productos', (req, res) => {
    productos.push(req.body);
    const id =+ 1;
    const productoId = [];
    productoId['id'] = id;
    productos.push(productoId);
    res.json(productos);

});

express.Router.put('/api/productos/:id', (req, res) => {
    const idProducto = req.params.id;
    const productoEncontrado = productos.find(productos => productos.id == idProducto);
    if(!productoEncontrado){
        res.status(404).send('Producto no encontrado')
    }else{
        productos[productoEncontrado] = req.body;
        res.json(productos);
    }
});

express.Router.delete('/api/productos/:id', (req, res) => {
    const idProducto = req.params.id;
    const productoEncontrado = productos.find(productos => productos.id == idProducto);
    if(!productoEncontrado){
        res.status(404).send('Producto no encontrado')
    }else{
        json(productos[productoEncontrado]) = {};
        res.json(productos);
    }
});


express.Router.listen(8080, () =>{
    console.log('Funcionando')
});