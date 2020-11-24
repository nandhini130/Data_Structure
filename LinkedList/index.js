// Linked List in JavaScript
// 10 --> 5 --> 16

// let linkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5, 
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

class MyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode
    this.length++;
    // console.log(JSON.stringify(this.head));

    return this;
  }

  prepend(value) {
     const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    // console.log(JSON.stringify(this.head));
    return this;
  }

  printList(){
    const listArray = [];
    let currentNode =  this.head;
    while(currentNode !== null) {
      listArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listArray;
  }

  insert(index, value) {

    if(index >= this.length ) {
      this.append(value);
      return this.printList();
    }

    if (index === 0) {
      this.prepend(value);
      this.length++;
      return this.printList();
    }

    const newNode = {
      value: value,
      next: null
    }

    let leader = this.traverseNode(index-1);
    const holdPointer = leader.next;
    leader.next =  newNode;
    newNode.next = holdPointer;
    this.length++;
    return this.printList();
    
  }

  remove(index) {
    if(index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }

    let leader = this.traverseNode(index-1);
    let holdPointer = leader.next;
    leader.next = holdPointer.next;
    this.length--;
    return this.printList();
  }

  traverseNode(index) {
    let i = 0;
    let currentNode =  this.head;
    while(i !== index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;

  }
}

const newLinkedList = new MyLinkedList(10)
newLinkedList.append(5);
newLinkedList.append(16);
newLinkedList.prepend(1);
newLinkedList.append(12);
newLinkedList.printList();
newLinkedList.insert(2, 99);
newLinkedList.insert(0, 9);
newLinkedList.remove(0);

