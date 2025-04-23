import { DownloadForm } from "@/components/DownloadForm";

export function DownloadSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
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
    </section>
  );
}
