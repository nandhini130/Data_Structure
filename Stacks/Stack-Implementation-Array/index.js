class Stack {
  constructor() {
    this.arr = [];
  }

  push(value) {
    this.arr.unshift(value)
    console.log(this.arr);
    // return this;
  }

  pop() {
    this.arr.shift();
  return this;
  }

  peek() {
    return this.arr[0]
  }

}

const mystack = new Stack();
mystack.push(1)
mystack.push(10)
mystack.push(100)
mystack.peek();
mystack.pop();
mystack.pop();
mystack.pop();
