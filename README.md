# NR_2_Node
Aplicação em Node.js, na qual irá receber pacotes Json, via Mqtt, parsea-lo e alimentar um banco de dados MySQl. 


[Sendor] → -mqtt-→ [Aplicação Node.js] → [mysql] 
                             ↓
                          [Nuven] →-SocketIo-→ [App mobile]
