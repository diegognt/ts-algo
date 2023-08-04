/**
 * @class
 * @classdesc Represents a Node in a linked list.
 */
class Node<T> {
  value: T
  next: Node<T> | undefined

  constructor(value: T) {
    this.value = value
    this.next = undefined
  }
}

export default Node
