const countEasing = (rate: number) => {
  return rate < 0.5 ? 2 * rate * rate : -1 + (4 - 2 * rate) * rate
}

export default countEasing
