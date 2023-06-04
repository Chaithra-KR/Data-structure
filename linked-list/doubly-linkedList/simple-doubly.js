class Node{
    constructor(value){
        this.value = value
        this.next =null
        this.prev = null
    }
}

class linkedList{
    constructor(){
        this.head =null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size===0
    }

    append(value){
       const node = new Node(value)
       if (this.isEmpty()) {
        this.head = node
       }else{
        node.prev = this.tail
        this.tail.next = node
       }
       this.tail = node
       this.size++
    }
    display(){
        let curr = this.head
        while(curr){
            console.log(curr.value);
            curr = curr.next
        }
    }
   
}

const list = new linkedList()
list.append(1)
list.append(2)
list.append(3)
list.display()
