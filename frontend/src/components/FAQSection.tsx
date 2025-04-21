
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-corporate-light">
      <div className="container">
        <h2 className="text-center text-corporate-darkest mb-16">Perguntas Frequentes (FAQ)</h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white border border-corporate-lightGray rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-corporate-light/50 text-corporate-darkest font-medium text-left">
                Este e-book é relevante para minha indústria?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-corporate-medium border-t border-corporate-lightGray text-left">
                Sim! Os princípios de automação operacional se aplicam a praticamente qualquer setor. Se sua empresa possui processos repetitivos e gargalos que atrapalham o dia a dia, este e-book será útil – seja você de serviços, indústria, tecnologia, financeiro, ou outro segmento. Os cases apresentados abrangem diferentes áreas, tornando o conteúdo relevante para diversos ramos.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-white border border-corporate-lightGray rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-corporate-light/50 text-corporate-darkest font-medium text-left">
                Quanto tempo leva para implementar as soluções do e-book?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-corporate-medium border-t border-corporate-lightGray text-left">
                Isso depende da complexidade dos seus processos, mas muitas automações podem ser implementadas em poucas semanas ou até dias. O e-book orienta você a começar com melhorias rápidas (quick wins) que trazem resultados sem longas esperas. Você vai aprender a priorizar iniciativas de alto impacto imediato, acelerando os ganhos de eficiência.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-white border border-corporate-lightGray rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-corporate-light/50 text-corporate-darkest font-medium text-left">
                Preciso de conhecimento técnico avançado?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-corporate-medium border-t border-corporate-lightGray text-left">
                Não. O conteúdo foi escrito para leigos e profissionais não técnicos também. Tudo é explicado de forma simples, passo a passo, e você conhecerá ferramentas de automação intuitivas (inclusive plataformas no-code/low-code que não exigem programação). Ou seja, qualquer pessoa interessada em melhorar a operação da empresa conseguirá aproveitar as dicas – sem precisar ser expert em TI.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
