# NR_2_Node


    Aplicação em Node.js, na qual irá receber pacotes Json, via Mqtt, parsea-la e alimentar um banco de dados MySQl.


[Sendor] → -mqtt-→ [Aplicação Node.js] → [mysql] 
                             ↓
                          [Nuven] →-SocketIo-→ [App mobile]









Instalações------------------------------


npm--------------------------------------
Criando projeto com npm 
→ npm init // vai perguntar a versão e nome do projeto.
→ npm install express --save  
→ npm install sequelize --save 
→ npm install --save-dev sequelize-cli // para console Sequelize. * 
   → npx sequelize [comando] // para enviar comandos ao sequelze no console.
   → npx sequelize migration:create --name=nome_da_migration //criando uma migrate 
   → npx sequelize db:migrate // criando uma tabela com o arquivo Migration
   → npx sequelize db:migrate // desfaz a ultima ateração. 
→ npm install pg --save
→ npm install pg-hstore --save
→ npm install mqtt --save 





Git--------------------------------------
//Configuração de usuario: 
→ git config --global user.name "Nome"

//configuração de Email
→ git config --global user.email "email"

//configuração de editor padrão
→ git config --global core.editor "diretorio/program.exe"
