import { assertEquals } from '$std/assert/assert_equals.ts'
import Node from './index.ts'

Deno.test('Creates a Node with a value as <T>', () => {
  const numericNode = new Node<number>(1)
  assertEquals(numericNode.value, 1)
  assertEquals(numericNode.next, undefined)

  const stringNode = new Node<string>('Hello')
  assertEquals(stringNode.value, 'Hello')
  assertEquals(stringNode.next, undefined)
})
