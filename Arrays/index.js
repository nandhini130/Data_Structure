class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data.index;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    this.item = this.data[index];
    this.shiftElement(index);
  }

  shiftElement(index) {
    for(let i = index; i< this.length-1; i++) {
      this.data[i] = this.data[i+1];
    }
    // console.log(this.data);
    this.pop();
  }

  splice(strt, delCount, items) {
    if(delCount > 0) {
      for(let cnt = 0; cnt < delCount; cnt++) {
        this.delete(strt);
      }
    }
  }

 }

 const arr = new MyArray();
 arr.push('a');
 arr.push('b');
 arr.push('c');
 arr.push('d');
 console.log(arr.data);
 arr.splice(1,3,'z')
 arr.push('b');
 arr.push('c');
 arr.push('d');
 arr.delete(1);
 let lastItem = arr.pop();
 console.log('Removed: '+lastItem);
 console.log(arr.data);