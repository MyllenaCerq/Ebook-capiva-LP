
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DownloadForm } from "@/components/DownloadForm";

export function HeroSection() {
  const handleScrollToForm = () => {
    const formElement = document.getElementById("download-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-corporate-light to-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-bold text-corporate-darkest leading-tight">
              Chega de desperdiçar tempo e dinheiro – escale sua operação com automação, sem contratar mais ninguém
            </h1>
            <p className="text-lg text-corporate-medium">
              Cansado de ver processos manuais travando seu crescimento? Descubra como empresas brasileiras estão escalando suas operações sem aumentar a equipe, eliminando gargalos e focando no que realmente importa: crescimento e resultados.
            </p>
            <div className="pt-4 hidden md:block">
              <Button 
                onClick={handleScrollToForm}
                className="bg-corporate-orange text-white hover:bg-corporate-orange/90 text-lg px-8 py-6 rounded-md flex items-center gap-2 shadow-lg"
              >
                Quero meu e-book agora
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 border border-corporate-lightGray transform rotate-3 absolute -z-10 w-full h-full"></div>
            <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 border border-corporate-lightGray">
              <div className="mb-6">
<img
  src="/ebook capiva.png"
  alt="E-book de Automação Operacional"
  className="w-full h-auto rounded"
/>
              </div>
              <DownloadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
