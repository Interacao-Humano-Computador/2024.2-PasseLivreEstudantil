## Introdução
O guia de estilo "trata-se de um registro das principais decisões de design tomadas, de forma que elas não se percam, isto é, sejam efetivamente incorporadas no produto final". Esse documento serve como uma ferramenta comunicativa para os stakeholders da equipe, garantindo que as decisões de design possam ser consultadas com facilidade e discutidas para futuras atualizações ou projeções.

No contexto do passe livre estudantil, a criação de interfaces eficientes é crucial para atender às necessidades e expectativas dos estudantes, proporcionando uma experiência de usuário que seja não apenas funcional, mas também inclusiva. Para alcançar esses objetivos, é fundamental que o guia de estilo seja construído de maneira a garantir consistência visual e de interação em todo o sistema. Durante o desenvolvimento do artefato, foram adotados as Metas de Usabilidade e os Princípios Gerais, documentos que discutem como o site do sistema de passe livre estudantil pode ser aprimorado, oferecendo uma interface mais intuitiva e acessível para os usuários.

## Objetivo do Guia de Estilo

O objetivo deste guia de estilo é fornecer diretrizes e melhores práticas para o design e desenvolvimento de interfaces de usuário eficazes e usáveis no sistema de passe livre estudantil. Este documento visa analisar e orientar a implementação dos seguintes elementos:

- Elementos de interface: disposição espacial e grid, janelas, tipografia, cores, símbolos, widgets, logo e design de telas, com foco na criação de uma interface visualmente coerente e acessível para os estudantes.
- Elementos de interação: definição dos estilos de interação mais adequados, escolha de um estilo interativo eficiente, e implementação de aceleradores (como teclas de atalho) que agilizem o uso do sistema.
- Elementos de ação: diretrizes para o preenchimento de campos, seleção de opções e ativação de comandos, garantindo uma navegação intuitiva e sem obstáculos para o usuário final.
Este guia visa assegurar que o sistema de passe livre estudantil ofereça uma experiência eficiente e satisfatória, atendendo às necessidades dos usuários enquanto promove a consistência e a acessibilidade em todas as interações.

## Organização e Conteúdo do Guia de Estilo
O guia de estilo do Passe Livre Estudantil será feito a partir dos elementos analisados que foram citados no parágrafo anterior.

## Público-alvo do Guia de Estilo

Este guia de estilo foi elaborado para atender às necessidades dos estudantes que utilizam o sistema de passe livre estudantil, bem como da equipe de design e desenvolvedores responsáveis pela criação e manutenção da plataforma. O objetivo é fornecer uma base de diretrizes e melhores práticas que possam orientar as decisões de design, garantindo uma interface eficiente, intuitiva e acessível. A partir deste guia, os envolvidos no desenvolvimento poderão tomar decisões informadas, alinhadas com as Metas de Usabilidade e os Princípios Gerais, promovendo uma experiência de usuário otimizada para os estudantes.

## Como utilizar o Guia

Este guia de estilo pode ser utilizado como uma referência ao longo de todo o ciclo de vida do projeto do sistema de passe livre estudantil, incluindo tanto a fase de desenvolvimento quanto a fase de manutenção. As diretrizes e melhores práticas apresentadas neste guia são essenciais para orientar a equipe de design e desenvolvimento na tomada de decisões, garantindo que a interface de usuário seja eficaz, intuitiva e acessível. O objetivo é assegurar que a plataforma atenda às necessidades dos estudantes, promovendo uma interação eficiente e satisfatória com o sistema, tanto para novos usuários quanto para os que já utilizam o serviço.

## Como manter o Guia

É fundamental atualizar o guia de estilo sempre que a equipe (composta por alunos e/ou designers e desenvolvedores responsáveis pelo sistema do passe livre estudantil) tomar decisões que impactem o design ou a funcionalidade da plataforma. Isso garante que todas as alterações sejam consistentes com as diretrizes e padrões estabelecidos no guia. A manutenção contínua do guia assegura que o sistema permaneça visual e interativamente coerente, proporcionando a melhor experiência possível para os estudantes e evitando problemas de usabilidade e acessibilidade à medida que o sistema evolui.



## Resultados da Análise

## Descrição do Ambiente de Trabalho do Usuário

A plataforma Passe Livre Estudantil é predominantemente acessada por estudantes através de dispositivos como desktops, notebooks e smartphones. Considerando a diversidade de dispositivos usados pelos usuários, é crucial projetar e desenvolver uma interface que seja responsiva e adaptável a diferentes tamanhos de tela. A experiência de usuário deve ser satisfatória e eficaz, independentemente do dispositivo utilizado.

Estudantes do ensino fundamental e médio (Perfil A) geralmente têm uma familiaridade tecnológica mais baixa e, em muitos casos, necessitam de assistência de pais ou responsáveis para completar o processo de cadastro e envio de documentos. Já os estudantes de ensino superior e técnico (Perfil B) são mais independentes e frequentemente acessam a plataforma de forma autônoma, seja por computador ou dispositivos móveis.

Portanto, ao projetar a interface, deve-se garantir que a navegação seja intuitiva e acessível para todos os perfis, levando em consideração suas habilidades tecnológicas e os dispositivos utilizados. A interface precisa ser clara, com elementos visuais adequados, e as funcionalidades devem ser de fácil acesso, facilitando tanto o processo de cadastro e atualização de informações quanto as solicitações de segunda via do cartão ou extensão de acessos.

Os elementos de interface, adaptados para esses diferentes perfis e dispositivos, estão ilustrados na figura 1.

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/design/rOdrKdBYO8gsXn4jcAmPP6/IHC-GRUPO-07?node-id=0-1&embed-host=share" allowfullscreen></iframe>
Fonte: Breno Lucena, 2024.


## Elementos de Interção

## Estilo de Interação
Os usuários podem interagir com o site na barra de serviços: Troca de instituição, Segunda via, Extensão de Acesso, Troca de Endereço, Alteração de Contato, Retirada de Cartão, Minha Frequência, Meus Acessos, Liberar Cartão e Troca de Nome Social. Essa interação é realizada através de botões localizados em uma barra superior.

## Selção de Estilos
A interface do Passe Livre Estudantil é simples e focada em atender aos objetivos relacionados ao uso do benefício. Suas páginas seguem padrões comuns, garantindo uma experiência uniforme e intuitiva para os usuários.

## Aceleradores (Teclas de Atalho)
No site não foi encontrado teclas de atalho.

## Elementos de Ação

## Preenchimento de Campos

A interface do sistema disponibiliza campos de preenchimento que exigem que o usuário insira informações manualmente, conforme suas necessidades e objetivos. Esses campos incluem opções como botões dropdown e caixas de texto presentes nos serviços, que demandam a entrada de dados diretamente pelo usuário.

## Seleção
Considerando os elementos de seleção localizados na barra superior, como na tela de Troca de Instituição, incluem-se opções como a escolha da modalidade de ensino, a seleção da instituição e outros campos relacionados ao gerenciamento do benefício. Esses elementos facilitam a escolha de opções específicas de maneira prática e organizada.
E em em todo o site apresenta botões de seleções nos mesmos padrões.

## Ativação 
Incluem botões, ícones e outros elementos clicáveis. No sistema, encontramos elementos como botões para solicitação de serviços, links para visualização de informações e opções de gerenciamento do benefício.

## Vocabulários e padrões

## Terminologia
O site utiliza termos relacionados aos serviços de forma clara e com vocabulário acessível para os usuários. No entanto, na tela de login, o termo está em inglês ("Login"), assim como na tela inicial, onde aparece "Logout". Fora essas exceções, as terminologias em todo o restante do site são simples e compreensíveis.

## Tipos de Tela

As telas adotam um padrão simples e minimalista, mantendo uma identidade visual consistente, sem grandes variações entre elas.

## Sequência de Diálogos

As sequências seguem um padrão, com botões como "Salvar", "Registrar Solicitação", "Anexar Arquivo" e outros são semelhantes em páginas diferentes

## Proposta de Intervenção

As propostas de intervenção foram desenvolvidas com base nas Metas de Usabilidade e nos Princípios Gerais definidos para o projeto do Passe livre Estudantil. Essas diretrizes foram utilizadas como referência para identificar áreas de melhoria e sugerir mudanças que visam aprimorar a usabilidade e a experiência do usuário.

## Metas de Usabilidade

Com base nas metas de usabilidade priorizadas (facilidade de aprendizado, eficiência, segurança no uso e satisfação do usuário), foram identificados pontos que podem ser aprimorados para melhorar a experiência do usuário no site do Passe Livre Estudantil. Em relação à facilidade de aprendizado, a interface é clara e objetiva, mas a inclusão de instruções mais detalhadas, especialmente na seção de troca de instituição, poderia facilitar o processo de aprendizado para novos usuários.

No que se refere à eficiência, o site permite a realização das tarefas de maneira prática e rápida. Contudo, a adição de uma funcionalidade de salvar login poderia melhorar a acessibilidade em futuras visitas. Quanto à segurança no uso, o sistema já oferece recursos eficazes para redefinir senha e e-mail, mas seria interessante implementar uma confirmação adicional para ações críticas, como a alteração de dados pessoais, que já conta com uma mensagem de confirmação em algumas telas, mas não em outras, como na atualização de contatos. Por fim, no aspecto de satisfação do usuário, embora o sistema funcione bem, algumas funcionalidades, como a troca de foto, carecem de validação mais clara, o que pode gerar frustração. Melhorias no feedback e na validação dessas ações seriam importantes para aumentar a satisfação geral dos usuários.


## Princípios Gerais 

Passe Livre Estudantil, promovendo uma boa experiência. A simplicidade nas estruturas das tarefas foi abordada, mas ainda existem pontos a melhorar. Por exemplo, na tela de troca de instituição, falta clareza sobre os documentos necessários, o que pode ser aprimorado com instruções mais específicas para facilitar a interação do usuário. Além disso, no que diz respeito ao equilíbrio entre controle e liberdade do usuário, o site apresenta falhas, como a falta de explicação em erros de navegação e a ausência de controle adequado ao alterar a foto, onde o usuário não tem feedback suficiente sobre o processo.

Outros princípios importantes incluem eficiência do usuário, visibilidade e reconhecimento, e conteúdo relevante e expressão adequada. O sistema deveria salvar os dados automaticamente, evitando a perda de progresso ao trocar de página, como na tela de troca de instituição. O feedback ao enviar uma foto, por exemplo, é temporário, o que gera incerteza. Torná-lo mais visível poderia melhorar a experiência. Além disso, o uso de terminologias como "login" e "FAQ" pode ser substituído por expressões mais acessíveis, e o status técnico como "EM_ANALISE" deve ser mais claro. Essas mudanças visam melhorar a usabilidade e acessibilidade do sistema, tornando-o mais eficiente e agradável para os usuários.



## Proposta no figma


## Bibliografia

 - **BARBOSA, S. D. J.; SILVA, B. S.**  
  *Interação Humano-Computador.* Rio de Janeiro: Elsevier, 2011. Capítulo 10.  
  Disponível em: [https://aprender3.unb.br/pluginfile.php/2972723/mod_resource/content/4/ihc-ux%20Cap.%2010.pdf](https://aprender3.unb.br/pluginfile.php/2972723/mod_resource/content/4/ihc-ux%20Cap.%2010.pdf)  

## Histórico de Versões

|Data|Data Prevista de Revisão|Versão|Descrição|Autor|Revisor|
| :----------: |:-----------:| :------: | :-----------: | :---------: |:---------: |
|01/12/2024| 03/12/2024 |1.0|Criação da pagina Guia de estilo|Breno Lucena| Breno Soares |

