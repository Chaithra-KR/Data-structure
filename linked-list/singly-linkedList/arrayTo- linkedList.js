class Node{
    constructor(value){
        this.value = value
        this.next  = null
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
let array = [1,2,3,4]
for (let i = 0; i < array.length; i++) {
list.append(array[i])
}

console.log(list);