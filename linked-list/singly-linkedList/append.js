// A constructor is a special method or function within a class that is automatically called when an object of that
// class is created. Its primary purpose is to initialize the object's state and set up its initial properties.
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
        this.tail =null
    }

    isEmpty(){
        return this.size===0
    }
    // append(value){
    //     const node = new Node(value)
    //     if(this.isEmpty()){
    //         this.head = node
    //     }else{
    //         let prev = this.head
    //         while(prev.next){
    //             prev = prev.next
    //         }
    //         prev.next = node
    //     }
    //     this.size++
    // }

    //append with tail
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){ 
            this.head = node
            this.tail = node
        }else{ 
            this.tail.next = node
            this.tail =node
        }
        this.size++
    }
}

const list = new linkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(40)

console.log(list);