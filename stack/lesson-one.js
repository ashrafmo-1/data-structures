class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(element) {
        this.items[this.count] = element;
        console.log(`${element} pushed to stack ${this.count}`)

        // this.items.push(element); // Add new element to the end of the array
        // this.items.unshift(element); // Add new element to the beginning of the array

        this.count++;
    }

    pop() {
        if (this.count === 0) {
            console.log("Stack is empty. Cannot pop.");
            return null;
        }
        const removedElement = this.items[this.count - 1];
        console.log(`${removedElement} popped from stack ${this.count - 1}`)

        // this.items.pop(); // Remove last element from the array
        // this.items.shift(); // Remove first element from the array

        this.count--;
        return removedElement;
    }

    lenght() {
        console.log(`count elements ${this.count}`);
        
    }

    clear() {
        this.items = [];
        this.count = 0;
        console.log("Stack cleared");
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();
stack.lenght();
// stack.clear();