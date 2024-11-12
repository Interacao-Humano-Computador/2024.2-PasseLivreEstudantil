# Planejamento com framework DECIDE

O Software escolhido (Passe livre BRB Mobilidade) é responsável por disponibilizar para seu público o acesso ao passaporte gratuito.
O grupo utilizou o framework DECIDE para gerar os próximos tópicos dessa documentação.

## DETERMINE
> Objetivos

1. ideia e alternativas de design: Identificar abordagens de design que melhor atendam às necessidades dos usuários, promovendo uma navegação intuitiva, acessibilidade e adaptabilidade do site em diferentes dispositivos.
2. Identificar problemas na interação e na interface: Esse problema pode afetar a experiência do usuário impedindo que ele não chegue no seu destino esperado ao selecionar tal função ou até mesmo não a identificando. 
3. Verificar conformidade com um padrão: Assegurar que o site esteja seguindo as conformidades com um padrão para que um usuário com certas limitações físicas não encontre barreiras intransponíveis para acessar a interface do sistema e interagir com ele. 

## EXPLORE
> Explorar perguntas respondidas

As perguntas a serem respondidas são para a análise das funcionalidades e do design do software, assim, essas são:

- O usuário consegue visualizar as informações que ele precisa e consegue utilizar as funcionalidades de forma que consiga cumprir seu objetivo?
- Os erros são previstos e tratados? Possuem interface amigável?
- O usuário consegue entender quais são as funcionalidades?
- O usuário acha o design agradável e não poluído?
- A performance do site é agradável? 


## CHOOSE
> Escolher os métodos de avaliação

O método escolhido foi o método da inspeção por não envolver participação de usuários, o avaliador se coloca no lugar do usuário enquanto examina e com destaque na Avaliação Heurística por ser um método rápido e simples. Esse método é útil quando recursos ou tempo para testes com usuários são limitados e fornece insights valiosos sobre o design. 

## IDENTIFY
> Identificar e adminstrar questões práticas


- Quem será o avaliador:
Os avaliadores serão os membros do grupo, onde cada membro se coloca no lugar do usuário, realizando a inspeção e análise do site com base nas heurísticas de Nielsen. Isso envolve navegar pelo site como se fosse um usuário comum, com o objetivo de identificar problemas de interação, usabilidade e conformidade com os padrões de acessibilidade.

- Definir tarefas a serem realizadas:
As tarefas que o avaliador deverá realizar, navegar pelo site, procurar informações específicas (como visualizar tela de frequência ou informações do status de cadastro) . Essas tarefas ajudarão a identificar falhas de usabilidade relacionadas à navegação e à funcionalidade.

- Critérios de sucesso e falha:
Definir o que constitui sucesso ou falha para as tarefas realizadas. Por exemplo, se o avaliador conseguir concluir uma tarefa sem dificuldades ou se houve erros repetidos na navegação ou falta de clareza na interface.

- Documentação do resultado:
O avaliador deve registrar todas as observações feitas durante a inspeção, incluindo problemas encontrados com base nas heurísticas de Nielsen, questões de acessibilidade e falhas na navegação. A documentação deve ser realizada por meio de capturas de tela, acompanhadas de uma descrição detalhada da tarefa que o avaliador estava tentando executar e a identificação do problema ocorrido.

- Documentação do resultado:
Como parte do foco em verificar a conformidade com padrões, o avaliador deve prestar atenção especial à acessibilidade, verificando aspectos como contraste, navegação por teclado, e outros critérios das WCAG (diretrizes de acessibilidade para web).


## DECIDE
> Decidir como lidas com questões éticas

Como o método de inspeção será utilizado sem a participação direta de usuários, as questões éticas são minimizadas, pois não haverá coleta ou alteração de dados pessoais ou sensíveis. Cada integrante do grupo acessará o site usando sua própria conta BRB Mobilidade para realizar a análise, uma vez que todos são alunos da UNB e possuem acesso ao site web do Passe Livre. A avaliação será focada exclusivamente na interface e na navegabilidade, garantindo a privacidade e integridade das informações da conta, e todas as sugestões de melhoria terão um caráter construtivo, visando unicamente a otimização da experiência do usuário.


## EVALUATE
> Avaliar, interpretar e apresentar resultados

Após realizar a inspeção, os dados coletados serão avaliados com foco nos critérios de usabilidade, acessibilidade e navegabilidade. A interpretação desses dados considerará os problemas encontrados, sua frequência e o impacto na experiência do usuário. Em seguida, os resultados serão apresentados em um relatório detalhado, destacando as principais observações, áreas de melhoria e sugestões de design. O relatório incluirá descrições claras dos problemas identificados, acompanhadas de recomendações práticas para aperfeiçoar a interface do site, garantindo que as melhorias propostas sejam embasadas em critérios objetivos e alinhadas aos objetivos da análise.

Execução da Avaliação do Site utilizando o Método de Inspeção e Avaliação Heurística de Nielsen

A avaliação do site foi realizada com base no método de inspeção e nas 10 heurísticas de usabilidade de Jakob Nielsen. Durante essa análise, foram identificados problemas nas seguintes heurísticas:

- Correspondência entre o Sistema e o Mundo Real: A interface deve utilizar uma linguagem familiar para o usuário, seguindo convenções do mundo real, a fim de facilitar a compreensão e navegação.
- Estética e Design Minimalista: O design deve apresentar apenas as informações relevantes, evitando sobrecarregar o usuário com elementos visuais ou dados desnecessários.
- Flexibilidade e Eficiência de Uso: A interface deve permitir um uso eficiente, especialmente para usuários avançados, oferecendo atalhos ou outras facilidades que tornem a navegação mais rápida e intuitiva.
- Visibilidade do Estado do Sistema: O sistema deve sempre manter o usuário informado sobre o que está acontecendo, fornecendo feedback claro e imediato em cada interação.

1. Verificação
Descrição da Questão: Correspondência entre o sistema e o mundo real.
Objetivo da Verificação: Avaliar se a interface usa uma linguagem familiar e compreensível para o usuário final, evitando jargões técnicos ou termos que possam causar confusão.
- Natureza do Problema
Classificação: Obstáculo
- Perspectiva do Usuário
Tipo de Problema: Problema Geral
- Perspectiva da Tarefa
Classificação do Problema: Problema Principal
- Perspectiva do Projeto
Status do Problema: Problema Novo
- Grau de Severidade
Classificação: simples
- Descrição do Problema
Contexto: Na tela de histórico de status, a interface usa termos técnicos como "PENDENTE_TROCA_INST_RETORNO" e "PENDENTE_TROCA_END_RETORNO", que podem ser difíceis de entender para o usuário final. Esses termos não estão alinhados com uma linguagem clara e familiar.
Causa: Uso de nomenclaturas técnicas ou abreviações que não são intuitivas para o usuário comum.
Efeito sobre o Usuário: Confusão e dificuldade em interpretar o status do processo, o que pode levar a erros de interpretação e frustração ao tentar entender a situação atual.
Efeito sobre a Tarefa: Aumenta o tempo necessário para o usuário compreender o status e pode resultar em uma experiência negativa devido à falta de clareza.
Correção Possível: Substituir os termos técnicos por descrições mais simples e diretas, como "Pendente de Troca de Instituição" e "Pendente de Troca de Endereço", ou fornecer uma explicação breve ao lado dos termos técnicos para facilitar a compreensão do usuário.


2. Verificação
Descrição da Questão: Estética e design minimalista
Objetivo da Verificação: Avaliar se a interface exibe apenas as informações relevantes de forma organizada e clara, evitando sobrecarregar o usuário com dados excessivos ou desnecessários.
- Natureza do Problema
Classificação: Obstáculo
- Perspectiva do Usuário
Tipo de Problema: Problema Geral
- Perspectiva da Tarefa
Classificação do Problema: Problema Secundário
- Perspectiva do Projeto
Status do Problema: Problema Novo
- Grau de Severidade
Classificação: 2 - Simples
- Descrição do Problema
Contexto: A tela exibe uma longa lista de dados de frequência, incluindo informações antigas desde fevereiro de 2020, o que torna a visualização confusa e poluída. Além disso, o botão "Mês de referência" serve para reordenar a lista, mas seu rótulo não indica claramente essa função.
Causa: Excesso de informações históricas e rótulo de botão pouco descritivo.
Efeito sobre o Usuário: Dificuldade em encontrar rapidamente as informações de frequência mais recentes e confusão sobre a funcionalidade do botão "Mês de referência".
Efeito sobre a Tarefa: Aumento do tempo necessário para o usuário localizar as informações atuais de frequência e entender a função de ordenação.
Correção Possível: Exibir apenas os dados dos últimos 12 meses por padrão e incluir uma opção para visualizar dados anteriores, se necessário. Renomear o botão "Mês de referência" para algo mais descritivo, como "Ordenar por Data", para que o usuário entenda sua função.

3. Verificação
Descrição da Questão: Flexibilidade e Eficiência de Uso
Objetivo da Verificação: Verificar se o usuário consegue se adaptar ao site de forma a tornar o acesso mais eficiente, especialmente em dispositivos móveis, mantendo uma experiência de uso satisfatória e consistente.
- Natureza do Problema
Classificação: Obstáculo
- Perspectiva do Usuário
Tipo de Problema: Problema Geral
- Perspectiva da Tarefa
Classificação do Problema: Problema Principal
- Perspectiva do Projeto
Status do Problema: Problema Novo
- Grau de Severidade
Classificação: 3 - Grave
- Descrição do Problema
Contexto: Em dispositivos móveis, a interface do site não se adapta adequadamente, comprometendo a responsividade. Isso dificulta a navegação e o acesso às informações, obrigando o usuário a realizar movimentos adicionais, como rolagem excessiva e zoom, para visualizar o conteúdo corretamente.
Causa: Falta de design responsivo adaptado para telas menores, o que impede a interface de ajustar elementos para diferentes tamanhos de dispositivos.
Efeito sobre o Usuário: Frustração e dificuldade ao tentar acessar e navegar pelo site em dispositivos móveis, o que pode resultar em desorientação e hesitação em continuar o uso.
Efeito sobre a Tarefa: Aumento do tempo necessário para completar tarefas e dificuldade em localizar informações, impactando negativamente a eficiência de uso e a experiência do usuário.
Correção Possível: Implementar um design responsivo que ajuste automaticamente o layout para dispositivos móveis, reorganizando elementos e garantindo que botões, texto e campos estejam adequadamente dimensionados e posicionados.

4. Verificação
Descrição da Questão: Visibilidade do Estado do Sistema
Objetivo da Verificação: Verificar se o site informa claramente ao usuário o que está acontecendo, especialmente em caso de erro, para que o usuário não fique perdido e sem saber o que fazer.
- Natureza do Problema
Classificação: Barreira
- Perspectiva do Usuário
Tipo de Problema: Problema Geral
- Perspectiva da Tarefa
Classificação do Problema: Problema Principal
- Perspectiva do Projeto
Status do Problema: Problema Novo
- Grau de Severidade
Classificação: 4 - Catastrófico
- Descrição do Problema
Contexto: Quando o site apresenta o erro "The requested URL was rejected. Please consult with your administrator", o usuário não recebe informações claras sobre o motivo do erro e não consegue sair da página, pois o botão "[Go Back]" não funciona. A única maneira de continuar a navegação é esperar ou tentar acessar por outro navegador. Isso deixa o usuário sem saber o que aconteceu ou o que ele pode fazer para resolver o problema.
Causa: Falta de feedback claro sobre o erro e a causa do problema. O sistema não informa ao usuário o motivo do erro ou oferece opções para resolver a situação.
Efeito sobre o Usuário: Desorientação e frustração. O usuário fica perdido, sem saber como resolver o problema ou por que está ocorrendo, o que pode afetar negativamente a confiança no sistema.
Efeito sobre a Tarefa: Perda de tempo e a interrupção da tarefa do usuário. O usuário não consegue continuar suas atividades no site, resultando em uma experiência frustrante e ineficaz.
Correção Possível: Fornecer uma mensagem de erro mais detalhada, explicando a causa do problema e sugerindo soluções possíveis, como tentar novamente mais tarde ou entrar em contato com o suporte. Além disso, garantir que o botão "Go Back" funcione corretamente ou oferecer uma opção alternativa para o usuário navegar de volta.


