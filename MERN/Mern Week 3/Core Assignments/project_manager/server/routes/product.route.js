const productController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', productController.getAllProducts);
    app.get('/api/product/:id', productController.getProduct);
    app.post('/api/product/new', productController.createProduct);
    app.put('/api/product/update/:id', productController.updateProduct);
    app.delete("/api/product/delete/:id", productController.deleteProduct);
}