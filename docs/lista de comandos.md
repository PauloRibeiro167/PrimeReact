# Estrutura de Comandos

## 📂 comandos
  │      
  └──📂 Bin/  
      │   
      │  
      ├── 🖥️ build  
      │        │   
      │        └──{ Função: Este comando utiliza o Vite para compilar os arquivos do
      │              projeto, otimizando-os para produção. Ele gera uma versão otimizada 
      │              do código que pode ser implantada em um servidor.} 
      │  
      ├── 🖥️ dev 
      │        │           
      │        └──{ Função: Este comando inicia o servidor de desenvolvimento do Vite,
      │              permitindo que você veja as mudanças em tempo real enquanto desenvolve │              a aplicação. Ele também fornece hot-reloading para uma experiência 
      │              de desenvolvimento │mais rápida.}
      │   
      ├── 🖥️ g_controller (nome)
      │        │            
      │        └──{ Função: Este comando gera um controller automaticamente com base em
      │              templates predefinido de um controller.}  
      │  
      ├── 🖥️ g_model (nome)
      │        │            
      │        └──{ Função: Este comando gera um model automaticamente com base em
      │              templates predefinido de um model.}  
      │
      ├── 🖥️ g_table (nome)
      │        │            
      │        └──{ Função: Este comando gera um model automaticamente com base em
      │              templates predefinido de um model.}           
      │  
      ├── 🖥️ start  
      │        │          
      │        └──{ Função: Este comando cria uma tabela no banco de dados SQLite e gera um 
      │              model automaticamente com base em templates predefinidos. O nome da 
      │              tabela é obrigatório e as colunas são opcionais. Se as colunas forem
      │              fornecidas, elas devem ser especificadas no formato nome:tipo.}
      │   
      └── 🖥️ test
                │            
                └──{ Função: Este comando utiliza o Vite para executar os testes definidos
                      na aplicação. Ele garante que todas as funcionalidades estão funcionando conforme o esperado e ajuda a identificar bugs.}
