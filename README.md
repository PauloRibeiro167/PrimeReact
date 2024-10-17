# 📄 README.md
**Função:** Arquivo de documentação geral do projeto. Contém instruções sobre como rodar, configurar e contribuir no projeto.
**Interações:** Esse arquivo deve ser acessado por desenvolvedores que vão trabalhar no projeto ou stakeholders que precisam entender o funcionamento geral.

## 📁 /docs
**Função:** Diretório de documentação e diagramas técnicos.
**Interações:** Utilizado para manter registros e mapear funcionalidades do projeto. O diagrama pode ser atualizado conforme novos recursos são adicionados.

## 📁 /web
**Função:** Diretório principal do projeto web.
**Interações:** Contém todo o código-fonte, dependências, e arquivos de configuração da aplicação.

## 📁 /bin
**Função:** Scripts de automação, incluindo build, desenvolvimento, e testes.
**Interações:** Desenvolvedores utilizam esses scripts para gerenciar tarefas como inicializar a aplicação, executar testes, ou realizar o build.

## 📄 eslint.config.js
**Função:** Configuração do ESLint, ferramenta de análise estática para encontrar problemas no código JavaScript/JSX.
**Interações:** Mantém as regras de qualidade e estilo de código. Deve ser utilizado em conjunto com um linter configurado.

## 📁 /src
**Função:** Diretório principal do código-fonte.
**Interações:** Contém os componentes, páginas, controladores, modelos, e estilos da aplicação.

### 📁 /app
**Função:** Diretório que contém os principais blocos da aplicação.
**Interações:** Serve como ponto central onde ficam os ativos, controladores, e lógica da aplicação.

### 📁 /assets
**Função:** Armazenar recursos estáticos como imagens e arquivos CSS.
**Interações:** Carregado nas views e páginas para estilizar e fornecer os elementos visuais da aplicação.

### 📁 /controllers
**Função:** Armazena a lógica de controle da aplicação, dividida em controllers públicos e administrativos.
**Interações:** Chamado quando o usuário interage com a aplicação, respondendo a essas ações com manipulação dos dados ou navegação.

### 📁 /models
**Função:** Modelos de dados que representam as entidades da aplicação.
**Exemplo de Interações:**
- **User.js:** Representa os dados dos usuários (admin e cliente).
- **Product.js:** Armazena as informações dos produtos.
- **Order.js:** Armazena os dados relacionados às compras e pedidos.

### 📁 /pages
**Função:** Armazena as páginas principais da aplicação, separadas entre área pública e área administrativa.
**Interações:** Cada página representa uma rota principal, como /home ou /admin/dashboard. Essas páginas carregam os componentes e lógica para exibir o conteúdo para os usuários.

### 📁 /views
**Função:** Define a visualização final do conteúdo para o usuário.
**Interações:** Carrega dados fornecidos pelos controladores e exibe os componentes React para o usuário final.

### 📁 /config
**Função:** Armazena as configurações da aplicação, como as rotas.
**Interações:** Utilizado pelo roteador para definir os caminhos da aplicação e a estrutura de navegação.

### 📁 /tests
**Função:** Armazena os testes da aplicação.
**Interações:** Executado para garantir que a aplicação funcione corretamente conforme o esperado.