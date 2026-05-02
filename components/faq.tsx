"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "O que é consórcio?",
    answer: "O consórcio é uma união de pessoas físicas ou jurídicas com objetivo comum de adquirir bens móveis ou imóveis. É um sistema de compra programada e parcelada, organizada por uma administradora, com número previamente estabelecido de participantes. Cada participante recebe uma cota e concorre todo mês à contemplação por sorteio ou através de oferta de lance.",
  },
  {
    question: "O consórcio tem juros?",
    answer: "Não! O consórcio não tem juros. Você paga apenas uma taxa de administração, que é muito menor que os juros cobrados em financiamentos tradicionais. Isso torna o consórcio uma das formas mais econômicas de adquirir bens.",
  },
  {
    question: "Como funciona a contemplação?",
    answer: "A contemplação pode acontecer de duas formas: por sorteio mensal, onde todos os participantes adimplentes concorrem, ou por lance, onde você pode ofertar um valor para antecipar sua contemplação. Ao ser contemplado, você recebe uma carta de crédito para adquirir o bem desejado.",
  },
  {
    question: "Posso usar o FGTS no consórcio?",
    answer: "Sim! Para consórcio de imóveis, você pode utilizar o FGTS para ofertar lances, complementar o valor do crédito ou até mesmo para amortizar parcelas. Consulte nossos especialistas para saber como utilizar seu FGTS da melhor forma.",
  },
  {
    question: "O que acontece se eu cancelar o consórcio?",
    answer: "Em caso de desistência, você será incluído na restituição após a contemplação da sua cota ou ao término do grupo. Os valores pagos serão devolvidos conforme as regras do contrato, descontadas as taxas administrativas previstas.",
  },
  {
    question: "Quanto tempo demora para ser contemplado?",
    answer: "A contemplação pode acontecer a qualquer momento durante o período do grupo, desde a primeira assembleia. Por sorteio, as chances são iguais para todos os participantes. Com lances estratégicos, você pode aumentar significativamente suas chances de contemplação antecipada.",
  },
  {
    question: "Preciso de entrada para entrar no consórcio?",
    answer: "Não! Uma das grandes vantagens do consórcio é não precisar de entrada. Você começa a participar pagando apenas a primeira parcela e já concorre às contemplações desde a primeira assembleia.",
  },
  {
    question: "O consórcio é seguro?",
    answer: "Sim, muito seguro! O sistema de consórcios é regulamentado e fiscalizado pelo Banco Central do Brasil. Além disso, a Prestes Consórcios trabalha com as principais administradoras do mercado, garantindo total segurança ao seu investimento.",
  },
]

export function FAQ() {
  return (
    <section id="duvidas" className="py-16 lg:py-24 bg-secondary/50">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary mb-2">Tire suas dúvidas</span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Confira as respostas para as principais dúvidas sobre consórcio
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline py-5 text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
