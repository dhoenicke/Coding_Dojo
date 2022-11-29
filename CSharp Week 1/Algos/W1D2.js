class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    isEmpty() {
        return this.head == null;
    }
    insertAtFront(data) {
        const newNode = new ListNode(data);
        if (this.isEmpty()) {
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return this;
    }
}

const newNode = new ListNode(7);

const mySLL = new SLL();

mySLL.head = newNode;

console.log(mySLL.isEmpty())