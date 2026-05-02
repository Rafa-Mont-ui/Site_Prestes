"use client"

import { useState, useMemo } from "react"
import { Home, Car, Bike, Wrench, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  { id: "imoveis", name: "Imóveis", icon: Home, minCredit: 80000, maxCredit: 1500000, months: [120, 150, 180, 200, 240], taxRate: 0.0010 },
  { id: "veiculos", name: "Veículos", icon: Car, minCredit: 30000, maxCredit: 300000, months: [60, 72, 80, 84, 100], taxRate: 0.0014 },
  { id: "motos", name: "Motos", icon: Bike, minCredit: 10000, maxCredit: 80000, months: [48, 60, 72, 80], taxRate: 0.0014 },
  { id: "servicos", name: "Serviços", icon: Wrench, minCredit: 20000, maxCredit: 150000, months: [48, 60, 72, 80, 100], taxRate: 0.0012 },
]

type SimulationType = "parcela" | "credito"

export function Calculator() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [simulationType, setSimulationType] = useState<SimulationType>("credito")
  const [creditValue, setCreditValue] = useState(activeCategory.minCredit + (activeCategory.maxCredit - activeCategory.minCredit) / 2)
  const [selectedMonths, setSelectedMonths] = useState(activeCategory.months[Math.floor(activeCategory.months.length / 2)])

  const handleCategoryChange = (category: typeof categories[0]) => {
    setActiveCategory(category)
    setCreditValue(category.minCredit + (category.maxCredit - category.minCredit) / 2)
    setSelectedMonths(category.months[Math.floor(category.months.length / 2)])
  }

  const { monthlyPayment, totalAdminFee, totalPayment } = useMemo(() => {
    const adminFee = creditValue * activeCategory.taxRate * selectedMonths
    const fundReserve = creditValue * 0.02
    const total = creditValue + adminFee + fundReserve
    const monthly = total / selectedMonths

    return {
      monthlyPayment: monthly,
      totalAdminFee: adminFee,
      totalPayment: total,
    }
  }, [creditValue, selectedMonths, activeCategory.taxRate])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }

  const sliderProgress = ((creditValue - activeCategory.minCredit) / (activeCategory.maxCredit - activeCategory.minCredit)) * 100

  return (
    <section id="simulador" className="py-16 lg:py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Simule seu consórcio agora
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o tipo de consórcio, defina o valor do crédito e descubra a parcela ideal para realizar seus sonhos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-xl border border-border overflow-hidden">
            {/* Category tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-border">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category)}
                    className={cn(
                      "flex flex-col items-center gap-2 py-5 px-4 transition-all",
                      activeCategory.id === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-muted-foreground hover:bg-secondary"
                    )}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                )
              })}
            </div>

            <div className="p-6 lg:p-8">
              {/* Simulation type toggle */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex rounded-full bg-secondary p-1">
                  <button
                    onClick={() => setSimulationType("parcela")}
                    className={cn(
                      "rounded-full px-6 py-2 text-sm font-medium transition-all",
                      simulationType === "parcela"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    Por Parcela
                  </button>
                  <button
                    onClick={() => setSimulationType("credito")}
                    className={cn(
                      "rounded-full px-6 py-2 text-sm font-medium transition-all",
                      simulationType === "credito"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    Por Crédito
                  </button>
                </div>
              </div>

              {/* Credit value display and slider */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  {simulationType === "credito" ? "Valor do Crédito" : "Valor desejado da parcela"}
                </label>
                <div className="text-center mb-6">
                  <span className="text-4xl lg:text-5xl font-bold text-primary">
                    {formatCurrency(creditValue)}
                  </span>
                </div>
                
                <div className="relative">
                  <input
                    type="range"
                    min={activeCategory.minCredit}
                    max={activeCategory.maxCredit}
                    step={1000}
                    value={creditValue}
                    onChange={(e) => setCreditValue(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{ "--slider-progress": `${sliderProgress}%` } as React.CSSProperties}
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>{formatCurrency(activeCategory.minCredit)}</span>
                    <span>{formatCurrency(activeCategory.maxCredit)}</span>
                  </div>
                </div>
              </div>

              {/* Months selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-muted-foreground mb-3">
                  Prazo em meses
                </label>
                <div className="flex flex-wrap gap-2 justify-center">
                  {activeCategory.months.map((months) => (
                    <button
                      key={months}
                      onClick={() => setSelectedMonths(months)}
                      className={cn(
                        "px-5 py-2.5 rounded-full text-sm font-medium transition-all",
                        selectedMonths === months
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
                      )}
                    >
                      {months}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="bg-secondary/70 rounded-2xl p-6 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Parcela mensal</p>
                    <p className="text-2xl lg:text-3xl font-bold text-primary">
                      {formatCurrency(monthlyPayment)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Taxa de administração</p>
                    <p className="text-xl font-semibold text-foreground">
                      {(activeCategory.taxRate * 100).toFixed(2)}% a.m.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Crédito</p>
                    <p className="text-xl font-semibold text-foreground">
                      {formatCurrency(creditValue)}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base" asChild>
                  <a href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer">
                    Quero esse consórcio
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-base">
                  Falar com especialista
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-6">
                *Valores simulados. A parcela pode variar de acordo com o grupo e condições vigentes. 
                Regulamentado pelo Banco Central do Brasil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
