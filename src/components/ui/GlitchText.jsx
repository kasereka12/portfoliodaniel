import { useState, useEffect, useCallback } from 'react'

// Caractères de substitution pour l'effet glitch
const GLITCH_CHARS = 'アイウエオカキクケコ#$%&*@!01アイウ<>[]{}|'

/**
 * Composant texte avec effet glitch au survol (ou au montage).
 * @param {string}  text          - Texte à afficher
 * @param {string}  className     - Classes CSS additionnelles
 * @param {string}  as            - Tag HTML à utiliser (span, h1, h2…)
 * @param {boolean} glitchOnMount - Déclenche le glitch automatiquement au montage
 */
const GlitchText = ({
  text,
  className = '',
  as: Tag = 'span',
  glitchOnMount = false,
}) => {
  const [displayText, setDisplayText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  const triggerGlitch = useCallback(() => {
    if (isGlitching) return
    setIsGlitching(true)

    let iteration = 0
    const totalIterations = 12

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            // Les premiers chars se stabilisent progressivement
            if (i < (iteration / totalIterations) * text.length) return text[i]
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
          })
          .join('')
      )

      iteration++
      if (iteration > totalIterations) {
        clearInterval(interval)
        setDisplayText(text)
        setIsGlitching(false)
      }
    }, 45)
  }, [text, isGlitching])

  useEffect(() => {
    if (glitchOnMount) {
      const t = setTimeout(triggerGlitch, 400)
      return () => clearTimeout(t)
    }
  }, [glitchOnMount, triggerGlitch])

  // Re-sync si le texte prop change
  useEffect(() => {
    setDisplayText(text)
  }, [text])

  return (
    <Tag
      className={`cursor-default select-none ${className}`}
      onMouseEnter={triggerGlitch}
    >
      {displayText}
    </Tag>
  )
}

export default GlitchText
