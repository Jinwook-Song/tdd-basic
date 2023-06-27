class ProductService {
  constructor(productClient) {
    this.productClient = productClient;
  }

  fetchAvailbaleItems() {
    return this.productClient
      .fetchItems()
      .then((itmes) => itmes.filter((item) => item.available));
  }
}

module.exports = ProductService;
