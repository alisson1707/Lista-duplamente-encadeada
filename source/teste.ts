import { DoublyLinkedList } from "./lista";

const list = new DoublyLinkedList<number>();

list.addFirst(10);
list.addLast(20);
list.addLast(30);
list.addAt(15, 1);

list.printForward();    // 10 15 20 30
list.printBackward();   // 30 20 15 10

console.log(list.contains(20)); // true
console.log(list.contains(99)); // false

console.log(list.removeFirst()); // 10
console.log(list.removeLast());  // 30
console.log(list.removeAt(1));   // 20

list.printForward(); // 15
console.log(list.getSize()); // 1
console.log(list.isEmpty()); // false