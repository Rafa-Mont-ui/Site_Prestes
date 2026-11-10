"use client"

import { useEffect, useState, type RefObject } from "react"
import { cn } from "@/lib/utils"

type CarouselDotsProps = {
  scrollerRef: RefObject<HTMLDivElement | null>
  count: number
  className?: string
}

// Indicador de posição dos carrosséis do celular. A partir de md os cartões viram grade,
// então o indicador some.
export function CarouselDots({ scrollerRef, count, className }: CarouselDotsProps) {
  const [active, setActive] = useState(0)

  const cardOffsets = (el: HTMLDivElement) => {
    const cards = Array.from(el.children) as HTMLElement[]
    return cards.map((card) => card.offsetLeft - cards[0].offsetLeft)
  }

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    const onScroll = () => {
      const offsets = cardOffsets(el)
      // No fim da rolagem o último cartão não chega a encostar na borda: considera ativo
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
        setActive(offsets.length - 1)
        return
      }
      let closest = 0
      offsets.forEach((offset, i) => {
        if (Math.abs(offset - el.scrollLeft) < Math.abs(offsets[closest] - el.scrollLeft)) closest = i
      })
      setActive(closest)
    }

    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [scrollerRef])

  const goTo = (index: number) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollTo({ left: cardOffsets(el)[index], behavior: "smooth" })
  }

  return (
    <div className={cn("mt-4 flex justify-center gap-2 md:hidden", className)}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => goTo(i)}
          aria-label={`Ir para o item ${i + 1} de ${count}`}
          aria-current={i === active}
          className={cn(
            "relative h-2 rounded-full transition-all after:absolute after:-inset-3",
            i === active ? "w-6 bg-brand" : "w-2 bg-border"
          )}
        />
      ))}
    </div>
  )
}
