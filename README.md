# Projeto Técnico - QA Pleno

Este projeto foi desenvolvido como parte de uma avaliação técnica para a vaga de QA, com o objetivo de demonstrar habilidades em automação de testes E2E e de API, utilizando boas práticas de desenvolvimento, organização e escrita de testes automatizados.

---

## Tecnologias Utilizadas

- **Cypress** (JavaScript) – Framework para testes E2E no frontend  
- **Pytest** (Python) – Para testes da API  
- **Node.js** e **npm** – Gerenciamento de dependências do Cypress  
- **Virtualenv** – Ambiente isolado para testes em Python  
- **Estrutura POM (Page Object Model)** – Separação de responsabilidades e reutilização de código

---

## Estrutura do Projeto

```
projeto-tecnico-qa/
│
├── cypress/
│   ├── e2e/                     # Testes E2E (cadastro, login, carrinho)
│   ├── fixtures/                # Dados dinâmicos usados nos testes
│   ├── support/
│   │   └── pages/               # Page Objects (Login, Cadastro, Produtos, Lista)
│
├── tests/
│   └── api/                     # Testes de API com Pytest
│
├── utils/
│   └── api_helpers.py           # Funções auxiliares para os testes de API
│
├── .gitignore
├── README.md
├── requirements.txt            # Dependências do Python
├── cypress.config.js           # Configurações do Cypress
```

---

## Cenários Automatizados

### Testes E2E (Cypress)
- ✅ Cadastro de novo usuário com dados únicos
- ✅ Login com sucesso utilizando usuário cadastrado
- ✅ Adição de produto ao carrinho

### Testes de API (Pytest)
- ✅ Criação de novo usuário com validação de retorno
- ✅ Login via API com validação de token
- ✅ Listagem de produtos e verificação de atributos

---

## Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/fabricio-batista/projeto-tecnico-qa.git
cd projeto-tecnico-qa
```

---

### 2. Instale as dependências

#### Cypress
```bash
npm install
```

#### Python
Recomenda-se usar um ambiente virtual:

```bash
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows

pip install -r requirements.txt
```

---

### 3. Execute os testes

#### E2E (Frontend com Cypress)
```bash
npx cypress open     # Para executar com interface
npx cypress run      # Para execução em headless
```

#### API (Python com Pytest)
```bash
pytest tests/api/ -v
```

---

## URLs Utilizadas

- **Frontend para testes**: https://front.serverest.dev/
- **Documentação da API (Swagger)**: https://serverest.dev/

---

## Observações Importantes

- O sistema da **ServeRest** é aberto à comunidade, o que pode gerar mudanças dinâmicas no banco de dados.  
  Para garantir consistência, foram implementadas estratégias como:
  - Geração de e-mails únicos via `Date.now()` para testes de cadastro
  - Validação alternativa com fallback nos testes de carrinho, para garantir que pegue um produto, se houver
- Os dados do usuário gerado dinamicamente são armazenados em `cypress/fixtures/usuario_dinamico.json` e reutilizados nos testes.

---

## Critérios Atendidos

- Uso de frameworks modernos (Cypress + Pytest) ✅
- Separação de responsabilidades via Page Object Model ✅ 
- Boas práticas de versionamento e mensagens de commit ✅
- Cobertura de fluxos reais e relevantes da aplicação ✅
- Documentação clara e objetiva ✅

---

## Autor

**Fabrício Batista**  
📧 fabricioalmeida.b@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/fabricio-batista/)
📁 Projeto: [github.com/fabricio-batista/projeto-tecnico-qa](https://github.com/fabricio-batista/projeto-tecnico-qa)

---
