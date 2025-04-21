
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DownloadForm } from "@/components/DownloadForm";

export function CTASection() {
  return (
    <section className="py-16 bg-corporate-blue text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white">Não perca mais tempo com ineficiências</h2>
            <p className="text-lg opacity-90 mt-4 max-w-3xl mx-auto">
              Cada minuto gasto em um processo manual é uma oportunidade jogada fora. Não deixe sua empresa ficar para trás. Baixe agora o e-book gratuito e transforme sua operação em uma máquina de produtividade e crescimento.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 flex items-center justify-center">
                <img 
                  src="/ebook capiva 2.png" 
                  alt="E-book de Automação Operacional"
                  className="max-w-full h-auto rounded shadow-md"
                />
              </div>
              <div className="p-8">
                <DownloadForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
