const ProductService = require('../product_service_di');
const StubProductClient = require('./stub_product_client');

// DI를 통해 Stub 버전의 Client로 테스트를 할 수 있다.
describe('ProductService-Stub', () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it('should filter out only availbale items', async () => {
    const items = await productService.fetchAvailbaleItems();
    expect(items).toContainEqual({ item: '🍎', available: true });
    expect(items).toContainEqual({ item: '🥑', available: true });
  });
});
