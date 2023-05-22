class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size===0
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let Next = curr.next
            curr.next = prev
            prev = curr
            curr = Next
        }
        this.head =prev
    }
}

const list = new linkedList()
list.prepend(30)
list.prepend(20)
list.prepend(10)
console.log(list);
list.reverse()
console.log(list);