import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { submitForm } from "@/utils/form-submit"; // Import submitForm

export function DownloadForm() {
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent default form submission

    const form = event.currentTarget;
    const webhookUrl = form.action;

    const success = await submitForm(form, webhookUrl);

    if (success) {
      navigate("/obrigado"); // Redirect to the "obrigado" page
    } else {
      // Handle form submission error (e.g., display an error message)
      console.error("Form submission failed!");
    }
  }

  return (
    <form
      id="download-form"
      action="https://mylle.app.n8n.cloud/webhook/lp-ebook-capiva"
      method="POST"
      className="p-6 bg-white rounded-lg border border-corporate-lightGray"
      onSubmit={handleSubmit} // Add onSubmit handler
    >
      <h3 className="text-xl font-medium text-corporate-darkest mb-4">Baixe o e-book gratuito</h3>

      <div className="space-y-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-corporate-medium mb-1">
            Seu nome
          </label>
          <Input
            id="nome"
            name="nome"
            type="text"
            className="w-full border-corporate-lightGray focus:border-corporate-blue focus:ring-corporate-blue"
            placeholder="Digite seu nome completo"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-corporate-medium mb-1">
            E-mail profissional
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            className="w-full border-corporate-lightGray focus:border-corporate-blue focus:ring-corporate-blue"
            placeholder="seu@email.com"
            required
          />
        </div>

        <div>
          <label htmlFor="empresa" className="block text-sm font-medium text-corporate-medium mb-1">
            Empresa
          </label>
          <Input
            id="empresa"
            name="empresa"
            type="text"
            className="w-full border-corporate-lightGray focus:border-corporate-blue focus:ring-corporate-blue"
            placeholder="Nome da sua empresa"
            required
          />
        </div>

        <div>
          <label htmlFor="numero_funcionarios" className="block text-sm font-medium text-corporate-medium mb-1">
            Número de Funcionários
          </label>
          <select
            id="numero_funcionarios"
            name="numero_funcionarios"
            className="w-full border-corporate-lightGray focus:border-corporate-blue focus:ring-corporate-blue rounded-md shadow-sm"
            required
          >
            <option value="">Selecione</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201-500">201-500</option>
            <option value="500+">500+</option>
          </select>
        </div>
      </div>

      <Button type="submit" className="w-full mt-6 bg-corporate-orange text-white hover:bg-corporate-orange/90">
        Baixar agora
      </Button>
      <p className="text-xs text-corporate-medium mt-4 text-center">
        Seus dados estão seguros e nunca serão compartilhados.
      </p>
    </form>
  );
}
