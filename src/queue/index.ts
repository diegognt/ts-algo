// Linked list implementation of a queue data structure

import Node from '../node/index.ts'

/**
 * @class
 * @classdesc Represents a Queue data structure using a Linked list.
 */
class Queue<T> {
  private first: Node<T> | undefined
  private last: Node<T> | undefined

  constructor() {
    this.first = undefined
    this.last = undefined
  }

  /**
   * @returns {boolean} Whether the Queue is empty or not.
   */
  private isEmpty(): boolean {
    return this.first === undefined
  }

  /**
   * Adds an item to the end of the Queue.
   * @param {T} item The item to be added to the Queue.
   */
  enqueue(item: T): void {
    if (!this.first) {
      this.first = this.last = new Node<T>(item)
    } else {
      this.last!.next = new Node<T>(item)
      this.last = this.last!.next
    }
  }

  /**
   * Removes the first item from the Queue.
   * @returns {T} The first item in the Queue.
   */
  dequeue(): T {
    if (this.isEmpty()) throw new Error('The Queue is empty')

    const item = this.first
    this.first = this.first!.next

    return item!.value
  }

  /**
   * @returns {number} The number of items in the Queue.
   */
  length(): number {
    if (this.isEmpty()) return 0

    let length = 1
    let current = this.first

    while (current!.next) {
      length++
      current = current!.next
    }

    return length
  }
}

export default Queue
