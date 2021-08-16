class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    addFirst(data){
        this.head=new Node(data,this.head);
    }
    
    printll(curr=this.head){
        while(curr){
            console.log(curr.data)
            curr=curr.next;
        }
    }
}

let ll=new LinkedList();
ll.addFirst(10);
ll.printll();

