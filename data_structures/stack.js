function Stack() {
  this.count = 0
  this.storage = 0

  this.push = function (value) {
    this.storage[this.count] = value
    this.count++
  }

  this.pop = function () {
    if (this.count === 0) return undefined
    this.count--
    let result = this.storage[this.count]
    delete this.storage[this.count]
    return result
  }

  this.peak = function () {
    return this.storage[this.count - 1]
  }

  this.size = function () {
    return this.count
  }

}

let arr = new Stack()
arr.push(1)
arr.push(2)

console.log(arr.storage)
