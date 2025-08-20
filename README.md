# NewVoyage 🏖
> Projeto desenvolvido em JavaScript com o objetivo de proporcionar uma experiência mais eficiente e organizada para turistas que visitam litorais e pontos turísticos. 🌊

## Índice
 - Objetivo do Projeto
 - Funcionalidades
 - Estrutura de Pastas
 - Instalação
 - Principais Dependências
 - Inicialização do Banco de Dados
 - Ferramentas
 - Contribuição
 - Licença
 - Autores

## Objetivo do Projeto 🚀
> A motivação deste projeto é melhorar a experiência do turista, facilitando o acesso a informações confiáveis e organizadas sobre os destinos, promovendo o turismo consciente e valorizando os atrativos das regiões litorâneas e demais pontos turísticos.

## Funcionalidades 🌟
 - Registro e login de usuários turistas, oferecendo acesso a informações importantes sobre os locais.
 - Registro e login de administradores, com permissões para gerenciar os dados do sistema.
 - Funcionalidades administrativas:
 - Adicionar novos locais turísticos.
 - Listar todos os locais disponíveis.
 - Filtrar locais por tipo (praias, pontos turísticos, etc.).
 - Atualizar informações de cada local.
 - Remover locais do banco de dados quando necessário.

## Estrutura de Pastas 📂
```bash
src/
├── controllers/
│   ├── adminControllers.js
│   ├── placeControllers.js
│   └── touristControllers.js
├── database/
│   └── database.sqlite
├── middlewares/
│   ├── authentication.js
│   └── validate.js
├── routes/
│   ├── adminRoutes.js
│   ├── placeRoutes.js
│   └── touristRoutes.js
├── schemas/
│   ├── placeSchemas.js
│   └── userSchemas.js
└── utils/
│   └── auth.js
└── app.js   
└── server.js
```

## Instalação 📦
> Antes de começar, certifique-se de ter o Node.js instalado.

```bash
git clone https://github.com/Bianca-Lucas/tourism-platform-BackEnd.git
cd tourism-platform-BackEnd
npm install
```

## Principais Dependências 🧱
Se necessário, instale manualmente:

```bash
npm install express
npm install zod
npm install bcrypt
npm install jsonwebtoken
npm install prisma @prisma/client
```

## Inicialização do Banco de Dados 🗃
 Configure o Prisma com SQLite:

```bash
npx prisma init
```

## Ferramentas 🛠
 - Node.js
 - Express.js
 - SQLite
 - Zod
 - Bcrypt
 - JWT

## Contribuição 🙋‍♂
> Contribuições são bem-vindas!
> Sinta-se livre para enviar pull requests para melhorias no projeto.

## Licença 📝
> Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Autores ✨
 - Thayro Holanda
