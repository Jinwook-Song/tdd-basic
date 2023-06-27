const ProductClient = require('./product_client');

class ProductService {
  constructor() {
    this.productClient = new ProductClient();
  }

  fetchAvailbaleItems() {
    return this.productClient
      .fetchItems()
      .then((itmes) => itmes.filter((item) => item.available));
  }
}

module.exports = ProductService;
