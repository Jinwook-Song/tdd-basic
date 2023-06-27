const fetchProducts = require('../async.js');

describe('Async', () => {
  const successReturn = { item: 'milk', price: 200 };
  const wrongReturn = { item: 'milk', price: 100 };

  it('async-done', (done) => {
    fetchProducts().then((item) => {
      expect(item).toEqual(successReturn);
      done();
    });
  });

  it('async-return', () => {
    return fetchProducts().then((item) => {
      expect(item).toEqual(successReturn);
    });
  });

  it('async-await', async () => {
    const product = await fetchProducts();
    expect(product).toEqual(successReturn);
  });

  it('async-await', async () => {
    const product = await fetchProducts();
    expect(product).not.toEqual(wrongReturn);
  });

  it('async-resolves', async () => {
    return expect(fetchProducts()).resolves.toEqual(successReturn);
  });

  it('async-reject', async () => {
    return expect(fetchProducts('error')).rejects.toBe('network error');
  });
});
