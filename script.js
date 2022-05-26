const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'))

const routerProductos = express.Router();
app.use('/api/productos', routerProductos);

const productos = [{

}]

function capturar(){

    function Productos(nombre, id, url){
        this.nombre = nombre;
        this.id = id;
        this.url = url;
    }
    
    const nombreProducto = document.getElementById('nombre').value;
    const precioProducto = document.getElementById('precio').value;
    const urlProducto = document.getElementById('url').value;

}







routerProductos.get('', (req, res) => {
    res.json(productos);
});

routerProductos.get('/:id', (req, res) => {
    const idProducto = req.params.id;
    const productoEncontrado = productos.find(productos => productos.id == idProducto);
    if(!productoEncontrado){
        res.status(404).send('Producto no encontrado')
    }else{
        res.json(productoEncontrado);
    }
});

routerProductos.post('', (req, res) => {

    res.render('index')
    let id = productos.length + 1;
    productos['id'] = id;
    
    productos.push(nombreProducto, precioProducto, urlProducto);

    res.json(productos);
});

routerProductos.put('/:id', (req, res) => {
    const idProducto = req.params.id;
    const productoEncontrado = productos.find(productos => productos.id == idProducto);
    if(!productoEncontrado){
        res.status(404).send('Producto no encontrado')
    }else{
        const idEliminar = idProducto - 1;
        if(idEliminar == 0){
            productos.splice(idEliminar, idEliminar + 1);
            productos.push(nombreProducto, precioProducto, urlProducto, idProducto);
            res.json(productos);
        }else{
            productos.splice(idEliminar, idEliminar)
            productos.push(nombreProducto, precioProducto, urlProducto, idProducto);
            res.json(productos);
        }
        
    }
});

routerProductos.delete('/:id', (req, res) => {
    const idProducto = req.params.id;
    const productoEncontrado = productos.find(productos => productos.id == idProducto);
    if(!productoEncontrado){
        res.status(404).send('Producto no encontrado')

    }else{
        const idEliminar = idProducto - 1;
        if(idEliminar == 0){
            productos.splice(idEliminar, idEliminar + 1);
            res.json(productos);
        }else{
            productos.splice(idEliminar, idEliminar)
            res.json(productos);
        }
        
    }
});


const server = app.listen(8080, () => {
    console.log(`Servidor Http escuchando en el puerto ${server.address().port}`)
})