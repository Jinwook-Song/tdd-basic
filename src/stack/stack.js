class Stack {
  constructor() {
    this.array = [];
  }

  size() {
    return this.array.length;
  }

  push(item) {
    this.array.push(item);
  }

  pop() {
    if (this.array.length === 0) {
      throw new Error('Stack is empty');
    } else {
      return this.array.pop();
    }
  }

  peek() {
    if (this.array.length === 0) {
      throw new Error('Stack is empty');
    } else {
      return this.array.at(-1);
    }
  }
}

module.exports = Stack;
