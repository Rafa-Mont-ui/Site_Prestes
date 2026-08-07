"use client"

import { useState, useMemo, useEffect } from "react"
import { Car, Home, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Plan = { months: number; adminRate: number }
type CreditRange = { min: number; max: number; plans: Plan[] }
type ProductType = {
  id: string
  name: string
  icon: typeof Car
  items: string[]
  minCredit: number
  maxCredit: number
  fundRate: number
  ranges: CreditRange[]
}

const productTypes: ProductType[] = [
  {
    id: "moveis",
    name: "Bens Móveis",
    icon: Car,
    items: ["Carros", "Motos", "Caminhões", "Barcos", "Linha Amarela"],
    minCredit: 10000,
    maxCredit: 800000,
    fundRate: 0,
    ranges: [
      {
        min: 10000,
        max: 78000,
        plans: [
          { months: 40, adminRate: 0.105 },
          { months: 60, adminRate: 0.135 },
          { months: 80, adminRate: 0.165 },
        ],
      },
      {
        min: 78001,
        max: 100000,
        plans: [
          { months: 40, adminRate: 0.085 },
          { months: 60, adminRate: 0.105 },
          { months: 80, adminRate: 0.135 },
          { months: 100, adminRate: 0.165 },
        ],
      },
      {
        min: 100001,
        max: 800000,
        plans: [
          { months: 40, adminRate: 0.085 },
          { months: 60, adminRate: 0.105 },
          { months: 90, adminRate: 0.135 },
          { months: 120, adminRate: 0.165 },
        ],
      },
    ],
  },
  {
    id: "imoveis",
    name: "Bens Imóveis",
    icon: Home,
    items: ["Novo ou Usado", "Residencial", "Comercial", "Rural", "Reforma e Construção"],
    minCredit: 80000,
    maxCredit: 1500000,
    fundRate: 0.005,
    ranges: [
      {
        min: 80000,
        max: 1500000,
        plans: [
          { months: 120, adminRate: 0.13 },
          { months: 150, adminRate: 0.16 },
          { months: 180, adminRate: 0.19 },
          { months: 210, adminRate: 0.22 },
          { months: 240, adminRate: 0.25 },
        ],
      },
    ],
  },
]

function getRangeForCredit(type: ProductType, credit: number): CreditRange {
  return (
    type.ranges.find((r) => credit >= r.min && credit <= r.max) ??
    (credit < type.ranges[0].min ? type.ranges[0] : type.ranges[type.ranges.length - 1])
  )
}

function getParcelBounds(type: ProductType, months: number) {
  let minParcel = Infinity
  let maxParcel = 0

  for (const range of type.ranges) {
    const plan = range.plans.find((p) => p.months === months) ?? range.plans[range.plans.length - 1]
    const factor = (1 + plan.adminRate + type.fundRate) / plan.months
    minParcel = Math.min(minParcel, range.min * factor)
    maxParcel = Math.max(maxParcel, range.max * factor)
  }

  return { minParcel: Math.round(minParcel), maxParcel: Math.round(maxParcel) }
}

function parcelFromCredit(type: ProductType, credit: number, months: number) {
  const range = getRangeForCredit(type, credit)
  const plan = range.plans.find((p) => p.months === months) ?? range.plans[0]
  const total = credit * (1 + plan.adminRate + type.fundRate)
  return total / plan.months
}

function creditFromParcel(type: ProductType, parcel: number, months: number) {
  let range = type.ranges[0]
  let credit = type.minCredit

  for (let i = 0; i < 3; i++) {
    const plan = range.plans.find((p) => p.months === months) ?? range.plans[0]
    credit = (parcel * plan.months) / (1 + plan.adminRate + type.fundRate)
    range = getRangeForCredit(type, credit)
  }

  return credit
}

type SimulationType = "credito" | "parcela"

type CalculatorProps = {
  embedded?: boolean
}

export function Calculator({ embedded = false }: CalculatorProps) {
  const [activeType, setActiveType] = useState(productTypes[0])
  const [activeItem, setActiveItem] = useState(productTypes[0].items[0])
  const [simulationType, setSimulationType] = useState<SimulationType>("credito")
  const [selectedMonths, setSelectedMonths] = useState(productTypes[0].ranges[0].plans[0].months)
  const [creditValue, setCreditValue] = useState(
    Math.round((productTypes[0].minCredit + productTypes[0].maxCredit) / 2)
  )
  const initialBounds = getParcelBounds(productTypes[0], productTypes[0].ranges[0].plans[0].months)
  const [parcelValue, setParcelValue] = useState(
    Math.round((initialBounds.minParcel + initialBounds.maxParcel) / 2)
  )

  const currentRange = useMemo(
    () =>
      simulationType === "credito"
        ? getRangeForCredit(activeType, creditValue)
        : getRangeForCredit(activeType, creditFromParcel(activeType, parcelValue, selectedMonths)),
    [activeType, creditValue, parcelValue, selectedMonths, simulationType]
  )

  const parcelBounds = useMemo(
    () => getParcelBounds(activeType, selectedMonths),
    [activeType, selectedMonths]
  )

  const computedCredit = useMemo(() => {
    if (simulationType === "credito") return creditValue
    return creditFromParcel(activeType, parcelValue, selectedMonths)
  }, [simulationType, creditValue, activeType, parcelValue, selectedMonths])

  const computedParcel = useMemo(() => {
    if (simulationType === "parcela") return parcelValue
    return parcelFromCredit(activeType, creditValue, selectedMonths)
  }, [simulationType, parcelValue, activeType, creditValue, selectedMonths])

  // Garante que o prazo selecionado existe na faixa atual de crédito
  useEffect(() => {
    const available = currentRange.plans.map((p) => p.months)
    if (!available.includes(selectedMonths)) {
      setSelectedMonths(available[Math.floor(available.length / 2)])
    }
  }, [currentRange, selectedMonths])

  useEffect(() => {
    if (simulationType !== "parcela") return
    if (parcelValue < parcelBounds.minParcel) {
      setParcelValue(parcelBounds.minParcel)
    } else if (parcelValue > parcelBounds.maxParcel) {
      setParcelValue(parcelBounds.maxParcel)
    }
  }, [parcelBounds, parcelValue, simulationType])

  const handleTypeChange = (type: ProductType) => {
    setActiveType(type)
    setActiveItem(type.items[0])
    const months = type.ranges[0].plans[Math.floor(type.ranges[0].plans.length / 2)].months
    setSelectedMonths(months)
    const midCredit = Math.round((type.minCredit + type.maxCredit) / 2)
    setCreditValue(midCredit)
    const bounds = getParcelBounds(type, months)
    setParcelValue(Math.round((bounds.minParcel + bounds.maxParcel) / 2))
  }

  const handleSimulationTypeChange = (type: SimulationType) => {
    if (type === simulationType) return

    if (type === "credito") {
      const credit = creditFromParcel(activeType, parcelValue, selectedMonths)
      const clamped = Math.min(Math.max(credit, activeType.minCredit), activeType.maxCredit)
      setCreditValue(Math.round(clamped))
    } else {
      const parcel = parcelFromCredit(activeType, creditValue, selectedMonths)
      const clamped = Math.min(Math.max(parcel, parcelBounds.minParcel), parcelBounds.maxParcel)
      setParcelValue(Math.round(clamped))
    }

    setSimulationType(type)
  }

  const adminRate = useMemo(() => {
    const plan =
      currentRange.plans.find((p) => p.months === selectedMonths) ?? currentRange.plans[0]
    return plan.adminRate
  }, [currentRange, selectedMonths])

  const sliderMin = simulationType === "credito" ? activeType.minCredit : parcelBounds.minParcel
  const sliderMax = simulationType === "credito" ? activeType.maxCredit : parcelBounds.maxParcel
  const sliderValue = simulationType === "credito" ? creditValue : parcelValue
  const sliderStep = simulationType === "credito" ? 1000 : 50

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)

  // Extremos do slider sem centavos, para não estourar a largura em telas estreitas
  const formatCurrencyShort = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(value)

  const sliderProgress = ((sliderValue - sliderMin) / (sliderMax - sliderMin)) * 100

  const handleSliderChange = (value: number) => {
    if (simulationType === "credito") {
      setCreditValue(value)
    } else {
      setParcelValue(value)
    }
  }

  const calculatorCard = (
          <div className="@container bg-card rounded-3xl shadow-xl border border-border overflow-hidden">
            {/* Tipos de bem */}
            <div className="grid grid-cols-2 border-b border-border">
              {productTypes.map((type) => {
                const Icon = type.icon
                return (
                  <button
                    key={type.id}
                    onClick={() => handleTypeChange(type)}
                    className={cn(
                      "flex flex-col items-center gap-2 px-4 transition-all",
                      embedded ? "py-4" : "py-5",
                      activeType.id === type.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-muted-foreground hover:bg-secondary"
                    )}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="text-sm font-medium">{type.name}</span>
                  </button>
                )
              })}
            </div>

            <div className={cn(embedded ? "p-5 @lg:p-6" : "p-6 lg:p-8")}>
              {/* Itens do tipo selecionado */}
              <div className={cn(embedded ? "mb-5" : "mb-8")}>
                <label className="block text-sm font-medium text-muted-foreground mb-3">
                  O que você quer adquirir?
                </label>
                <div className="flex flex-wrap gap-2 justify-center">
                  {activeType.items.map((item) => (
                    <button
                      key={item}
                      onClick={() => setActiveItem(item)}
                      className={cn(
                        "rounded-full text-sm font-medium transition-all",
                        embedded ? "px-3.5 py-1.5" : "px-4 py-2",
                        activeItem === item
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
                      )}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Valor desejado com alternância crédito/parcela */}
              <div className={cn(embedded ? "mb-5" : "mb-8")}>
                <div className="flex flex-col gap-3 mb-4 @md:flex-row @md:items-center @md:justify-between">
                  <label className="text-sm font-medium text-muted-foreground">
                    Valor desejado
                  </label>
                  <div className="grid grid-cols-2 gap-1 rounded-full bg-secondary p-1 @md:inline-flex @md:gap-0">
                    <button
                      onClick={() => handleSimulationTypeChange("credito")}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition-all @md:px-5",
                        simulationType === "credito"
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      Por Crédito
                    </button>
                    <button
                      onClick={() => handleSimulationTypeChange("parcela")}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition-all @md:px-5",
                        simulationType === "parcela"
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      Por Parcela
                    </button>
                  </div>
                </div>

                <p className="text-center text-sm text-muted-foreground mb-2">
                  {simulationType === "credito" ? "Valor do crédito" : "Valor da parcela"}
                </p>
                <div className={cn("text-center", embedded ? "mb-4" : "mb-6")}>
                  <span
                    className={cn(
                      "font-bold text-primary tabular-nums",
                      embedded ? "text-3xl" : "text-4xl lg:text-5xl"
                    )}
                  >
                    {formatCurrency(sliderValue)}
                  </span>
                </div>

                <div className="relative">
                  <input
                    type="range"
                    min={sliderMin}
                    max={sliderMax}
                    step={sliderStep}
                    value={sliderValue}
                    onChange={(e) => handleSliderChange(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{ "--slider-progress": `${sliderProgress}%` } as React.CSSProperties}
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground tabular-nums">
                    <span>{formatCurrencyShort(sliderMin)}</span>
                    <span>{formatCurrencyShort(sliderMax)}</span>
                  </div>
                </div>
              </div>

              {/* Prazos */}
              <div className={cn(embedded ? "mb-5" : "mb-8")}>
                <label className="block text-sm font-medium text-muted-foreground mb-3">
                  Prazo em meses
                </label>
                <div className="flex flex-wrap gap-2 justify-center">
                  {currentRange.plans.map((plan) => (
                    <button
                      key={plan.months}
                      onClick={() => setSelectedMonths(plan.months)}
                      className={cn(
                        "rounded-full text-sm font-medium transition-all",
                        embedded ? "px-4 py-2" : "px-5 py-2.5",
                        selectedMonths === plan.months
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
                      )}
                    >
                      {plan.months}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Resultados */}
              <div className={cn("bg-secondary/70 rounded-2xl mb-6", embedded ? "p-4" : "p-6")}>
                <div className="grid grid-cols-2 gap-4 text-center @xl:grid-cols-3 @xl:gap-6">
                  <div className="col-span-2 border-b border-border/60 pb-4 @xl:col-span-1 @xl:border-b-0 @xl:pb-0">
                    <p className="text-sm text-muted-foreground mb-1">
                      {simulationType === "credito" ? "Parcela mensal" : "Crédito estimado"}
                    </p>
                    <p
                      className={cn(
                        "font-bold text-primary tabular-nums",
                        embedded ? "text-2xl @sm:text-3xl" : "text-2xl lg:text-3xl"
                      )}
                    >
                      {formatCurrency(
                        simulationType === "credito" ? computedParcel : computedCredit
                      )}
                    </p>
                  </div>
                  <div className="flex flex-col justify-end">
                    <p className="text-sm text-muted-foreground mb-1">Taxa de administração</p>
                    <p className="text-lg font-semibold text-foreground tabular-nums @sm:text-xl">
                      {(adminRate * 100).toFixed(1).replace(".", ",")}%
                    </p>
                  </div>
                  <div className="flex flex-col justify-end">
                    <p className="text-sm text-muted-foreground mb-1">
                      {simulationType === "credito" ? "Crédito" : "Parcela mensal"}
                    </p>
                    <p className="text-lg font-semibold text-foreground tabular-nums @sm:text-xl">
                      {formatCurrency(
                        simulationType === "credito" ? computedCredit : computedParcel
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div
                className={cn(
                  "flex justify-center",
                  embedded ? "flex-col gap-3" : "flex-col gap-4 sm:flex-row"
                )}
              >
                <Button
                  size={embedded ? "default" : "lg"}
                  className={cn("text-base", embedded ? "w-full" : "w-full sm:w-auto")}
                  asChild
                >
                  <a href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer">
                    Quero esse consórcio
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                {!embedded && (
                  <Button variant="outline" size="lg" className="text-base">
                    Falar com especialista
                  </Button>
                )}
              </div>

              <p className={cn("text-xs text-muted-foreground text-center", embedded ? "mt-4" : "mt-6")}>
                *Valores simulados. A parcela pode variar de acordo com o grupo e condições vigentes.
                {activeType.fundRate > 0 &&
                  ` Inclui fundo de reserva de ${(activeType.fundRate * 100)
                    .toFixed(1)
                    .replace(".", ",")}%.`}{" "}
                Regulamentado pelo Banco Central do Brasil.
              </p>
            </div>
          </div>
  )

  if (embedded) {
    return (
      <div id="simulador" className="w-full">
        {calculatorCard}
      </div>
    )
  }

  return (
    <section id="simulador" className="py-16 lg:py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Simule seu consórcio agora
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o tipo de bem, defina o valor do crédito ou da parcela e descubra a simulação ideal para realizar seus sonhos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">{calculatorCard}</div>
      </div>
    </section>
  )
}
