# GOMS (Goals, Operators, Methods and Selection Rules)

## Introdução

O GOMS é um método para descrever uma tarefa e o conhecimento do usuário sobre como realizá-la em termos de objetivos (goals), operadores (operators), métodos (methods) e regras de seleção (selection rules). Os objetivos representam o que o usuário quer realizar utilizando o software (e.g., editar um texto). Os operadores são primitivas internas (cognitivas) ou externas (as ações concretas que o software permite que os usuários façam, tal como um comando e seus parâmetros digitados num teclado; a seleção de menus; o clique de um botão). Os métodos são sequências bem conhecidas de subobjetivos e operadores que permitem atingir um objetivo maior. Quando há mais do que um método para atingir um mesmo objetivo, são necessárias regras de seleção, que representam tomadas de decisão dos usuários sobre qual método utilizar numa determinada situação. Em suma, o GOMS caracteriza o conhecimento procedimental de uma pessoa ao realizar tarefas num determinado dispositivo <a id="anchor_1" href="#REF1">(Kieras, 2001)</a>.

<font size="3"><p style="text-align: center">Figura 1 &emsp;Explicação do GOMS</p></font>

<center>![Figura 1](../../assets/livro_goms.png)</center>
<font size="3"><p style="text-align: center">Fonte: (BARBOSA, S. D. J.; SILVA, B. S. Interação Humano-Computador. Rio de Janeiro: Elsevier, 2011.)</p></font>

## Motivo da Escolha

Escolhemos o CMN-GOMS pois o mesmo é utilizado para fornecer uma visualização de uma tarefa de forma que temos como resultado uma representação visual do cenário escolhido, possibilitando uma identificação do que se fazer nesse determinário cenário com um determinado tempo a ser gasto

### Cenário 1: Visualização da obtenção do passe livre

**GOAL 0:** Fazer login na página para visualizar o status do passe livre  
&emsp;**GOAL 1:** Verificar o status do passe livre  
&emsp;&emsp;**OP 1.1:** Identificar e ler as informações sobre o status do passe  
&emsp;&emsp;**OP 1.2:** Interpretar que o passe ainda está "em análise"

### Cenário 2: Solicitação de segunda via de cartão

**GOAL 0:** Fazer login na página para solicitar a segunda via do cartão  
&emsp;**GOAL 1:** Navegar até a aba de solicitação de segunda via  
&emsp;&emsp;**OP 1.1:** Procurar no menu a opção correspondente à segunda via  
&emsp;&emsp;**OP 1.2:** Pressionar o botão para acessá-la  
&emsp;**GOAL 2:** Preencher as informações para solicitar a segunda via  
&emsp;&emsp;**OP 2.1:** Ler as instruções apresentadas na página  
&emsp;&emsp;**OP 2.2:** Preencher os campos obrigatórios  
&emsp;&emsp;**OP 2.3:** Fazer upload do comprovante de pagamento  
&emsp;&emsp;**OP 2.4:** Fazer upload do boletim de ocorrência  
&emsp;&emsp;**OP 2.5:** Pressionar o botão "Registrar Solicitação"

### Cenário 3: Consulta do status do cartão e informações de retirada

**GOAL 0:** Fazer login na página para verificar as informações do cartão  
&emsp;**GOAL 1:** Navegar até a aba de retirada de cartão  
&emsp;&emsp;**OP 1.1:** Procurar no menu a opção correspondente à retirada do cartão  
&emsp;&emsp;**OP 1.2:** Pressionar o botão para acessá-la  
&emsp;**GOAL 2:** Consultar as informações de retirada  
&emsp;&emsp;**OP 2.1:** Ler as informações apresentadas na página (código, datas, horário e local)  
&emsp;&emsp;**OP 2.2:** Anotar os detalhes relevantes para planejar a retirada

### Cenário 4: Atualização de foto do cartão

**GOAL 0:** Fazer login na página para atualizar a foto do cartão  
&emsp;**GOAL 1:** Navegar até a aba de alteração de foto  
&emsp;&emsp;**OP 1.1:** Procurar no menu a opção correspondente à alteração de foto  
&emsp;&emsp;**OP 1.2:** Pressionar o botão para acessá-la  
&emsp;**GOAL 2:** Solicitar atualização da foto do cartão  
&emsp;&emsp;**OP 2.1:** Ler as instruções apresentadas na página  
&emsp;&emsp;**OP 2.2:** Pressionar o botão "Anexar Foto" para selecionar a nova foto  
&emsp;&emsp;**OP 2.3:** Fazer upload da nova foto  
&emsp;&emsp;**SEL. RULE:** O usuário escolheu uma foto do dispositivo para upload  
&emsp;&emsp;**OP 2.4:** Salvar a foto desejada  

### Cenário 7: Solicitação de Extensão de Acesso

**GOAL 0:** Fazer login na página para solicitar extensão de acesso  
&emsp;**GOAL 1:** Navegar até a aba "Extensão de Acesso"  
&emsp;&emsp;**OP 1.1:** Identificar a aba no menu  
&emsp;&emsp;**OP 1.2:** Clicar na aba para acessá-la  
&emsp;**GOAL 2:** Fazer uma nova solicitação  
&emsp;&emsp;**OP 2.1:** Ler e aceitar o Termo de Uso  
&emsp;&emsp;**OP 2.2:** Preencher o formulário com informações obrigatórias  
&emsp;&emsp;**OP 2.3:** Anexar os documentos necessários  
&emsp;&emsp;**OP 2.4:** Enviar a solicitação  
&emsp;**GOAL 3:** Acompanhar o status da solicitação  
&emsp;&emsp;**OP 3.1:** Navegar até a aba "Acompanhar Solicitações"  
&emsp;&emsp;**OP 3.2:** Ler o status atual da solicitação (e.g., "Solicitado", "Em análise").

## Cenário 9: Criação do Cartão Virtual do Passe Livre Estudantil

**GOAL 0:** Obter o cartão virtual do passe livre estudantil  
&emsp;**GOAL 1:** Fazer login na página para acessar a funcionalidade  
&emsp;**GOAL 2:** Navegar até a aba "Cartão Virtual"  
&emsp;&emsp;**OP 2.1:** Procurar no menu a opção "Cartão Virtual"  
&emsp;&emsp;**OP 2.2:** Pressionar a opção para acessá-la  
&emsp;**GOAL 3:** Preencher os dados necessários para criar o cartão virtual  
&emsp;&emsp;**OP 3.1:** Inserir nome completo  
&emsp;&emsp;**OP 3.2:** Inserir CPF  
&emsp;&emsp;**OP 3.3:** Inserir o número do cartão físico  
&emsp;&emsp;**OP 3.4:** Confirmar os dados pressionando o botão "Gerar Cartão Virtual"  
&emsp;**GOAL 4:** Finalizar o processo e acessar o cartão virtual gerado  
&emsp;&emsp;**OP 4.1:** Visualizar o cartão virtual com QR Code na tela  
&emsp;&emsp;**OP 4.2:** Escolher uma das opções para integrar o cartão a aplicativos como Google Pay ou Apple Wallet


## Cenário 10: Retirada de cartão

**GOAL 0:** Retirada do cartão 
&emsp;**GOAL 1:** Fazer login na página para acessar a funcionalidade  
&emsp;**GOAL 2:** Navegar até a aba "Retirada de cartão"  
&emsp;&emsp;**OP 2.1:** Procurar no menu a opção "Local de retirada"  
&emsp;&emsp;**OP 2.2:** Pressionar a opção para acessá-la  
&emsp;**GOAL 3:** Preencher os dados necessários para retirada do cartão 
&emsp;&emsp;**OP 3.1:** Inserir nome completo  
&emsp;&emsp;**OP 3.2:** Inserir CPF  
&emsp;&emsp;**OP 3.3:** Inserir local  
&emsp;&emsp;**OP 3.4:** Inserir data
&emsp;&emsp;**OP 3.5:** Inserir horário 
&emsp;&emsp;**OP 3.6:** Confirmar os dados pressionando o botão "Confirmar Solicitação"  
&emsp;**GOAL 4:** Finalizar o processo e acessar o status da solicitação  
&emsp;&emsp;**OP 4.1:** Visualizar a Solicitação 







## Referências Bibliográficas

> <a id="REF1" href="#anchor_1">1. </a>Kieras, David (2001). Using the keystroke-level model to estimate execution times.

## Bibliografia

> Barbosa, S. D. J.; Silva, B. S. da; Silveira, M. S.; Gasparini, I.; Darin, T.; Barbosa, G. D. J. (2021) Interação Humano-Computador e Experiência do usuário. Autopublicação.

> https://github.com/Interacao-Humano-Computador/2023.1-BilheteriaDigital/blob/main/docs/analise-de-requisitos/metas-usabilidade.md#REF1

> https://github.com/Interacao-Humano-Computador/2022.1-AgenciaVirtualNeoenergia/blob/master/ghpages08/docs/analise_de_requisitos/metas_usabilidade.md

## Histórico de Revisão

|    Data    | Data Prevista de Revisão | Versão |     Descrição     |      Autor       | Revisor |
| :--------: | :----------------------: | :----: | :---------------: | :--------------: | :-----: |
| 02/12/2024 |        03/12/2024        |  1.0   | Criação da Página |      Mateus      | Lucena  |
| 03/12/2024 |        03/12/2024        |  1.1   |  Adição de goms   |   Breno Lucena   | Mateus  |
| 03/12/2024 |        03/12/2024        |  1.2   |  Adição de goms   | Breno Fernandes  | Mateus  |
| 17/12/2024 |        23/12/2024        |  1.3   |  Adição de goms   | Felipe Verissimo | Mateus  |
