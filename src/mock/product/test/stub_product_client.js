class StubProductClient {
  async fetchItems() {
    return [
      { item: '🍎', available: true },
      { item: '🥑', available: true },
      { item: '🧀', available: false },
      { item: '🥝', available: false },
    ];
  }
}

module.exports = StubProductClient;
