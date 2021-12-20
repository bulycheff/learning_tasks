class LinkedListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }

  toString() {
    return `${this.value}`
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(value) {
    let newNode = new LinkedListNode(value)

    if (!this.head && !this.tail) {
      this.head = newNode
      this.tail = newNode

      return this
    }

    this.tail.next = newNode
    this.tail = newNode

    return this
  }

  prepend(value) {
    let newNode = new LinkedListNode(value, this.head)
    this.head = newNode

    if (!this.tail) {
      this.tail = newNode

    }

    return this

  }

  find(value) {
    if (!this.head) return null

    let currentNode = this.head

    while (currentNode) {

      if (currentNode.value === value) return currentNode
      currentNode = currentNode.next

    }

    return null
  }

  delete(value) {
    if (!this.head) return null

    let deletedNode = null

    while (this.head && this.head.value === value) {

      deletedNode = this.head
      this.head = this.head.next

    }

    let currentNode = this.head

    while (currentNode.next) {

      if (currentNode.next.value === value) {
        deletedNode = currentNode.next
        currentNode.next = currentNode.next.next
      } else {
        currentNode = currentNode.next
      }

    }

    if (this.tail?.value === value) {
      this.tail = currentNode
    }

    return deletedNode

  }

  insertAfter(value, prevNode) {
    if (prevNode === null) return this

    let newNode = new LinkedListNode(value)
    newNode.next = prevNode.next
    prevNode.next = newNode

    if (this.tail === prevNode) {
      this.tail = newNode
    }

    return this

  }

  toArray() {
    const nodes = []
    let currentNode = this.head

    while (currentNode) {

      nodes.push(currentNode)
      currentNode = currentNode.next

    }

    return nodes
  }

  toString() {
    return this.toArray().map(node => node.toString()).toString()

  }

}

module.exports = { LinkedList }