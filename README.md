# 🐾 PetShop — Sistema de Agendamento

Um projeto desenvolvido para realizar o **cadastro e gerenciamento de consultas em um PetShop**, permitindo que o usuário agende atendimentos para seus pets de forma simples e intuitiva.

O projeto foi desenvolvido como parte de um desafio prático para aplicar conceitos de **HTML, CSS, JavaScript, manipulação do DOM, validações e integração com dados locais através de uma API REST**.

---

## 📸 Preview

> Adicione aqui uma imagem ou GIF do projeto quando estiver disponível.

## 📸 Preview

<div align="center">

![Preview do projeto](./docs/preview.gif)

</div>

---

## 🚀 Demonstração

A aplicação está disponível online através do GitHub Pages:

🔗 **[Acessar o projeto](https://ruanvclima.github.io/desafio-agendamento-petshop/)**

---

## 💻 Sobre o projeto

O **PetShop — Sistema de Agendamento** foi desenvolvido para facilitar o gerenciamento de consultas de um pet shop.

A aplicação permite:

- 🐶 Cadastrar o nome do tutor;
- 🐾 Cadastrar o nome do pet;
- 📋 Informar o serviço desejado;
- 📅 Selecionar a data do atendimento;
- 🕐 Selecionar o horário disponível;
- 📌 Visualizar os agendamentos cadastrados;
- ❌ Remover agendamentos;
- 🔄 Atualizar a lista de agendamentos automaticamente.

O projeto também possui validações para evitar o cadastro de horários inválidos e utiliza uma API para armazenar os agendamentos.

---

## 🛠️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando:

- **HTML5**
- **CSS3**
- **JavaScript**
- **Day.js**
- **Webpack**
- **Babel**
- **JSON Server**
- **Git e GitHub**
- **GitHub Pages**

---

## 📂 Estrutura do projeto

```text
desafio-agendamento-petshop/
│
├── dist/
│   ├── assets/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── assets/
│   ├── modules/
│   ├── styles/
│   └── main.js
│
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── server.json
├── webpack.config.js
└── README.md
```

⚙️ Como executar o projeto
1. Clone o repositório
git clone https://github.com/RuanVCLima/desafio-agendamento-petshop.git
2. Entre na pasta do projeto
cd desafio-agendamento-petshop
3. Instale as dependências
npm install
4. Execute o projeto
npm run dev

Depois, acesse no navegador o endereço disponibilizado pelo Webpack Dev Server.

🔌 API

O projeto utiliza uma API para armazenar e consultar os agendamentos.

Durante o desenvolvimento, foi utilizado o JSON Server para simular uma API REST.

O arquivo responsável pelos dados locais é:

server.json

Para executar o servidor localmente:

npm run server

A API ficará disponível, por padrão, em:

http://localhost:3333
📦 Scripts disponíveis

Os principais scripts configurados no package.json são:

npm run dev

Inicia o ambiente de desenvolvimento utilizando o Webpack Dev Server.

npm run build

Gera a versão otimizada do projeto para produção.

npm run server

Inicia o JSON Server utilizando o arquivo server.json.

npm start

Inicia o servidor utilizando a configuração destinada ao ambiente de produção.

🎯 Funcionalidades
📅 Agendamento

O usuário pode preencher os dados necessários para realizar um novo agendamento:

Nome do tutor;
Nome do pet;
Serviço;
Data;
Horário.

Após o preenchimento, o agendamento é enviado para a API.

🕐 Validação de horários

A aplicação realiza validações relacionadas à data e ao horário escolhido, evitando situações como:

Agendamento em datas anteriores;
Seleção de horários inválidos;
Conflito com horários já ocupados.
📋 Lista de agendamentos

Os agendamentos cadastrados são apresentados na interface de forma organizada, mostrando as principais informações de cada consulta.

❌ Cancelamento

O usuário também pode remover um agendamento diretamente pela interface.

📱 Responsividade

A interface foi desenvolvida pensando em diferentes tamanhos de tela.

O projeto possui ajustes específicos para dispositivos menores, permitindo que a aplicação seja utilizada tanto em:

💻 Desktop;
💻 Notebook;
📱 Smartphones;
📲 Tablets.
🧠 Conceitos praticados

Durante o desenvolvimento deste projeto foram aplicados diversos conceitos importantes do desenvolvimento web, como:

Manipulação do DOM;
Eventos JavaScript;
Formulários;
Validação de dados;
Consumo de API;
Requisições HTTP;
JavaScript modular;
Funções assíncronas;
async/await;
Manipulação de arrays;
Uso de map, filter e outros métodos;
Responsividade com CSS;
Organização de arquivos;
Webpack;
Babel;
Controle de versão com Git;
Deploy utilizando GitHub Pages.
🖼️ Interface

A aplicação possui uma interface simples e objetiva, buscando facilitar a criação e visualização dos agendamentos.

Tela principal

A tela principal apresenta os agendamentos cadastrados e permite criar um novo atendimento.

Novo agendamento

Ao selecionar a opção de novo agendamento, o usuário pode preencher os dados do tutor, pet, serviço, data e horário.

Cancelamento

Cada agendamento possui uma opção para cancelamento, permitindo manter a agenda organizada.

📚 Aprendizados

Este projeto foi importante para colocar em prática conhecimentos de JavaScript e desenvolvimento web, principalmente relacionados à criação de aplicações dinâmicas.

Entre os principais aprendizados estão:

Como estruturar uma aplicação JavaScript;
Como separar responsabilidades em diferentes módulos;
Como manipular elementos HTML através do JavaScript;
Como trabalhar com formulários;
Como realizar validações;
Como consumir uma API REST;
Como criar e remover registros através de requisições HTTP;
Como utilizar o Day.js para trabalhar com datas e horários;
Como configurar o Webpack;
Como utilizar o Babel;
Como preparar uma aplicação para publicação.
🔮 Melhorias futuras

Algumas funcionalidades que podem ser adicionadas futuramente:

 Sistema de edição de agendamentos;
 Autenticação de usuários;
 Cadastro de clientes;
 Cadastro de pets;
 Histórico de consultas;
 Filtro por data;
 Filtro por pet;
 Filtro por serviço;
 Sistema de notificações;
 Integração com banco de dados;
 Dashboard para gerenciamento dos atendimentos.
👨‍💻 Autor

Ruan Victor

Desenvolvedor focado em desenvolvimento web e criação de aplicações utilizando JavaScript, HTML e CSS.

🔗 Contato e redes
💼 LinkedIn: Ruan Victor
🐙 GitHub: RuanVCLima
📄 Licença

Este projeto foi desenvolvido para fins de estudo e demonstração de conhecimentos em desenvolvimento web.

Sinta-se à vontade para estudar, modificar e utilizar o projeto como referência.

⭐ Se este projeto foi útil para você, considere deixar uma estrela no repositório!
