import { useEffect, useState } from 'react'

import countEasing from 'utils/countEasing'

const useCount = (maxCount: number) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const effectDuration = 2000
    const perFrame = 1000 / 60
    let currentCount = 0

    const intervalCounter = setInterval(() => {
      currentCount += 1
      const durationDevision = Math.round(effectDuration / perFrame)
      const progressPercentage = countEasing(currentCount / durationDevision)
      const currentCountState = Math.round(maxCount * progressPercentage)

      setCount(currentCountState)

      if (currentCountState === maxCount) {
        clearInterval(intervalCounter)
      }
    }, perFrame)
  }, [maxCount])

  return count
}

export default useCount
