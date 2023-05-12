class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail =null
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
//   prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }

  //prepend with tail
  prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node
        this.tail =node
    }else{
        node.next =this.head
        this.head = node
    }
    this.size++
  }


  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      while (curr) {
        console.log(curr.value);
        curr = curr.next;
      }
    }
  }

}

const list = new linkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
console.log(list);