
export function StatsSection() {
  return (
    <section className="bg-corporate-darkest py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-corporate-orange mb-2">84%</div>
            <p className="text-corporate-light">dos profissionais perdem tempo com tarefas manuais</p>
          </div>
          
          <div className="p-6">
            <div className="text-4xl font-bold text-corporate-orange mb-2">90%</div>
            <p className="text-corporate-light">relatam aumento de produtividade com automação</p>
          </div>
          
          <div className="p-6">
            <div className="text-4xl font-bold text-corporate-orange mb-2">40%</div>
            <p className="text-corporate-light">de ganho de eficiência operacional possível</p>
          </div>
        </div>
      </div>
    </section>
  );
}
