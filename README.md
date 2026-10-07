# DevTools

## Random Utility Suite

**Pequenas ferramentas. Grandes atalhos.**

DevTools é uma coleção client-side de ferramentas para geração de dados, tokens, identificadores e valores aleatórios voltada para suporte técnico, desenvolvimento, infraestrutura e testes de software.

## Features

- Random Number com intervalo, quantidade e valores únicos
- Password Generator com indicador de força
- UUID v4 Generator
- Hash Generator com SHA-256 e SHA-512
- Random String Generator
- Test Data Generator com dados claramente fictícios
- Histórico local (senhas não são salvas)
- Tema dark/light persistente
- Interface responsiva e acessível

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES Modules)
- Web Crypto API
- LocalStorage

## Uso

Clone o repositório e abra o arquivo `index.html` no navegador. Para uma experiência de desenvolvimento melhor, execute um servidor estático na pasta do projeto:

```bash
git clone https://github.com/LucasReisD/gerador-aleatorio.git
cd gerador-aleatorio
python3 -m http.server 8080
```

Depois, acesse `http://localhost:8080`.

## Segurança e privacidade

Todos os dados são processados localmente no navegador. Não há backend, coleta de dados ou envio automático de conteúdo para servidores. Senhas e strings sensíveis usam `crypto.getRandomValues()`; senhas não são gravadas no histórico nem em `localStorage`.

O Hash Generator usa a Web Crypto API para SHA-256 e SHA-512. MD5 não está disponível por ser um algoritmo criptograficamente obsoleto.
