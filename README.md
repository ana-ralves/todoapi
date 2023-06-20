## TodoAPI

---

### Requisitos
                                
- [x] Deve ser possível criar um to-do
- [x] Deve ser possível listar todos os to-do
- [x] Deve ser possível marcar um to-do como concluído
- [x] Deve ser possível desmarcar um to-do como concluído
- [x] Deve ser possível excluir um to-do
- [x] Deve ser possível listar os to-do marcados como concluído
- [x] Deve ser possível listar os to-do não marcados com concluído

---

### Regras de negócio

- [x] Não deve ser possível cadastrar um to-do com o mesmo nome
- [x] Não deve ser possível atualizar um to-do não existente
- [x] Não deve ser possível excluir um to-do não existente
- [x] Na listagem, se o `completed` = true ? Trazer como 'Concluído' se não 'Pendente'

---

### Estrutura do to-do

{
  id: uuidV4(),
  title: 'Tarefa 1',
  description: 'Comprar pão na padaria',
  completed: true | false
}


### Boa sorte a to-dos!

- yarn init -y
- yarn add express
- yarn add nodemon -D
Verificar no package.json
"scripts": {
    "dev": "nodemon src/index.js"
  },
- yarn init express
- yarn add uuid
- yarn dev