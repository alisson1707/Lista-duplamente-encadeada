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

    // Verifica se a lista está vazia
    public isEmpty(): boolean {
        return this.size === 0;
    }

    // Retorna o tamanho da lista
    public getSize(): number {
        return this.size;
    }

    // Adiciona no início
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

    // Adiciona no final
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

    // Adiciona em uma posição específica
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

    // Remove o primeiro elemento
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

    // Remove o último elemento
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

    // Remove em uma posição específica
    public removeAt(position: number): T | null {
        if (this.isEmpty() || position < 0 || position >= this.size) {
            return null;
        }

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

    // Verifica se um valor existe na lista
    public contains(value: T): boolean {
        let current = this.head;

        while (current !== null) {
            if (current.value === value) return true;
            current = current.next;
        }

        return false;
    }

    // Exibe do início para o fim
    public printForward(): void {
        let current = this.head;
        let output = "";

        while (current !== null) {
            output += current.value + " ";
            current = current.next;
        }

        console.log(output.trim());
    }

    // Exibe do fim para o início
    public printBackward(): void {
        let current = this.tail;
        let output = "";

        while (current !== null) {
            output += current.value + " ";
            current = current.prev;
        }

        console.log(output.trim());
    }
}
