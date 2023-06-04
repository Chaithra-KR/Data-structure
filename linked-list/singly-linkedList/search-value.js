class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
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

    search(value){
        if(this.isEmpty()){
            return -1
        }else{
            let i=0
            let curr = this.head
            while(curr){
                if(curr.value==value){
                    return i
                }
                curr = curr.next
                i++
            }
            return -1
        }
    }
    
}

const list = new linkedList()
list.prepend(20)
list.prepend(10)
console.log("position of the value",list.search(20));
console.log(list);