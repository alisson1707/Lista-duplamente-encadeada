class Node<T> {
    public value: T;
    public next: Node<T> | null;
    public prev: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private size: number = 0;

    public isEmpty(): boolean {
        return this.size === 0;
    }

    public getSize(): number {
        return this.size;
    }

    public addFirst(value: T): void {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head!.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    public addLast(value: T): void {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    public addAt(value: T, position: number): boolean {
        if (position < 0 || position > this.size) return false;

        if (position === 0) {
            this.addFirst(value);
            return true;
        }

        if (position === this.size) {
            this.addLast(value);
            return true;
        }

        let current = this.head!;
        for (let i = 0; i < position; i++) {
            current = current.next!;
        }

        const newNode = new Node(value);
        newNode.prev = current.prev;
        newNode.next = current;

        current.prev!.next = newNode;
        current.prev = newNode;

        this.size++;
        return true;
    }

    public removeFirst(): T | null {
        if (this.isEmpty()) return null;

        const value = this.head!.value;

        if (this.size === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head!.next;
            this.head!.prev = null;
        }

        this.size--;
        return value;
    }

    public removeLast(): T | null {
        if (this.isEmpty()) return null;

        const value = this.tail!.value;

        if (this.size === 1) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail!.prev;
            this.tail!.next = null;
        }

        this.size--;
        return value;
    }

    public removeAt(position: number): T | null {
        if (this.isEmpty() || position < 0 || position >= this.size) return null;

        if (position === 0) return this.removeFirst();
        if (position === this.size - 1) return this.removeLast();

        let current = this.head!;
        for (let i = 0; i < position; i++) {
            current = current.next!;
        }

        current.prev!.next = current.next;
        current.next!.prev = current.prev;

        this.size--;
        return current.value;
    }

    public contains(value: T): boolean {
        let current = this.head;

        while (current !== null) {
            if (current.value === value) return true;
            current = current.next;
        }

        return false;
    }

    public printForward(): void {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    public printBackward(): void {
        let current = this.tail;
        while (current !== null) {
            console.log(current.value);
            current = current.prev;
        }
    }

    public getAt(position: number): T | null {
        if (position < 0 || position >= this.size) return null;

        let current = this.head!;
        for (let i = 0; i < position; i++) {
            current = current.next!;
        }

        return current.value;
    }
}
