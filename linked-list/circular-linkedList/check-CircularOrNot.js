class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
      return this.size===0
    }

    getSize(){
        return this.size
    }

    append(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
            node.next = this.head;
        }else{
            
            this.tail.next = node
            this.tail = node  
            this.tail.next = this.head    
        }
        this.size++
    }
    checkCycle(){
        if (this.isEmpty()) {
            return false
        }
            let curr = this.head
            while(curr && curr.next!== this.head){
                curr = curr.next
            }
            if (curr.next == this.head) {
                return true
            }
        return false

    }
    // OR
    checkCycle() {
        if (this.isEmpty()) {
          return false;
        }
    
        let current = this.head;
        let prev = this.head;
    
        while (current && current.next) {
            current = current.next;
            prev = prev.next.next;    
          if (current === prev) {
            return true;
          }
        }
    
        return false;
      }

      
    print(){
        let current = this.head
        while(current){
           console.log( current.value);
           current = current.next
        }
    }
  
}
const list = new linkedList(Node)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)

console.log(list.checkCycle());
console.log(list);