
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <div className="flex flex-col gap-3">
        <Button
          onClick={scrollToTop}
          className="rounded-full w-12 h-12 p-0 shadow-lg bg-corporate-blue hover:bg-corporate-blue/90"
        >
          <ArrowUp size={20} />
        </Button>
        <Button
          onClick={scrollToTop}
          className="bg-corporate-orange text-white px-4 py-3 shadow-lg rounded-full hover:bg-corporate-orange/90"
        >
          Baixar E-book
        </Button>
      </div>
    </div>
  );
}
