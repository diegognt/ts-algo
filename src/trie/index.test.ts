import Trie from './index.ts'
import TrieNode from '../TrieNode/index.ts'
import { assertEquals } from '$std/assert/assert_equals.ts'

Deno.test('Creates a Trie with a root node', () => {
  const trie = new Trie()
  assertEquals(trie.root, new TrieNode())
})

Deno.test('Inserts a digit with its value into the Trie', () => {
  const trie = new Trie()
  trie.insert('one', 1)

  assertEquals(trie.root.children.has('o'), true)
  assertEquals(trie.root.children.get('o')?.children.has('n'), true)
  assertEquals(
    trie.root.children.get('o')?.children.get('n')?.children.has('e'),
    true,
  )
  assertEquals(
    trie.root.children.get('o')?.children.get('n')?.children.get('e')?.value,
    1,
  )
})

Deno.test('Searches for a digit in the Trie', () => {
  const trie = new Trie()
  trie.insert('one', 1)

  assertEquals(trie.search('one'), 1)
})

Deno.test('Returns undefined if the digit is not found in the Trie', () => {
  const trie = new Trie()
  trie.insert('one', 1)

  assertEquals(trie.search('two'), undefined)
})
