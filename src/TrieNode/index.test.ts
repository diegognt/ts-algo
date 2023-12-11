import { assertEquals } from '$std/assert/assert_equals.ts'
import TrieNode from './index.ts'

Deno.test('Creates a TrieNode with a value of "7".', () => {
  const trieNode = new TrieNode()
  trieNode.value = 7
  assertEquals(trieNode.value, 7)
  assertEquals(trieNode.children.size, 0)
})

Deno.test('Creates a TrieNode with a value of "undefined".', () => {
  const trieNode = new TrieNode()
  assertEquals(trieNode.value, undefined)
  assertEquals(trieNode.children.size, 0)
})

Deno.test('Creates a TrieNode with a value as "undefined" and a child.', () => {
  const trieNode = new TrieNode()
  trieNode.children.set('7', new TrieNode())
  assertEquals(trieNode.value, undefined)
  assertEquals(trieNode.children.size, 1)
})
