/**
 * TrieNode implementation to store a string character
 * with its numerical value if any.
 *
 * @class TrieNode
 * @classdesc Represents a Node in a Trie.
 */
class TrieNode {
  public children: Map<string, TrieNode>
  public value: number | undefined

  constructor() {
    this.children = new Map()
    this.value = undefined
  }
}

export default TrieNode
