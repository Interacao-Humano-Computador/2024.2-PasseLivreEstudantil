## Introdução

A Análise Hierárquica de Tarefas (HTA) é um método de análise de tarefas que visa representar e decompor uma tarefa complexa em uma hierarquia de objetivos, subobjetivos e operações, a fim de facilitar a compreensão de como um usuário realiza uma tarefa e permitir que sejam identificados pontos problemáticos e de melhoria. A HTA é amplamente utilizada em diversos contextos, como no desenvolvimento de produtos, serviços e na melhoria de processos. Ela pode ser representada por uma tabela, ou por um diagrama, com a notação conforme a figura 1.

<center>

<font size="3"><b>Figura 1 </b> - Notação diagrama HTA.</font>

![Notação diagrama HTA](../../assets/Subojetivos.png)

<font size="3"><b>Fonte:</b> BARBOSA e SILVA, 2011.</font>

</center>

## Análise de Tarefas

No que diz respeito às tarefas para análise com o método HTA, foram escolhidas o acesso ao meu painel e o compartilhamento de eventos, conforme explicitado nas figuras de ** a ** e nas tabelas de ** a **.

### Extensão de Acessos

Nessa tarefa, o usuário possui o objetivo de visualizar um pedido dentro dos pedidos realizados. A figura 2 apresenta o diagrama HTA relativa a tarefa, já a tabela 1 representa o mesmo HTA em tabela

Nessa tarefa, o usuário possui o objetivo fazer uma solicitação de extensão de acessos do seu cartão do passe livre estudantil. A figura ** apresenta o diagrama HTA relativa a tarefa, já a tabela ** representa o mesmo HTA em tabela

<center>

<font size="3"><b>Figura \_\_</b> - Diagrama HTA de Extensão de Acessos.</font>

![Notação diagrama HTA](../../assets/extensaoAcessosDiagrama.png){width: 300}

<font size="3"><p style="text-align: center">Fonte: [Breno Fernandes](https://github.com/Brenofrds).</p></font>

<font size="3"><b>Tabela \_\_</b> - HTA de Extensão de Acessos.</font>

| **Objetivos/Operações**                          | **Problemas e Recomendações** |
| ------------------------------------------------ | ----------------------------- |
| **0. Solicitar extensão de acessos**             |                               |
| **1. Fazer login no sistema**                    |                               |
| **1.1. Inserir login e senha**                   |                               |
| **1.2. Confirmar autenticação**                  |                               |
| **2. Acessar a aba "Extensão de Acesso"**        |                               |
| **2.1. Localizar a aba no menu principal**       |                               |
| **2.2. Clicar na aba para abrir a página**       |                               |
| **3. Preencher o formulário de solicitação**     |                               |
| **3.1. Ler e aceitar o Termo de Uso**            |                               |
| **3.2. Selecionar o motivo da solicitação**      |                               |
| **3.3. Preencher os campos obrigatórios**        |                               |
| **3.4. Anexar os documentos necessários**        |                               |
| **3.5. Confirmar o envio do formulário**         |                               |
| **4. Acompanhar o status da solicitação**        |                               |
| **4.1. Acessar a aba "Acompanhar Solicitações"** |                               |
| **4.2. Verificar o status atual da solicitação** |                               |

<font size="3"><p style="text-align: center">Fonte: [Breno Fernandes](https://github.com/Brenofrds).</p></font>

</center>

## Cenário 04 - Alteração de Foto

![Notação diagrama HTA](../../assets/HTA_cenario4.png)

| **Objetivos / Operações**                                      | **Problemas e Recomendações**                                                                                                                           |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0: Atualizar foto no sistema do Passe Livre Estudantil 1>2** |                                                                                                                                                         |
| **1: Acessar o sistema do Passe Livre Estudantil**             | **Input:** Credenciais (número de CPF e senha).                                                                                                         |
|                                                                | **Feedback:** Acesso ao sistema.                                                                                                                        |
|                                                                | **Plano:** Informar as credenciais e clicar no botão de login.                                                                                          |
| **1.1:Localizar no menu a opção "Alteração de Foto"**          |                                                                                                                                                         |
|                                                                |                                                                                                                                                         |
|                                                                | **Plano:** Localizar e clicar na aba "Alteração de Foto" no menu.                                                                                       |
|                                                                |                                                                                                                                                         |
| **3: Preencher o formulário de alteração de foto 1/2**         | **Input:** Campo de observação de alteração de foto.                                                                                                    |
|                                                                |                                                                                                                                                         |
|                                                                | **Plano:** Informar motivação da troca de foto                                                                                                          |
|                                                                | **Problema:** Falta de informações claras sobre o formato e a resolução da foto.                                                                        |
|                                                                | **Recomendação:** Incluir informações detalhadas sobre os requisitos da foto, como formato (PNG, JPEG) e resolução.                                     |
| **4: Enviar foto para o sistema 1>2**                          | **Input:** Foto selecionada.                                                                                                                            |
|                                                                | **Feedback:** Foto é enviada e armazenada no sistema.                                                                                                   |
|                                                                | **Plano:** Selecionar a foto e clicar em "Enviar".                                                                                                      |
|                                                                | **Problema:** O processo de verificação da foto não é feito de forma síncrona.                                                                          |
|                                                                | **Recomendação:** Implementar verificação de foto imediata após o envio, com feedback instantâneo ao usuário sobre a aceitação.                         |
| **5: Verificar o status da foto**                              |                                                                                                                                                         |
|                                                                | **Feedback:** Status da foto e mensagem de erro, se houver.                                                                                             |
|                                                                | **Plano:** Voltar ao site para consultar o status da alteração.                                                                                         |
|                                                                | **Problema:** Devido ao fato da verificação de foto não ser imediata, otempo de espera para verificar a aceitação da foto é longo, causando frustração. |
| **6: Resolver o erro da foto recusada**                        |                                                                                                                                                         |
|                                                                | **Feedback:** Nova foto é enviada com os requisitos corretos.                                                                                           |
|                                                                |                                                                                                                                                         |
| **7: Solicitar a segunda via do cartão**                       |                                                                                                                                                         |
|                                                                | **Feedback:** Solicitação da segunda via do cartão registrada.                                                                                          |
|                                                                | **Plano:** Solicitar a segunda via do cartão com a nova foto.                                                                                           |
|                                                                |                                                                                                                                                         |

<font size="3"><p style="text-align: center">Fonte: [Mateus Vieira](https://github.com/matix0).</p></font>

## Bibliografia

> Barbosa, S. D. J.; Silva, B. S. da; Silveira, M. S.; Gasparini, I.; Darin, T.; Barbosa, G. D. J. (2021) Interação Humano-Computador e Experiência do usuário. Autopublicação.

## Histórico de Revisão

|    Data    | Data Prevista de Revisão | Versão |     Descrição     |   Autor   |  Revisor  |
| :--------: | :----------------------: | :----: | :---------------: | :-------: | :-------: |
| 14/12/2024 |        16/12/2024        |  1.0   | Criação da Página | Fernandes |  Mateus   |
| 16/12/2024 |        17/12/2024        |  1.1   |   Adição HTA 4    |  Mateus   | Fernandes |
