📁 docs/                                            # Documentação do projeto
│   ├── 📄 Diagrama sem nome.drawio                 # Diagramas do projeto
│   └── 📄 mapa de funcções da estrutura.odt        # Mapa das funções da estrutura
│    
📁 web/                                             # Diretório principal da aplicação web
    ├── 📄 .gitignore                               # Arquivo de configuração do Git para ignorar arquivos/pastas
    ├── 📁 bin/                                     # Scripts de build e execução
    │   ├── 📄 build                                # Script de build
    │   ├── 📄 dev                                  # Script de desenvolvimento
    │   ├── 📄 generat                              # Script de geração de componentes
    │   ├── 📄 start                                # Script de inicialização
    │   └── 📄 test                                 # Script de testes
    │
    ├── 📄 eslint.config.js                         # Configurações do ESLint
    ├── 📄 index.html                               # Arquivo HTML principal
    ├── 📄 package.json                             # Dependências e scripts do projeto
    ├── 📁 public/                                  # Arquivos públicos da aplicação
    │
    ├── 📁 src/                                     # Código-fonte da aplicação
    │   ├── 📁 app/                                 # Aplicação principal
    │   │   ├── 📁 assets/                          # Recursos estáticos (imagens, estilos)
    │   │   │   ├── 📁 images/                      # Imagens da aplicação
    │   │   │   │   └── 📄 react.svg                # Imagem do React
    │   │   │   └── 📁 stylesheets/                 # Estilos da aplicação
    │   │   │       ├── 📁 admin/                   # Estilos da área administrativa
    │   │   │       │   └── 📄 Admin.css            # Estilos da área administrativa
    │   │   │       ├── 📁 layouts/                 # Estilos dos layouts
    │   │   │       │   └── 📄 .keep                # Arquivo para manter a pasta no controle de versão
    │   │   │       ├── 📁 public/                  # Estilos da área pública
    │   │   │       │   └── 📄 public.css           # Estilos da área pública
    │   │   │       └── 📁 pwa/                     # Estilos do PWA
    │   │   │           ├── 📄 app.css              # Estilos da aplicação
    │   │   │           └── 📄 index.css            # Estilos do PWA
    │   │   │
    │   │   ├── 📁 auth/                            # Componentes reutilizáveis da aplicação
    │   │   │   └── 📄 authservice.js               # Componente de botão
    │   │   │
    │   │   ├── 📁 components/                      # Componentes reutilizáveis da aplicação
    │   │   │   └── 📄 ProtectedRoutes.js           # Componente de botão
    │   │   │   
    │   │   ├── 📁 controllers/                     # Controladores da aplicação
    │   │   │   ├── 📁 admin/                       # Controladores da área administrativa
    │   │   │   │   ├── 📄 DashboardController.js   # Controlador do dashboard administrativo
    │   │   │   │   ├── 📄 OrdersController.js      # Controlador de pedidos administrativos
    │   │   │   │   ├── 📄 ProductsController.js    # Controlador de produtos administrativos
    │   │   │   │   └── 📄 UsersController.js       # Controlador de usuários administrativos
    │   │   │   │
    │   │   │   └── 📁 public/                      # Controladores da área pública
    │   │   │       ├── 📄 CartController.js        # Controlador do carrinho de compras
    │   │   │       ├── 📄 CatalogController.js     # Controlador do catálogo de produtos
    │   │   │       ├── 📄 HomeController.js        # Controlador da página inicial
    │   │   │       ├── 📄 OrdersController.js      # Controlador de pedidos públicos
    │   │   │       └── 📄 UsersController.js       # Controlador de usuários públicos
    │   │   │
    │   │   ├── 📁 helpers/                         # Helpers da aplicação
    │   │   │   ├── 📁 admin/                       # Helpers da área administrativa
    │   │   │   │   ├── 📄 DashboardHelper.js       # Helper do dashboard administrativo
    │   │   │   │   ├── 📄 OrdersHelper.js          # Helper de pedidos administrativos
    │   │   │   │   ├── 📄 ProductsHelper.js        # Helper de produtos administrativos
    │   │   │   │   └── 📄 UsersHelper.js           # Helper de usuários administrativos
    │   │   │   │
    │   │   │   └── 📁 public/                      # Helpers da área pública
    │   │   │       ├── 📄 CartHelper.js            # Helper do carrinho de compras
    │   │   │       ├── 📄 CatalogHelper.js         # Helper do catálogo de produtos
    │   │   │       ├── 📄 HomeHelper.js            # Helper da página inicial
    │   │   │       ├── 📄 OrdersHelper.js          # Helper de pedidos públicos
    │   │   │       └── 📄 UsersHelper.js           # Helper de usuários públicos
    │   │   │
    │   │   ├── 📁 models/                          # Modelos da aplicação
    │   │   │   ├── 📄 Cart.js                      # Modelo de Carrinho
    │   │   │   ├── 📄 Category.js                  # Modelo de Categoria
    │   │   │   ├── 📄 Order.js                     # Modelo de Pedido
    │   │   │   ├── 📄 Product.js                   # Modelo de Produto
    │   │   │   └── 📄 User.js                      # Modelo de Usuário
    │   │   │
    │   │   ├── 📁 pages/                           # Páginas da aplicação
    │   │   │   ├── 📁 admin/                       # Páginas da área administrativa
    │   │   │   │   ├── 📄 AdminDashboardPage.jsx   # Página do dashboard administrativo
    │   │   │   │   ├── 📄 ManageOrdersPage.jsx     # Página de gerenciamento de pedidos
    │   │   │   │   ├── 📄 ManageProductsPage.jsx   # Página de gerenciamento de produtos
    │   │   │   │   ├── 📄 ManageUsersPage.jsx      # Página de gerenciamento de usuários
    │   │   │   │
    │   │   │   └── 📁 public/                      # Páginas da área pública
    │   │   │       ├── 📄 CatalogPage.jsx          # Página do catálogo de produtos
    │   │   │       ├── 📄 HomePage.jsx             # Página inicial
    │   │   │       └── 📄 ProductDetailsPage.jsx   # Página de detalhes do produto
    │   │   │
    │   │   ├── 📁 pwa/                             # Aplicação PWA
    │   │   │   ├── 📄 app.jsx                      # Arquivo de aplicação do PWA
    │   │   │   └── 📄 main.jsx                     # Arquivo principal do PWA
    │   │   │
    │   │   └── 📁 views/                           # Views da aplicação
    │   │       ├── 📁 users/                       # Views de usuários
    │   │       │   ├── 📄 Register.jsx             # Página de registro de usuários
    │   │       │   └── 📄 Login.jsx                # Página de login de usuários
    │   │       │
    │   │       ├── 📁 shared/                      # Views compartilhadas
    │   │       │   └── 📄 .keep                    # Arquivo para manter a pasta no controle de versão
    │   │       │
    │   │       ├── 📁 orders/                      # Views de pedidos
    │   │       │   └── 📄 Checkout.jsx             # Página de checkout
    │   │       │
    │   │       ├── 📁 layouts/                     # Views de layouts
    │   │       │   └── 📄 Application.jsx          # Layout principal da aplicação
    │   │       │
    │   │       ├── 📁 home/                        # Views da página inicial
    │   │       │   └── 📄 Home.jsx                 # Página inicial
    │   │       │
    │   │       ├── 📁 catalog/                     # Views do catálogo de produtos
    │   │       │   ├── 📄 ProductDetails.jsx       # Página de detalhes do produto
    │   │       │   └── 📄 Catalog.jsx              # Página do catálogo de produtos
    │   │       │
    │   │       ├── 📁 cart/                        # Views do carrinho de compras
    │   │       │   └── 📄 Cart.jsx                 # Página do carrinho de compras
    │   │       │
    │   │       └── 📁 admin/                       # Views da área administrativa
    │   │           ├── 📁 users/                   # Views de usuários administrativos
    │   │           │   └── 📄 ManageUsers.jsx      # Página de gerenciamento de usuários
    │   │           │
    │   │           └── 📁 products/                # Views de produtos administrativos
    │   │               └── 📄 ManageProducts.jsx   # Página de gerenciamento de produtos
    │   │
    │   ├── 📁 config/                              # Configurações da aplicação
    │   │   ├── 📄 database.js                      # Configurações do banco de dados
    │   │   └── 📄 routes.js                        # Configurações de rotas da aplicação
    │   │
    │   ├── 📁 public/                              # Arquivos públicos da aplicação
    │   │
    │   └── 📁 tests/                               # Testes da aplicação
    │       ├── 📄 Cart.test.js                     # Testes do modelo de Carrinho
    │       ├── 📄 Category.test.js                 # Testes do modelo de Categoria
    │       ├── 📄 Order.test.js                    # Testes do modelo de Pedido
    │       ├── 📄 Product.test.js                  # Testes do modelo de Produto
    │       └── 📄 User.test.js                     # Testes do modelo de Usuário
    │
    ├── 📄 vite.config.js                           # Configurações do Vite   
    │
    │
    └── 📄 README.md                                # Arquivo de descrição do projeto