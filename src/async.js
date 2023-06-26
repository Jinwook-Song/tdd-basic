async function fetchProduct(error) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  if (error === 'error') {
    return Promise.reject('network error');
  }
  return Promise.resolve({ item: 'milk', price: 200 });
}

module.exports = fetchProduct;
