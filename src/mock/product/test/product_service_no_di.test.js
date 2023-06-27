const ProductClient = require('../product_client');
const ProductService = require('../product_service_no_di');

jest.mock('../product_client');

describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [
    { item: '🍎', available: true },
    { item: '🥑', available: true },
    { item: '🧀', available: false },
    { item: '🥝', available: false },
  ]);

  // mocking하여 Product client의 영항을 받지 않는다
  // 모듈간의 의존성 제거
  ProductClient.mockImplementation(() => ({ fetchItems }));

  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it('should filter out only availbale items', async () => {
    const items = await productService.fetchAvailbaleItems();
    expect(items).toContainEqual({ item: '🍎', available: true });
    expect(items).toContainEqual({ item: '🥑', available: true });
  });
});
