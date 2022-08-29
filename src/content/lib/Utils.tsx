/* eslint-disable @typescript-eslint/no-floating-promises */
import confetti from 'canvas-confetti'

export const shootFireworks = () => {
    const duration = 15 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min
    }

    const interval: NodeJS.Timer = setInterval(function () {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
            return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)

        // since particles fall down, start a bit higher than random
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.2, 0.4), y: Math.random() - 0.2 },
            })
        )
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.6, 0.8), y: Math.random() - 0.2 },
            })
        )
    }, 250)
}
