
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollToForm = () => {
    const formElement = document.getElementById("download-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMobileButtonClick = () => {
    handleScrollToForm();
    setMobileMenuOpen(false);
  };

  return (
    <header className="border-b border-corporate-lightGray py-4 sticky top-0 bg-white z-40 shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <img src="logo-capiva-preto.svg" alt="Automação Fácil" className="h-8" />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#por-que" className="text-corporate-medium hover:text-corporate-darkest transition-colors duration-200">
            Por que baixar
          </a>
          <a href="#o-que-encontrar" className="text-corporate-medium hover:text-corporate-darkest transition-colors duration-200">
            O que você vai encontrar
          </a>
          <a href="#faq" className="text-corporate-medium hover:text-corporate-darkest transition-colors duration-200">
            FAQ
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="corporateBlue" 
            className="hidden md:flex"
            onClick={handleScrollToForm}
          >
            Baixar E-book
          </Button>
          
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} className="text-corporate-darkest" />
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 z-50 animate-fade-in">
          <div className="container flex flex-col space-y-4">
            <a 
              href="#por-que" 
              className="text-corporate-medium hover:text-corporate-darkest transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Por que baixar
            </a>
            <a 
              href="#o-que-encontrar" 
              className="text-corporate-medium hover:text-corporate-darkest transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              O que você vai encontrar
            </a>
            <a 
              href="#faq" 
              className="text-corporate-medium hover:text-corporate-darkest transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              variant="corporateBlue" 
              className="w-full"
              onClick={handleMobileButtonClick}
            >
              Baixar E-book
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
