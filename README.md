# 🏥 Projeto Final Bloco 02

API REST desenvolvida com **NestJS** para gerenciamento de um e-commerce de farmácia. O projeto contempla cadastro e manutenção de **Categorias**, seguindo boas práticas de arquitetura, organização de código e regras de negócio.

---

## 🚀 Tecnologias Utilizadas

* **Node.js**
* **NestJS**
* **TypeScript**
* **TypeORM**
* **mySql** (ou outro banco relacional compatível)
* **Class-validator**
* **ESLint**
* **Git & GitHub**

---

## 📁 Estrutura do Projeto

```bash
src/
 ├── categoria/
 │   ├── controllers/
 │   ├── entities/
 │   ├── services/
 │   └── categoria.module.ts
 │
 ├── app.module.ts
 └── main.ts
```

---

## 📌 Funcionalidades Implementadas

### 📂 Categoria

* Cadastrar categoria
* Listar todas as categorias
* Buscar categoria por **ID**
* Buscar categoria por **Tipo**
* Atualizar categoria
* Deletar categoria
  
---

## 🔗 Endpoints

### Categoria

| Método | Endpoint              | Descrição                  |
| ------ | --------------------- | -------------------------- |
| GET    | /categoria            | Listar todas as categorias |
| GET    | /categoria/id/:id     | Buscar categoria por ID    |
| GET    | /categoria/tipo/:tipo | Buscar categoria por tipo  |
| POST   | /categoria            | Criar categoria            |
| PUT    | /categoria/id/:id     | Atualizar categoria        |
| DELETE | /categoria/id/:id     | Deletar categoria          |

---

## 🧪 Testes

Os endpoints podem ser testados utilizando ferramentas como:

* **Insomnia**
* **Postman**

---

## ▶️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone <url-do-repositorio>
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Rodar a aplicação

```bash
npm run start:dev
```

A API estará disponível em:

```
http://localhost:4002
```

---

## 🧠 Regras de Negócio

* Campos obrigatórios são validados no backend

---

## 📌 Implementações Adicionais

* Swagger para documentação

---

## 👩‍💻 Desenvolvido por

**Lia Santos**
Backend Developer | Fullstack em formação

🔗 LinkedIn: *https://www.linkedin.com/in/itslia/*

---

⭐ Se este projeto te ajudou, deixe uma estrela no repositório!
