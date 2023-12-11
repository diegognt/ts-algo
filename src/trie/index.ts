import TrieNode from '../TrieNode/index.ts'

/**
 * Trie implementation to store a Digit with its numerical value.
 *
 * @class Trie
 * @classdesc Represents a Trie.
 */
class Trie {
  root: TrieNode

  constructor() {
    this.root = new TrieNode()
  }

  /**
   * Insert a digit with its value into the Trie.
   *
   * @param {string} digit The to be inserted.
   * @param {} value The value of the digit.
   */
  insert(digit: string, value: number): void {
    let currentNode: TrieNode = this.root

    for (const character of digit) {
      // If the current node has child key with the current character
      if (currentNode.children.has(character)) {
        // Follow the existing path
        currentNode = currentNode.children.get(character) as TrieNode
      } else {
        // If the current  node's children is not found
        // among the current node's children, we add it.
        const newNode = new TrieNode()
        currentNode.children.set(character, newNode)

        // Follow the new node
        currentNode = newNode

        // After inserting the entire digit, we set the value
        currentNode.value = value
      }
    }
  }

  /**
   * Search for a digit in the Trie.
   *
   * @param {string} digit The digit to be searched.
   */
  search(digit: string): number | undefined {
    let currentNode: TrieNode = this.root

    for (const character of digit) {
      // If the current node has child key with the current character
      if (currentNode.children.has(character)) {
        // Follow the existing path
        currentNode = currentNode.children.get(character) as TrieNode
      } else {
        // If the current node's children is not found
        // among the current node's children, returns undefined.
        return undefined
      }

      // Returns the value of the last node
      return currentNode.value
    }
  }
}

export default Trie
