import { Button } from "@/components/ui/button";

export default function Obrigado() {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1 style={{ marginBottom: "2rem" }}>🎉 Tudo certo!</h1>
      <p style={{ marginBottom: "2rem" }}>Seu e-book já está liberado. É só clicar no botão abaixo para acessar agora mesmo.</p>
      <Button asChild style={{ backgroundColor: "#146c94" }}>
<a href="https://example.com/ebook.pdf" target="_blank" rel="noopener noreferrer">
        🔓 Acessar e-book
        </a>
      </Button>
    </div>
  );
}
