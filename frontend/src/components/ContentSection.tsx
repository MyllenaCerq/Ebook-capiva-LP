
import { FileText, Users, MapPin } from "lucide-react";

export function ContentSection() {
  return (
    <section id="o-que-encontrar" className="section-padding bg-white">
      <div className="container">
        <h2 className="text-center text-corporate-darkest mb-16">O que você vai encontrar no e-book</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-corporate-light p-8 rounded-lg border border-corporate-lightGray hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mb-6">
              <FileText className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-medium text-corporate-darkest mb-4">Processos Manuais vs. Automatizados</h3>
            <p className="text-corporate-medium">
              Análise dos custos ocultos dos processos manuais e das vantagens concretas da automação em cada etapa da operação.
            </p>
          </div>
          
          <div className="bg-corporate-light p-8 rounded-lg border border-corporate-lightGray hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mb-6">
              <Users className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-medium text-corporate-darkest mb-4">Estudos de Caso Inspiradores</h3>
            <p className="text-corporate-medium">
              Exemplos reais de empresas brasileiras que eliminaram desperdícios e gargalos – em um dos casos, um processo que levava 4 dias foi reduzido para poucos minutos.
            </p>
          </div>
          
          <div className="bg-corporate-light p-8 rounded-lg border border-corporate-lightGray hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mb-6">
              <MapPin className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-medium text-corporate-darkest mb-4">Guia Passo a Passo</h3>
            <p className="text-corporate-medium">
              Um roteiro prático para mapear processos, escolher as ferramentas ideais e implementar automações de forma rápida e eficaz, sem complicação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
