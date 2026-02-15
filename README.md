# 🏥 SaudexAPI 2.0

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?style=flat-square&logo=node.js)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Express](https://img.shields.io/badge/Express-5.0-black?style=flat-square&logo=express)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.19-green?style=flat-square&logo=mongodb)](https://www.mongodb.com)
[![Jest](https://img.shields.io/badge/Jest-30-red?style=flat-square&logo=jest)](https://jestjs.io)
[![License](https://img.shields.io/badge/License-ISC-yellow?style=flat-square)](LICENSE)

**SaudexAPI 2.0** é uma API robusta e moderna desenvolvida em **TypeScript** e **Node.js** para centralizar informações e facilitar o acesso a serviços de saúde. Seu principal objetivo é garantir que **pessoas diabéticas** tenham **acesso eficiente, seguro e acessível** aos insumos essenciais para o tratamento com insulina.

> 💡 Desenvolvido com foco em **qualidade de código**, **type safety** e **testes automatizados**.

---

## 📋 Tabela de Conteúdos

- [Visão Geral](#visão-geral)
- [Stack Tecnológico](#stack-tecnológico)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso Rápido](#uso-rápido)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Documentação da API](#documentação-da-api)
- [Testes](#testes)
- [Arquitetura](#arquitetura)
- [Contribuindo](#contribuindo)
- [Roadmap](#roadmap)
- [Licença](#licença)

---

## 🎯 Visão Geral

SaudexAPI é uma solução completa para gestão de:

- **🏥 Unidades de Saúde**: Postos médicos, hospitais, clínicas, farmácias
- **👨‍⚕️ Profissionais**: Médicos e especialistas com controle de disponibilidade
- **💊 Medicamentos & Insumos**: Insulinas, medicamentos diversos, vacinas
- **📅 Agendamentos**: Sistema de tickets para consultas médicas
- **🔐 Controle de Acesso**: Permissões e roles (Admin, User, Guest)
- **📞 Contatos**: Gerenciamento centralizado de informações de contato

### 🔹 Valores Principais

| Objetivo | Descrição |
|----------|-----------|
| **Centralizar** | Unificar informações de saúde em uma única plataforma |
| **Facilitar** | Simplificar o acesso a medicamentos e profissionais |
| **Segurança** | Proteger dados sensíveis com autenticação e autorização |
| **Acessibilidade** | Garantir suporte confiável para pessoas em situação de vulnerabilidade |

---

## 🛠️ Stack Tecnológico

| Camada | Tecnologias |
|--------|-------------|
| **Runtime** | Node.js 18+ |
| **Linguagem** | TypeScript 5.8 |
| **Framework Web** | Express 5.0 |
| **Banco de Dados** | MongoDB 8.19 (Mongoose) |
| **Validação** | Mongoose Schemas com TypeScript Interfaces |
| **Testes** | Jest 30 + Supertest |
| **Documentação API** | Swagger/OpenAPI com swagger-jsdoc |
| **Linting** | ESLint + Prettier |
| **Variáveis de Ambiente** | dotenv |
| **Dev Tools** | ts-node-dev, nodemon |

---

## 📦 Pré-requisitos

- **Node.js** 18.0.0 ou superior
- **npm** 9.0.0 ou superior
- **MongoDB** 5.0+ (local ou cloud como MongoDB Atlas)
- **Git**

### Verificar Instalação

```bash
node --version   # v18.x.x ou superior
npm --version    # 9.x.x ou superior
```

---

## 🚀 Instalação

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/saudexapi.git
cd saudexapi
```

### 2️⃣ Instalar Dependências

```bash
npm install
```

### 3️⃣ Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Database Configuration
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/saudexapi?retryWrites=true&w=majority

# Server Configuration
NODE_ENV=development
PORT=3000

# Swagger/Documentation
SWAGGER_URL=/api-docs
```

📝 Exemplo com MongoDB local:
```env
MONGO_URI=mongodb://localhost:27017/saudexapi
```

### 4️⃣ Construir o Projeto

```bash
npm run build
```

---

## ⚡ Uso Rápido

### Development (com hot-reload)

```bash
npm run dev
```

A API estará disponível em: `http://localhost:3000`

### Production

```bash
npm run build
npm start
```

### Documentação Interativa

Acesse a documentação Swagger em:
```
http://localhost:3000/api-docs
```

---

## 📁 Estrutura do Projeto

```
src/
├── config/           # Configurações (servidor, BD, Swagger)
│   ├── db.ts        # Conexão MongoDB
│   ├── server.ts    # Setup Express
│   └── swagger.ts   # Documentação API
├── constants/        # Enums e constantes
│   ├── role.enum.ts
│   ├── gender.enum.ts
│   ├── permissionType.enum.ts
│   └── ...
├── models/           # Modelos Mongoose + Interfaces TypeScript
│   ├── admin/
│   ├── user/
│   ├── doctor/
│   ├── medicalCenter/
│   ├── medication/
│   ├── address/
│   ├── contact/
│   └── relations/    # Modelos de relacionamento (N:M)
├── features/         # Features isoladas por responsabilidade
│   └── admin/
│       └── create/   # DTO, Service, Controller, Routes, Mapper
├── services/         # Serviços auxiliares
│   └── CEP/         # Integração com API de CEP
├── tests/            # Suites de testes
│   ├── setup.ts     # Configuração global Jest
│   └── admin/
│       └── create/
│           └── adminCreate.test.ts
└── config/
    └── server.ts     # Express listener
```

### 📋 Padrão de Organização por Feature

Cada feature segue a estrutura:

```
feature/
├── {feature}.controller.ts    # Handlers HTTP
├── {feature}.dto.ts           # Data Transfer Objects
├── {feature}.service.ts       # Lógica de negócio
├── {feature}.mapper.ts        # Transformação de dados
├── {feature}.routes.ts        # Definição de rotas
└── {feature}.test.ts          # Testes unitários
```

---

## 🧪 Testes

### Executar Todos os Testes

```bash
npm test
```

### Executar Testes com Cobertura

```bash
npm test -- --coverage
```

### Testes de Admin (Exemplo)

```bash
npm test -- src/tests/admin/create/adminCreate.test.ts
```

### Suites de Testes Incluídas

✅ **Admin Create** (`src/tests/admin/create/adminCreate.test.ts`)
- ✓ Criar admin com dados válidos
- ✓ Validar campos obrigatórios
- ✓ Persistência em banco de dados
- ✓ Timestamps automáticos
- ✓ Múltiplos registros independentes
- ✓ Caracteres especiais em nomes

### Configuração Jest

- **Timeout**: 30 segundos por test
- **Setup Global**: Conexão/desconexão MongoDB automática
- **Pattern**: `**/*.test.ts`
- **Ambiente**: Node.js

---

## 🏗️ Arquitetura

### Padrão de Arquitetura

```
┌─────────────────────────────────────┐
│         Express Routes              │
│   (HTTP Endpoints + Validação)      │
└────────────────┬────────────────────┘
                 │
┌─────────────────▼────────────────────┐
│        Controllers Layer             │
│   (Orquestração + Parsing)           │
└────────────────┬────────────────────┘
                 │
┌─────────────────▼────────────────────┐
│         Service Layer               │
│    (Lógica de Negócio)              │
└────────────────┬────────────────────┘
                 │
┌─────────────────▼────────────────────┐
│       Mongoose Models               │
│  (Persistência + Validação)         │
└────────────────┬────────────────────┘
                 │
┌─────────────────▼────────────────────┐
│        MongoDB Database             │
│      (Dados + Relacionamentos)      │
└─────────────────────────────────────┘
```

### Tipagem TypeScript

- ✅ **Interfaces**: Definidas para cada Document (com timestamps)
- ✅ **DTOs**: Transfer Objects para request/response
- ✅ **Enums**: Constantes tipadas (Role, Gender, etc)
- ✅ **Type Safety**: Resolução strict mode habilitado

---

## 📚 Documentação da API

### Swagger/OpenAPI

Acesse `http://localhost:3000/api-docs` para documentação interativa.

### Endpoints Principais

#### Admin

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/api/admin` | Criar novo admin |
| `GET` | `/api/admin` | Listar admins |
| `GET` | `/api/admin/:id` | Obter admin por ID |
| `PUT` | `/api/admin/:id` | Atualizar admin |
| `DELETE` | `/api/admin/:id` | Deletar admin |

#### (Mais endpoints em desenvolvimento)

---

## 🔐 Segurança & Permissões

### Roles Disponíveis

- **ADMIN**: Acesso total ao sistema
- **USER**: Acesso limitado a suas próprias informações
- **GUEST**: Acesso público (com restrições)

### Permissions

Controle granular de permissões:
- `CREATE_ADMIN`
- `UPDATE_ADMIN`
- `DELETE_ADMIN`
- `VIEW_RESOURCES`
- E mais...

---

## 🐛 Solução de Problemas

### Erro de Conexão com MongoDB

```
Error: connect ECONNREFUSED 127.0.0.1:27017
```

**Solução**: Verificar se MongoDB está rodando:
```bash
# Windows Services
services.msc  # Procurar por MongoDB

# Ou usar MongoDB Atlas (cloud)
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/
```

### Erro de Timeout em Testes

```
Exceeded timeout of 30000 ms for a hook
```

**Solução**: Aumentar timeout no `jest.config.js`:
```javascript
{
  testTimeout: 60000  // 60 segundos
}
```

### Porta 3000 já em uso

```bash
# Liberar porta (Windows)
netstat -ano | findstr :3000
taskkill /PID {PID} /F

# Ou usar porta diferente
PORT=3001 npm run dev
```

---

## 📈 Roadmap

### ✅ Implementado

- [x] Modelos de dados com TypeScript
- [x] Schema inline para Mongoose
- [x] Interfaces com timestamps
- [x] Configuração Jest
- [x] Testes de Admin Create
- [x] Estrutura de features

### 🚧 Em Desenvolvimento

- [ ] Testes para User Create
- [ ] Testes para Doctor Management
- [ ] Testes para MedicalCenter CRUD
- [ ] Autenticação (JWT)
- [ ] Rate Limiting
- [ ] Cache (Redis)

### 🔮 Futuro

- [ ] Integração com SMS/Email
- [ ] Notificações Push
- [ ] Analytics & Dashboards
- [ ] Mobile App
- [ ] Kubernetes Deployment

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3. **Commit** suas mudanças com mensagens descritivas
   ```bash
   git commit -m "feat(admin): adionar novo campo ao modelo"
   ```
4. **Push** para a branch (`git push origin feature/MinhaFeature`)
5. Abra um **Pull Request**

### Padrão de Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<escopo>): <descrição>

<corpo>

<rodapé>
```

**Tipos**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

---

## 📝 Licença

Este projeto é licenciado sob a [Licença ISC](LICENSE).

---

## 👥 Autores & Colaboradores

- **Desenvolvido com ❤️** para ajudar pessoas
---

## 📞 Suporte

Encontrou um problema? Abra uma [issue](https://github.com/seu-usuario/saudexapi/issues) no GitHub.

---

**Última atualização**: Fevereiro 2026 | Versão: 1.1.0
