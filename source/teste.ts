import { DoublyLinkedList } from "./lista";

const list = new DoublyLinkedList<number>();

console.log("=== Adicionando elementos ===");
list.addFirst(10);
list.addLast(20);
list.addLast(30);
list.addAt(15, 1);

console.log("\n=== Lista do início para o fim ===");
list.printForward();

console.log("\n=== Lista do fim para o início ===");
list.printBackward();

console.log("\n=== Verificação de existência de valores ===");
console.log("Contém 20?", list.contains(20));
console.log("Contém 99?", list.contains(99));

console.log("\n=== Removendo elementos ===");
console.log("Remove primeiro:", list.removeFirst());
console.log("Remove último:", list.removeLast());
console.log("Remove da posição 1:", list.removeAt(1));

console.log("\n=== Lista após remoções ===");
list.printForward();

console.log("\n=== Removendo último elemento restante ===");
console.log("Remove último:", list.removeLast());

console.log("\n=== Tentando remover da lista vazia ===");
console.log("Remove primeiro (10):", list.removeFirst());   // null
console.log("Remove último (30):", list.removeLast());      // null
console.log("Remove da posição 0 (15):", list.removeAt(0)); // null
console.log("Remove da posição 1 (20):", list.removeAt(1)); // null

console.log("\n=== Estado final da lista ===");
console.log("Tamanho da lista:", list.getSize());
console.log("Lista está vazia?", list.isEmpty());
