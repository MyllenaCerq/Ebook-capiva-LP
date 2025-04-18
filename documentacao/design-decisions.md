# Decisões de Design

- Optou-se por um formulário HTML tradicional com `action` direto para o Webhook por simplicidade e compatibilidade com o n8n (evita problemas com CORS).
- Google Sheets foi escolhido como base temporária pela agilidade, mas a estrutura já considera futura migração para Supabase.
- O redirecionamento pós-formulário é feito via React, garantindo melhor controle da experiência do usuário.
