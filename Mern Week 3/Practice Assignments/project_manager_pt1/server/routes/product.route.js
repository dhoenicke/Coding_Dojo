const productController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', productController.getAllProducts);
    app.get('/api/product/:id', productController.getProduct);
    app.post('/api/product/new', productController.createProduct);
    app.put('/api/product/:id/edit', productController.updateProduct);
    app.delete("/api/product/:id/delete", productController.deleteProduct);
}