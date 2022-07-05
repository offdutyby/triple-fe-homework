const countEasing = (rate: number) => {
  if (rate === 1) {
    return 1
  }

  return 1 - Math.pow(2, -10 * rate)
}

export default countEasing
