class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor() {
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
    insert(value,index){
        if(index < 0 || index > this.size){
            return
        }
        if(index===0){
            this.prepend(value)
        }else{
           const node = new Node(value)
           let prev = this.head
           for(let i=0;i<index-1;i++){
            prev = prev.next
           }
           node.next = prev.next
           prev.next = node 
           this.size++
        }
    }

}

const list = new linkedList()

list.prepend(20)
list.prepend(10)
list.insert(30,0)

console.log(list);

