import { useEffect, useRef } from 'react'

// Caractères japonais + chiffres pour l'effet matrix
const CHARS =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨ0123456789アβΩΣ'

/**
 * Canvas animé avec une pluie de caractères style Matrix.
 * S'adapte automatiquement à la taille de la fenêtre.
 */
const MatrixRain = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const fontSize = 13
    let animId
    let drops = []

    const init = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      const cols = Math.floor(canvas.width / fontSize)
      drops = Array.from({ length: cols }, () =>
        Math.floor(Math.random() * -(canvas.height / fontSize))
      )
    }

    const draw = () => {
      // Fondu progressif du fond
      ctx.fillStyle = 'rgba(3, 7, 18, 0.06)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drops.forEach((drop, i) => {
        const char  = CHARS[Math.floor(Math.random() * CHARS.length)]
        const alpha = Math.max(0.05, 0.6 - (drop * fontSize) / canvas.height)

        ctx.fillStyle = `rgba(6, 182, 212, ${alpha})`
        ctx.font      = `${fontSize}px monospace`
        ctx.fillText(char, i * fontSize, drop * fontSize)

        // Reset aléatoire de la colonne en bas
        if (drop * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      })

      animId = requestAnimationFrame(draw)
    }

    const onResize = () => {
      init()
    }

    init()
    // Légère temporisation pour ne pas bloquer le rendu initial
    const startTimer = setTimeout(() => {
      animId = requestAnimationFrame(draw)
    }, 100)

    window.addEventListener('resize', onResize)

    return () => {
      clearTimeout(startTimer)
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-15 pointer-events-none"
      aria-hidden="true"
    />
  )
}

export default MatrixRain
