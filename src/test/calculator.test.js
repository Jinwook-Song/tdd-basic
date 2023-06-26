const Calculator = require('../calculator');

describe('Calculator', () => {
  let cal;

  /**
   * 모든 테스트는 서로 영향을 주지 않기 위해 독립적(개별적)으로 시행되어야 하기 떄문에
   * test전에 새롭게 초기화 해야한다
   */
  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(7);
    expect(cal.value).toBe(7);
  });

  it('clear', () => {
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('add', () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  it('subtract', () => {
    cal.set(5);
    cal.subtract(12);
    expect(cal.value).toBe(-7);
  });

  it('multiplies', () => {
    cal.set(2);
    cal.multiply(5);
    expect(cal.value).toBe(10);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it('6 / 2 === 3', () => {
      cal.set(6);
      cal.divide(2);
      expect(cal.value).toBe(3);
    });
  });
});
