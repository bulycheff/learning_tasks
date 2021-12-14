const constructPointVariants = n => new Set(Array.from({ length: n }, (_, i) => i + 1))
const constructBoard = n => Array.from({ length: n * n }, () => constructPointVariants(n))
const getCellIndicesFromRowIndex = (rowIndex, n) => Array.from({ length: n }, (_, i) => rowIndex * n + i)
const getCellIndicesFromColIndex = (colIndex, n) => Array.from({ length: n }, (_, i) => colIndex + i * n)

const getCellIndicesFromClueIndex = (clueIndex, N) => {
  if (clueIndex < N) {
    // top side
    return getCellIndicesFromColIndex(clueIndex, N)
  } else if (clueIndex >= N && clueIndex < 2 * N) {
    // right side
    return getCellIndicesFromRowIndex(clueIndex - N, N).reverse()
  } else if (clueIndex >= 2 * N && clueIndex < 3 * N) {
    // bottom side
    return getCellIndicesFromColIndex(3 * N - clueIndex - 1, N).reverse()
  } else if (clueIndex >= 3 * N && clueIndex < 4 * N) {
    // left side
    return getCellIndicesFromRowIndex(4 * N - clueIndex - 1, N)
  }
}

console.log(getCellIndicesFromClueIndex(7, 4))
