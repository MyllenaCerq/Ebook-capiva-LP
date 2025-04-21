
import { FeatureHighlight } from "@/components/FeatureHighlight";

export function BenefitsSection() {
  return (
    <section id="por-que" className="section-padding bg-corporate-light">
      <div className="container">
        <h2 className="text-center text-corporate-darkest mb-16">Por que baixar este e-book?</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <span className="inline-block bg-corporate-orange/20 text-corporate-darkest rounded-full px-4 py-1 text-sm font-medium mb-6">
              DADOS COMPROVADOS
            </span>
          </div>
          
          <p className="text-lg text-corporate-medium mb-8 text-center">
            Hoje, <span className="font-semibold">84% dos profissionais</span> admitem que perdem tempo com tarefas repetitivas e manuais no trabalho. Soa familiar? Esses gargalos não apenas geram frustração – eles custam caro e freiam o crescimento do seu negócio. Chega disso! Automação é o caminho — não por acaso, <span className="font-semibold">mais de 90% dos profissionais</span> relatam aumento de produtividade com essa estratégia. Neste e-book gratuito, você vai descobrir como:
          </p>
          
          <div className="space-y-8 mt-12">
            <FeatureHighlight 
              title="Identificar e eliminar gargalos" 
              description="Identificar e eliminar gargalos e desperdícios operacionais ocultos que estão drenando recursos do seu negócio."
            />
            
            <FeatureHighlight 
              title="Implementar automações eficazes" 
              description="Implementar automações eficazes passo a passo, escolhendo as ferramentas certas para sua realidade – mesmo sem ser especialista em tecnologia."
            />
            
            <FeatureHighlight 
              title="Aumentar a eficiência operacional" 
              description="Aumentar a eficiência operacional em até 40%​ sem contratar uma única pessoa a mais, liberando sua equipe para atividades estratégicas que aceleram o crescimento."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
