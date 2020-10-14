# NR_2_Node


    Aplicação em Node.js, na qual irá receber pacotes Json, via Mqtt, parsea-la e alimentar um banco de dados MySQl.


[Sendor] → -mqtt-→ [Aplicação Node.js]   ⇌  [mysql] 
                             ↓
                          [Nuven] →-SocketIo-→ [App mobile]



Reunião═════════════════════════════════════════════════════════════

- Reuniões toda segunda as 9:00 Am



Instalações═══════════════════════════════════════════════════════════════════


NPM--------------------------------------

]Criando projeto com npm 
→ npm init // vai perguntar a versão e nome do projeto.
→ npm install express --save  
→ npm install sequelize --save 
→ npm install --save-dev sequelize-cli // para console Sequelize. * 
   → npx sequelize [comando] // para enviar comandos ao sequelze no console.
   → npx sequelize migration:create --name=nome_da_migration // (banco de dados) criando uma migrate 
   → npx sequelize db:migrate // criando uma tabela com o arquivo Migration
   → npx sequelize db:migrate undo // desfaz a ultima ateração. 
→ npm install pg --save
→ npm install pg-hstore --save
→ npm install mqtt --save 



GIT--------------------------------------

//Configuração de usuario: 
→ git config --global user.name "Nome"

//configuração de Email
→ git config --global user.email "email"

//configuração de editor padrão
→ git config --global core.editor "diretorio/program.exe"


Controle------------------------

✓ - conexão com o banco de dados. 
✓ - querys(Create, post, update e delete). 
✓ - conexão Mqtt
✓ - Receber messagem via Mqtt
✓ - receber pacote json via Mqtta
✓ - Parcear pacote json enviado/Mqtt
✓ - publicar dados do pacote json enviado do Mqtt no banco de dados, via sequelize. 







