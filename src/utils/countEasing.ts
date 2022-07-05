const countEasing = (rate: number): number => {
  return rate === 1 ? 1 : 1 - Math.pow(2, -10 * rate)
}

export default countEasing
