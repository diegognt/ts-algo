import { assertEquals } from '$std/assert/assert_equals.ts'
import Queue from './index.ts'

Deno.test('The queue is created without Nodes', () => {
  const queue = new Queue<number>()

  assertEquals(queue.length(), 0)
})

Deno.test('Enqueue adds a Node to the queue and dequeue the same node', () => {
  const queue = new Queue<number>()

  queue.enqueue(1)

  assertEquals(queue.length(), 1)
  assertEquals(queue.dequeue(), 1)
  assertEquals(queue.length(), 0)
})

Deno.test('Enqueues several values and dequeue them frest as FIFO', () => {
  const queue = new Queue<string>()

  queue.enqueue('Jhon')
  queue.enqueue('Maria')
  queue.enqueue('Peter')

  assertEquals(queue.length(), 3)
  assertEquals(queue.dequeue(), 'Jhon')
  assertEquals(queue.length(), 2)
  assertEquals(queue.dequeue(), 'Maria')
  assertEquals(queue.length(), 1)
  assertEquals(queue.dequeue(), 'Peter')
  assertEquals(queue.length(), 0)
})
