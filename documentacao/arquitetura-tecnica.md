# Arquitetura Técnica

## Stack Utilizada

- **Frontend:** React + Vite
- **Hospedagem:** Vercel
- **Automação:** n8n
- **Armazenamento:** Google Sheets (temporário)
- **CRM:** HubSpot (futuro)
- **IA/Design:** ChatGPT + Lovable

## Fluxo Geral

1. Usuário acessa a landing page
2. Preenche o formulário de nome + email
3. Dados são enviados via POST para um Webhook no n8n
4. O n8n processa e envia os dados para o Google Sheets
5. O usuário é redirecionado para a página /obrigado
