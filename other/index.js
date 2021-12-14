function printArg(a) {
  return () => {
    console.log(a)
  }
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    printArg(i)
  }, 0)
}