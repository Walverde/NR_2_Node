# NR_2_Node

<!-- Inicio  -->
## Home 

### Indice

- ***Menus***
 | [Controle](#Controle) | | [Referencias](#Referencias) | 

 <!-- --------------------------------------------- -->
- ***Arquvios***
 <!-- | [Anotações][200] | -->
- ***Globais***
 | [~~Pessoal~~][101] | | [Template][100] | | [Home][102] |
- ***Projetos & Anotações***
    - _Projetos_ 
| AppEnertrack | | Wall-e | | Albatroz | | Cristal |
    - _Anotações_ 
| [Sistemas][201] | | [Linguagens][200] |  | [Conexões][203] | | [Git][204] | 
<!-- | [Python][205] | | [Mqtt][206] | |  | -->


    Aplicação em Node.js, na qual irá receber pacotes Json, via Mqtt, parsea-la e alimentar um banco de dados MySQl.

```

[Sendor] → -mqtt-→ [Aplicação Node.js]   ⇌  [mysql] 
                             ↓
                          [Nuven] →-SocketIo-→ [App mobile]

```

Reunião═════════════════════════════════════════════════════════════

- Reuniões toda segunda as 9:00 Am



Instalações═══════════════════════════════════════════════════════════════════


NPM--------------------------------------



Controle------------------------

[x]✓ - conexão com o banco de dados. 
[x]✓ - querys(Create, post, update e delete). 
[x]✓ - conexão Mqtt
[x]✓ - Receber messagem via Mqtt
[x]✓ - receber pacote json via Mqtta
[x]✓ - Parcear pacote json enviado/Mqtt
[x]✓ - publicar dados do pacote json enviado do Mqtt no banco de dados, via sequelize. 

# Referencias

- [Formatações basicas do Git][2]
- [Site de atalhos de acaracteres][1]

[1]:http://www.aprendaemsegundos.com/2016/11/atalhos-de-teclado-para-caracteres.html
[2]:https://docs.github.com/pt/free-pro-team@latest/github/managing-your-work-on-github/about-task-lists


[100]:https://github.com/Walverde/notepad/blob/notepad_01/template.md
[101]:https://github.com/Walverde/notepad/blob/notepad_01/Pessoal.md
[102]:https://github.com/Walverde/notepad/blob/notepad_01/README.md

<!-- Aqui vai ficar os caminhos para os demais projetos pessoais -->

[200]:https://github.com/Walverde/notepad/tree/notepad_01/Anota%C3%A7%C3%B5es/sistemas.md
[201]:https://github.com/Walverde/notepad/tree/notepad_01/Anota%C3%A7%C3%B5es/linguagens.md
[203]:https://github.com/Walverde/notepad/tree/notepad_01/Anota%C3%A7%C3%B5es/conections.md
[204]:https://github.com/Walverde/notepad/tree/notepad_01/Anota%C3%A7%C3%B5es/git.md



[205]:https://github.com/Walverde/notepad/tree/notepad_01/Anota%C3%A7%C3%B5es/python.md
[206]:https://github.com/Walverde/notepad/tree/notepad_01/Anota%C3%A7%C3%B5es/mqtt.md


