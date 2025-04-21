# 📘 LP Capiva – Estratégia de Aquisição Inbound

Landing Page desenvolvida como parte de uma estratégia inbound com foco em aquisição, automação e CRM para a Capiva.

O projeto une marketing, tecnologia e processos, com uma abordagem moderna baseada em IA e low-code, com o objetivo de criar ativos digitais que convertem desde o primeiro clique.

Link: https://lp-ebook-capiva.vercel.app/

## 🎯 Objetivo

- Criar uma estrutura de conversão para leads qualificados
- Validar a proposta de valor da Capiva com uma isca digital
- Automatizar o processo de captura e organização dos contatos
- Reduzir gargalos operacionais e alimentar o CRM automaticamente
- Aplicar uma mentalidade GTM Engineer na prática

## ⚙️ Tecnologias e ferramentas

- [x] **Vite + React** – para criação da LP
- [x] **Vercel** – deploy rápido e contínuo
- [x] **n8n** – automação do fluxo de dados
- [x] **Google Sheets** – armazenamento temporário de leads
- [ ] **HubSpot CRM** – integração futura para gestão de contatos
- [x] **ChatGPT + Lovable** – apoio no design, copy e estrutura

## 🔄 Como funciona o fluxo de aquisição

1. Usuário acessa a LP e preenche o formulário
2. Dados são enviados para um webhook no **n8n**
3. O n8n recebe, processa e salva os dados no **Google Sheets**
4. O usuário é redirecionado automaticamente para a página **/obrigado**
5. O e-book é disponibilizado diretamente na página (sem envio por e-mail)

> 🔜 Em breve: envio automático do e-book por e-mail + integração com o HubSpot

## 🚀 Como rodar o projeto localmente

```bash
# clone o repositório
git clone https://github.com/seu-usuario/projeto-lp-capiva.git

# entre na pasta do projeto
cd projeto-lp-capiva

# instale as dependências
npm install

# rode o projeto localmente
npm run dev
```

Acesse em: [http://localhost:5173](http://localhost:5173)

## 🗺️ Roadmap

- [x] Criar estrutura visual da LP com IA
- [x] Publicar no Vercel
- [x] Conectar formulário ao n8n
- [x] Salvar leads no Google Sheets
- [x] Criar redirecionamento para /obrigado
- [ ] Automatizar envio do e-book por e-mail
- [ ] Integrar com HubSpot CRM
- [ ] Migrar dados do Google Sheets para Supabase
- [ ] Criar dashboard interno de leads

## 📚 Aprendizados

- Configurar envio de dados via formulário exige atenção com **CORS**, métodos HTTP e integração com webhooks externos
- O **n8n** foi uma ferramenta poderosa e visual para testes rápidos e automações escaláveis
- Usar **Google Sheets** como storage inicial agilizou o time-to-value sem depender de back-end
- Pensar com mentalidade de **GTM Engineer** é combinar visão estratégica com execução ágil e técnica
- Documentar tudo desde o início facilita manutenção e transição futura

## 🤝 Créditos

Projeto idealizado e executado por [Myllena Cerqueira](https://www.linkedin.com/in/seu-usuario/) como parte do plano de aquisição da [Capiva](https://capiva.tech/)
