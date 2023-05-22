class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size ===0
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

    removeBy(value){
        if(this.isEmpty()){
            return null
        }
        let removedNode
        if(this.head.value ==value){
           this.head = this.head.next
           this.size--
           return value
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                let removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }
   
}

const list = new linkedList()
list.prepend(3) 
list.prepend(22)
list.prepend(1)
list.removeBy(22)
console.log(list);  