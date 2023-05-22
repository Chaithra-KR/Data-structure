class Node{
    constructor(value){
        this.value =value
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
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail =node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    removeFrom(index){
        if(index <0 || index>this.size){
            return
        }
        let removedNode
        if(index===0){
            removedNode = this.head
            this.head = removedNode.next
        }else{
            let prev = this.head
            for(let i =0;i<index-1;i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    //with tail
    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.tail.value
        if(this.size==1){
            this.head = null
            this.tail = null
        }else{
            let prev = this.head
            while(prev.next != this.tail){
                prev =prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }
    removeFromFrond(){
        if(this.isEmpty()){
            return null
        }
        let value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }
}

const list = new linkedList()
list.prepend(30)
list.prepend(20)
list.prepend(10)
// console.log("removed value is",list.removeFrom(1));
list.removeFromEnd()
list.removeFromFrond()
console.log(list);
