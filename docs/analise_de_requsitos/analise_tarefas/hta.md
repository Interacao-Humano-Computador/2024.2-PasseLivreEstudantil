## Introdução

A Análise Hierárquica de Tarefas (HTA) é um método de análise de tarefas que visa representar e decompor uma tarefa complexa em uma hierarquia de objetivos, subobjetivos e operações, a fim de facilitar a compreensão de como um usuário realiza uma tarefa e permitir que sejam identificados pontos problemáticos e de melhoria. A HTA é amplamente utilizada em diversos contextos, como no desenvolvimento de produtos, serviços e na melhoria de processos. Ela pode ser representada por uma tabela, ou por um diagrama, com a notação conforme a figura 1.

<center>

<font size="3"><b>Figura 1 </b> - Notação diagrama HTA.</font>

![Notação diagrama HTA](../../assets/Subojetivos.png)

<font size="3"><b>Fonte:</b> BARBOSA e SILVA, 2011.</font>

</center>

## Análise de Tarefas

No que diz respeito às tarefas para análise com o método HTA, foram escolhidas o acesso ao meu painel e o compartilhamento de eventos, conforme explicitado nas figuras de ** a ** e nas tabelas de ** a **.

### cenario 2: Extensão de Acessos

Nessa tarefa, o usuário possui o objetivo de visualizar um pedido dentro dos pedidos realizados. A figura 2 apresenta o diagrama HTA relativa a tarefa, já a tabela 1 representa o mesmo HTA em tabela

Nessa tarefa, o usuário possui o objetivo fazer uma solicitação de extensão de acessos do seu cartão do passe livre estudantil. A figura ** apresenta o diagrama HTA relativa a tarefa, já a tabela ** representa o mesmo HTA em tabela

<center>

<font size="3"><b>Figura \_\_</b> - Diagrama HTA de Extensão de Acessos.</font>

![Notação diagrama HTA](../../assets/hta_extensao_acessos.png)

<font size="3"><p style="text-align: center">Fonte: [Breno Fernandes](https://github.com/Brenofrds).</p></font>

<font size="3"><b>Tabela \_\_</b> - HTA de Extensão de Acessos.</font>

| **Objetivos / Operações**                         | **Problemas e Recomendações**                                                                                                                                                                                                                                   |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0. Solicitar Extensão de Acessos 1 > 2**        | _plano_: seguir todas as etapas de forma sequencial para garantir que os termos de uso sejam apresentados corretamente de acordo com o motivo escolhido.                                                                                                         |
| **1. Nova Solicitação 1 > 2**                     | _problema_: anteriormente, essa etapa era paralela, o que dificultava a apresentação dos termos específicos. <br/> _recomendação_: o fluxo foi ajustado para ser sequencial, garantindo que o termo de uso seja exibido logo após a seleção do motivo.            |
| **1.1 Selecionar o motivo da solicitação**        |                                                                                                                                                                                                                                                                 |
| **1.2 Ler o termo de uso referente ao motivo escolhido** | _problema_: termos extensos podem desmotivar a leitura. <br/> _recomendação_: mostrar os termos de acordo com a escolha do motivo da solicitação                                                                        |
| **1.3 Realizar o upload da documentação exigida** | _problema_: ao realizar o upload do documento, o usuário não tem a opção de excluir ou editar o arquivo antes de enviar a solicitação.  
_recomendação_: permitir que o usuário revise, substitua ou exclua o arquivo enviado antes de concluir a solicitação, garantindo maior controle sobre os dados enviados.                                                 |
| **1.4 Finalizar a solicitação**                   |                                                                                                                                                                                                                                                                 |
| **2. Acompanhar o status da solicitação**         |                                                                                                                                                                                                                                                                 |


<font size="3"><p style="text-align: center">Fonte: [Breno Fernandes](https://github.com/Brenofrds).</p></font>

</center>

## Cenário 04 - Alteração de Foto

![Notação diagrama HTA](../../assets/HTA_cenario4.png)

| **Objetivos / Operações**                         | **Problemas e Recomendações**                                                                                                                                                                                                                                   |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0. Alterar a foto do cartão 1>2**               | _input_: arquivo de foto do usuário <br/> _feedback_: foto do usuário atualizada na tela de início <br/> _plano_: enviar o arquivo de foto para que seja validado e após isso alterado <br/> _recomendação_: enviar foto centralizada do rosto com fundo branco |
| **1. Enviar os arquvios necessários 1+2**         | _plano_: enviar a foto e informar observação caso seja necessário                                                                                                                                                                                               |
| **1.1 Enviar a foto**                             |                                                                                                                                                                                                                                                                 |
| **1.2 Informar observação referente à alteração** |                                                                                                                                                                                                                                                                 |
| **2. Aguardar validação da foto**                 |                                                                                                                                                                                                                                                                 |
| **3. Visualizar a nova foto**                     |                                                                                                                                                                                                                                                                 |

<font size="3"><p style="text-align: center">Fonte: [Matheus Viera](https://github.com/matix0).</p></font>

### cenario 7: Segunda via

Nessa tarefa, o usuário possui o objetivo fazer uma solicitação de segunda via do seu cartão do passe livre estudantil. A figura ** apresenta o diagrama HTA relativa a tarefa, já a tabela ** representa o mesmo HTA em tabela

<center>

<font size="3"><b>Figura \_\_</b> - Diagrama HTA de Segunda via.</font>

![Notação diagrama HTA](../../assets/hta_segunda_via.png)

<font size="3"><p style="text-align: center">Fonte: [Breno Fernandes](https://github.com/Brenofrds).</p></font>

<font size="3"><b>Tabela \_\_</b> - HTA de Segunda via.</font>

| **Objetivos / Operações**                         | **Problemas e Recomendações**                                                                                                                                                                                                                                   |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0. Solicitar Segunda Via 1 > 2**                | _plano_: seguir todas as etapas de forma sequencial, garantindo que o pagamento e a escolha do local de retirada sejam realizados diretamente na plataforma para maior conveniência.                                                                             |
| **1. Nova Solicitação 1 > 2**                     |                                                                                                                                                                                                                                                                 |
| **1.1 Selecionar o motivo da solicitação**        |                                                                                                                                                                                                                                                                 |
| **1.2 Efetuar o pagamento da taxa**               | _problema_: anteriormente, o pagamento era realizado presencialmente em uma agência bancária e o usuário precisava enviar manualmente um comprovante com informações como CPF e conta bancária. <br/> _recomendação_: o pagamento agora é feito diretamente na plataforma (boleto, PIX ou cartão de crédito), agilizando o processo e eliminando etapas manuais. Além disso, o sistema reconhece o pagamento automaticamente e bloqueia o cartão perdido de imediato.  |
| **1.3 Escolher o local de retirada do novo cartão** | _problema_: anteriormente, o local de retirada não era informado com antecedência, e o usuário não podia escolher onde buscar o cartão. <br/> _recomendação_: o sistema agora sugere automaticamente o local mais próximo da residência do usuário, mas permite que ele altere a escolha para maior conveniência.                                                                                     |
| **1.4 Finalizar a solicitação**                   |                                                                                                                                                                                                                                                                 |
| **2. Acompanhar o status da solicitação**         |                                                                                                                                                                                                                                                                 |
| **2.1 Buscar o cartão no local selecionado**      |                                                                                                                                                                                                                                                                 |


<font size="3"><p style="text-align: center">Fonte: [Breno Fernandes](https://github.com/Brenofrds).</p></font>

</center>

## Bibliografia

> Barbosa, S. D. J.; Silva, B. S. da; Silveira, M. S.; Gasparini, I.; Darin, T.; Barbosa, G. D. J. (2021) Interação Humano-Computador e Experiência do usuário. Autopublicação.

## Histórico de Revisão

|    Data    | Data Prevista de Revisão | Versão |     Descrição     |                   Autor                    |                  Revisor                   |
| :--------: | :----------------------: | :----: | :---------------: | :----------------------------------------: | :----------------------------------------: |
| 14/12/2024 |        16/12/2024        |  1.0   | Criação da Página |                 Fernandes                  | [Mateus Vieira](https://github.com/matix0) |
| 16/12/2024 |        17/12/2024        |  1.1   |   Adição HTA 4    | [Mateus Vieira](https://github.com/matix0) |                 Fernandes                  |
| 24/12/2024 |        30/12/2024        |  1.2   |   Adição HTA 2 e 7    | [Breno Fernandes](https://github.com/Brenofrds) |                 Matheus                  |
