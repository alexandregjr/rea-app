import React from 'react'

const contentData =
[
    {
        title: 'MIPS',
        subtopics: 
        [
            {
                title: 'Arquitetura',
                content:
                [
                    <p>A arquitetura MIPS, Microprocessor without interlocked pipeline stages, é uma arquitetura de 32-bits, desenvolvida pela MIPS Computer System (fundada pelo Hennessy em 1984)</p>
                ]
            },
            {
                title: 'Assembly',
                content:
                [  
                    <p>A estrutura de um programa assembly possui o segmento de dados, onde são declaradas as variáveis, e o segmento de texto onde há o código fonte.</p>,
                    <p>São usados rótulos para identificar uma linha de código, e esse rótulo pode ser utilizado posteriormente, em desvos e chamadas de procedimento para voltar à essa linha.</p>,
                    <p>Além disso, o assembly MIPS conta com diretivas do montado para determinar configurações ao código, como alinhamento (.aling), se uma dada variável é string (.ascii) entre outros.</p>,
                    <p>O montador chama o sistema para realizar operações de escrita na tela e leitura do teclado, além de indicar término do pragrama, através do comando syscall</p>
                ]
            },
            {
                title: 'Memória',
                content:
                [
                    <p>A memória do MIPS é divida em três partes: o segmmento de texto, que armazena as instruções do programa, o segmento de dados, que reserva espaço para "variáveis"(dados que podem ser estáticos ou dinâmicos), e o segmento de pilha, que é uma pilha onde pode-se empilhar dados durante o programa para uso posterior</p>
                ]
            },
            {
                title: 'Procedimentos',
                content:
                [
                    <p>Procedimentos são um conjunto de instruções com uma determinada tarefa dentro do programa.</p>,
                    <p>Existem duas instruções de jump para  chamada de procedimentos: jal &lt;label&gt; , que pula para o label e guarda o endereço de retorno no $ra, e jr $ra, que da jump para o endereço de $ra.</p>,
                    <p>Para manipular os procedimentos fazemos uso dos seguintes registradores:</p>,
                    <ul>
                        <li>$a0 até $a3: são os registradores de argumentos utilizados para a passagem de parâmetros</li>
                        <li>$v0 e $v1: são os registradores de valor utilizados para o retorno do procedimento</li>
                        <li>$ra: é o registrador de endereço do retorno do procedimento, utilizado na volta ao ponto de origem da chamada do procedimento.</li>
                    </ul>
                ]
            },
            {
                title: 'ISA',
                content:
                [
                    <p>ISA, Instruction Set Architecture, é o conjunto de instruções (código de máquina) representados através de minemônicos. O MIPS possui instruções aritméticas, lógicas, de uso da memória, de controle de fluxo e comparações, separadas em 3 tipos: Tipo R (register), que evolve registrador-registrador, Tipo I(immediate), que envolve um valor imadiato, e Tipo J(jump), de desvio</p>
                ]
            }
        ],
        exercise: 
        [
            {
                question: 'Questao 1: Para que servem rótulos?',
                options: 
                [
                    'A) Auxiliar em operações aritméticas', 
                    'B) Ser referencias para desvios', 
                    'C) Ser diretiva do montador', 
                    'D) Referenciar variáveis'
                ],
                answer: 'B',
                explanation: 'O rótulo é referencia uma linha de código, sendo é usado para fazer o código voltar à essa linha. Portanto, é utilizado para desvios.'  
            },
            {
                question: 'Questao 2: O que diretivas do montador fazem?',
                options: 
                [
                    'A) Definem configurações do código', 
                    'B) Identificam uma linha no código para referência', 
                    'C) Faz chamada ao sistema', 
                    'D) Efetua um procedimento'
                ],
                answer: 'A',
                explanation: 'As diretivas não são instruções, elas são destinadas ao assembler(montador) que as utiliza para saber de que maneira ele deve montar o arquivo executável.'
            },
            {
                question: 'Questao 3: Qual o tipo da instrução jr?',
                options: 
                [
                    'A) Jump', 
                    'B) Immediate',
                    'C) Register', 
                    'D) Híbrido Register e Jump'
                ],
                answer: 'C',
                explanation:'A instrução jr é do tipo R, já que a instrução precisa de registradore e nao envolve valor imediato. Não existem instruções híbridas'  
            },
            {
                question: 'Questao 4: Quais componentes fazem parte da divisão de memória do MIPS',
                options: 
                [
                    'A) texto e dados', 
                    'B) dados e pilha', 
                    'C) pilha e texto', 
                    'D) texto, dados e pilha'
                ],
                answer: 'D', 
                explanation: 'A divisão de memória do MIPS possui o segmento de texto, de dados e de pilha.'
            },
            {
                question: 'Questao 5: Quais registradores são usados para argumento e retorno em um procedimento por convenção?',
                options: 
                [
                    'A) ra e sp', 
                    'B) s\'s e t\'s', 
                    'C) a\'s e v\'s', 
                    'D) t\'s e v\'s'
                ],
                answer: 'C',
                explanation: 'Por convenção, os registradores a (a0,a1,a2,a3) são usados como parâmetros de procedimentos e os registradore v (v0,v1) para retorno.'  
            }
        ]
    },
    {
        title: 'Arquitetura MIPS',
        subtopics:
        [
            {
                title: 'Componentes',
                content:
                [
                    <p>O processador MIPS é composto por uma série de elementos, dentre eles: banco de registradores, unidade de controle, ULA, memória, E/S, multiplexadores. Esses componentes são interconectados através de linhas de dados (definidas pelo caminho de dados) e linhas de controle (definidas pela unidade de controle de acordo com a instrução).</p>
                ]
            },
            {
                title: 'Implementações',
                content: 
                [
                    <p>Existem três formas principais de implementar a arquitetura MIPS;</p>,
                    <ul>
                        <li>Monociclo: cada instrução é executada em um único ciclo de clock. Portanto, o clock deve ter tempo suficiente para a instrução mais lenta ser executada</li>
                        <li>Multiciclo: O ciclo de busca/execução é dividio em vários passados, e cada passado é executado em um clock.</li>
                        <li>Pipeline: executa cada instrução em vários passos, cada passo em um clock, e processa multiplas instruções em paralelo.Sua taxa é limitada ao estágio mais lento</li>
                    </ul>
                ]
            },
            {
                title: 'Etapas de execução de instruções',
                content:
                [
                    <ul>
                        <li>Busca da instrução na memória.(IF)</li>
                        <li>Leitura dos registradores enquanto a instrução é decodificada.(ID)</li>
                        <li>Execução de uma operação/cálculo de um endereço.(EX)</li>
                        <li>Acesso à memória.(MEM)</li>
                        <li>Escrita do resultado em um registrador.(WB)</li>
                    </ul>
                ]

            },
            {
                title:'Monociclo',
                content:
                [
                    <p>Caminho de Dados Monociclo</p>,
                    <img alt='diagrama complexo ilustrando um caminho de dados de um processador monociclo' src='http://gec.di.uminho.pt/discip/TextoAC/Fig-12.12.gif'></img>
                ] 
            },
            {
                title:'Pipeline',
                content:
                [
                    <p>Nos tópicos abaixo são explicados o funcionamento e as peculiariadades da arquitetura pipeline, que exige atenção dedicada.</p>
                ]
                
            },
            {
                title: 'Caminho de Dados Pipeline',
                content: 
                [
                    <img alt='diagrama complexo ilustrando um caminho de dados de um processador com arquitetura pipeline' src='https://d2vlcm61l7u1fs.cloudfront.net/media%2Fb89%2Fb897b884-8969-46ae-be24-05d3dc5031d7%2FphpQftSqg.png'></img>,
                ]
            },
            {
                title:'Execução do Pipeline',
                content: 
                [
                    <img alt='diagrama mostrando a execução de um pipeline. Nele, cada instrução é dividida em múltiplas etapas, as quais são executadas em paralelo. Ao iniciar uma instrução, a primeira etapa dela é empilhada; no próximo ciclo inicia a próxima etapa desta instrução e a primeira etapa de uma nova instrução, as quais executam em paralelo.' src='https://upload.wikimedia.org/wikipedia/commons/4/46/Superscalarpipeline.svg'></img>
                ]
            },
            {
                title:'Dependências ou Conflitos',
                content: 
                [
                    <p>Existem situações de execução no pipeline em que a instrução seguinte não pode ser executada no próximo ciclo de relógio. Tais situações são chamadas de conflitos.</p>
                ]
            },
            {
                title:'Conflitos Estruturais',
                content:
                [
                <p>Acontecem quando o Hardware não pode suportar a combinação de instruções que o pipeline deseja executar em um dado ciclo de relógio.</p>,
                <ul>
                    <li>Acessos concorrentes à memória</li>
                    <li>Acesso simultaneos ao banco de registradores</li>
                    <li>Uso simultaneo de uma mesma componente</li>
                </ul>
                ]
            },
            {
                title:'Dependência de Dados',
                content:
                [
                <p>Ocorre quando a execução da instrução seguinte depende de operando calculado pela instrução anterior.</p>,
                <p>Tipos de Dependência de Dados:</p>,
                <ul>
                    <li>Dependências verdadeiras: RAW (Read After Write). Ocorre quando uma instrução realmente utiliza um operando que é produzido por uma instrução anterior</li>
                    <li>Dependências falsas:</li>
                        <ul>
                            <li>Antidependência: WAR (Write After Read). Ocorre quando um operando é lido antes de ser alterado por outra instrução</li>
                            <li>Dependência de Saída: WAW (Write After Write). Ocorre quando há uma escrita após um escrita em um operando</li>
                        </ul>
                </ul>,
                <p>As dependências falsas não afetam o pipeline, mas a verdadeira sim, e para resolvê-lo pode-se parar o pipeline durante um certo número de ciclos(inserindo nop), reeordenar o código ou adiantar os dados(pegando o dado nos registradores internos do pipeline),com técnica chamada fowarding, quando a instrução que contém o dado desejado está após o EX e a instrução que deseja o dado está após o ID. </p>
                ]
            },
            {
                title: 'Dependência de Controle',
                content:
                [
                    <p>Ocorre quando há instruções que alteram a ordem de execução do programa (desvios).</p>,
                    <p>Se o desvio for condicional,não se sabe se ele ocorrerá até o momento de sua execução.</p>,
                    <p>Para solucionar o problema, há 4 opções:</p>,
                    <ul>
                        <li>pode-se congelar o pipeline até que se saiba o resultado do desvio.</li>
                        <li>considerar o desvio não será tomado e esvaziar o pipeline se o desvio de fato acontecer</li>
                        <li>Utilizar Delayed Branch, que consiste em executar a instrução seguinte ao desvio, que fica armazenada no delay slot. Caso o desvio não ocorra, anula-se o delay slot</li>
                        <li>Tentar prever o desvio</li>
                    </ul>
                ]
            }
        ],
        exercise:
        [
            {
                question:'Questão 1: Qual forma de implementação da arquitetura MIPS executa a instrução inteira em um ciclo de clock:',
                options:
                [
                    'A) Multiciclo', 
                    'B)Pipeline', 
                    'C) Fowarding', 
                    'D) Monociclo'
                ],
                answer:'D',
                explanation:'Na implementação de monociclo cada instrução é executada em um único ciclo de clock. Portanto, o clock deve ter tempo suficiente para a instrução mais lenta ser executada'
            },
            {
                question:'Questão 2: Em qual etapa de execução de uma instrução ocorre cálculo de endereços?',
                options:
                [
                    'A) IF', 
                    'B) MEM', 
                    'C) EX', 
                    'D) WB'
                ],
                answer:'C',
                explanation:'Durante a etapa de execução ocorre as operação aritméticas, e o cálculo de um endereço envolve o uso da ULA'
            },
            {
                question:'Questão 3: Qual das opções não é um conflito estrutural?',
                options:
                [
                    'A)Acessos concorrentes à memória',
                    'B)Um operando é lido antes de ser alterado por outra instrução',
                    'C)Uso simultaneo de uma mesma componente',
                    'D)Acesso simultaneos ao banco de registradores'
                ],
                answer:'B',
                explanation:'A alternativa B representa uma dependência de dados, não estrutural'
            },
            {
                question:'Questão 4: Qual dependência não afeta o pipeline?',
                options:
                [
                    'A) WAW', 
                    'B)RAW', 
                    'C)Dependência de Controle', 
                    'D) Dependência Estrutural'
                ],
                answer:'A',
                explanation:'WAW, Write After Write, não afeta o pipeline pois a reescrita não depende do conteúdo anterior do operando.'
            },
            {
                question:'Questão 5: Qual das opções não resolve uma dependência de controle?',
                options:
                [
                    'A)Prever o Desvio', 
                    'B)Congelar o pipeline', 
                    'C)Utilizar Fowarding', 
                    'D)Utilizar Delayed Branch'
                ],
                answer:'C',
                explanation:'O Fowarding resolve dependência de dados, visto que adianta dados, e esse não é o problema da dependência de controle'
            }
        ]
    },
    {
        title: "Memória",
        subtopics:
        [
            {
                title: "Piramide de Hierarquia",
                content:
                [
                    <p>Memória é o nome dado a qualquer componente capaz de armazenar bits de informação, existem diversos modos de realizar tal tarefa, e portanto cada memória tem aspectos diferente umas das outras.</p>,
                    <p>Existem certas caracteristicas que são ipmoprtantes para uma memoria como: Capacidade ("tamanho" da memoria, quantos bits ela é capaz de armazenar) 
                        Velocidade (quão rapido é possivel acessar as informações na memória) e Custo (quão custoso em material e em recursos financeiros a confecção e implementação desse componente é)</p>,
                    <p>Tendo isso em mente, a memoria ideal teria as seguintes caracteristicas:</p>,
                    <ul>
                        <li>Capacidade: <b>Infinita</b></li>
                        <li>Velocidade: <b>Rápida</b></li>
                        <li>Custo: <b>Baixo</b></li>
                    </ul>,
                    <p>Essas qualidades são, porem, além de impraticaveis, conflitantes, ou seja, uma memoria veloz é, normalmente, pequena e custosa. Para resolver esse problema,
                        usa-se a ideia de hierarquia de memoria, a imagem abaixo representa a pirâmide de hierarquia:</p>,
                    <img alt="imagem demonstrando a hierarquia. Conforme desce do topo da pirâmide a velocidade e o custo diminuem, enquanto a capacidade e o tamanho físico aumentam. No topo se encontram os registradores, seguidos da CPU Cache, RAM e, por fim, pelos dispositivos de Armazenamento em Massa." src='http://static.wixstatic.com/media/e720c6_25b41bfb2fbf403bbdff6dbf5bf19737~mv2.png/v1/fill/w_626,h_411/e720c6_25b41bfb2fbf403bbdff6dbf5bf19737~mv2.png' />,
                    <p>A ideia portanto é combinar memorias com diferentes propriedades a fim de se aproximar ao maximo da memória "ideal"</p>
                ]
            },
            {
                title: "Tipos de memórias",
                content: 
                [    
                    <p>Existem dois principais grupos de memorias: "Voláteis" e "Não Voláteis":</p>,
                    <ul>
                        <li> Não Volateis:
                            <p>ROM -> PROM -> EPROM -> EEPROM (ou E²PROM) -> Flash</p>
                            <ul>
                                <li>ROM: read only memory</li>
                                <li>PROM: programmable read only memory (apenas uma vez)</li>
                                <li>EPROM: erasable programmable read only memory (apaga com raios ultravioletas)</li>
                                <li>EEPROM: eletrical erasable programmable read only memmory (apaga com eletricidade)</li>
                                <li>Flash: memórias atuais, utilizam um transistor especial que guarda informações</li>
                            </ul>
                        </li>
                        <li> Volateis:
                            <p>RAM</p>
                            <ul>
                                <li>Estática: construída com flip-flops (SRAM)</li>
                                <li>Dinâmica: construída com capacitores (DRAM) (Precisa de um circuito de regeneração)</li>
                            </ul>
                        </li>
                    </ul>
                ]
            },
            {
                title: "Memória Cache",
                content:
                [
                    <p>A memoria cache é um tipo de memória ultra rápida que armazena os dados e instruções mais utilizadas pelo processador, permitindo que estas sejam acessadas rapidamente.</p>,
                    <p>A cache se localiza proxima ao processador e usa de dois principios muito importantes para selecionar instruções que podem ser utilizadas por ele:</p>,
                    <ul>
                        <li>Localidade Temporal: se um dado na memória foi utilizado em um instante, ele pode ser usado novamente.</li>
                        <li>Localidade Espacial: se um dado na memória foi utilizado existe a probabilidade das posições que estão estão perto serem usados também.</li>
                    </ul>,
                    <p>Sem essas propriedades, seria impossivel a implementação de uma cache. Varias chaches podem ser acossiadas umas as outras, combinando seus aspectos de forma a maximizar a quantidade de acertos
                    gerando níveis diferentes de cache, vale lembrar que, o conteúdo presente em uma cache está tambem presente na cache de nivel inferior.</p>
                ]
            },
            {
                title: "Características das caches",
                content: 
                [
                    <p>Existem alguns conceitos que são bastante importantes quando o assunto é cache, eles são:</p>,
                    <ul>
                        <li>Bloco: menor unidade armazenada na cache.</li>
                        <li>Acerto (hit): quando a informação está presente no nível da cache.</li>
                        <li>Falha (miss): quando a informação não está presente no nível da cache.</li>
                        <li>Taxa de acerto: fração dos acessos encontrados no nível da cache.</li>
                        <li>Taxa de falha: (1 - taxa de acerto).</li>
                        <li>Tempo de acerto: tempo para acessar um nível da hierarquia, incluindo o tempo para determinar se é acerto ou falha.</li>
                        <li>Penalidade por falta: tempo para buscar um bloco de um nível inferior para um nível superior, incluindo o tempo para acessar o bloco, transmitir de um nível para outro e inserí-lo no nível que ocorreu a falha.</li>
                    </ul>,
                    <p>Cada cache tem certas caracteristicas importantes como:</p>,
                    <ul>
                        <li>Tamanho da cache.</li>
                        <li>Tamanho do bloco ou linha (para Stallings são linhas, para o Patterson, blocos).</li>
                        <li>Função de mapeamento.</li>
                        <li>Politicas (de escrita e de substituição).</li>
                        <li>Função de mapeamento.</li>                                 
                    </ul>
                ]
            },
            {
                title: "Tamanho das caches",
                content: 
                [
                    <ul>
                        <li>Compromisso entre quantidade de dados armazenados, custo e desempenho.</li>
                        <li>Depende da localização de cache.</li>
                        <li>Quanto menor, mais rápida.</li>
                    </ul>
                ]
            },
            {
                title: "Tamanho dos blocos",
                content: 
                [
                    <ul>
                        <li>Sempre potência de dois</li>
                        <li>Número de palavras consecutivas</li>
                    </ul>
                ]
            },
            {
                title: "Funcões de Mapeamento",
                content: 
                [
                    <p>Maneira de dizer em qual posição na cache os dados trazidos do nível inferior serão armazenados.</p>,
                    <p>Três tipos:</p>,
                    <ul>
                        <li>Direto</li>
                        <li>Associativo</li>
                        <li>Associativo por conjunto</li>
                    </ul>,
                    <p><b>Mapeamento Direto:</b></p>,
                    <p>No mapeamento direto, cada bloco da memória principal é mapeado para um bloco do cache.</p>,
                    <pre>
                        31 ___________ _______________ ______ _____ 0<br/>
                        |             |               |      |      |<br/>
                        |     tag     |     index     | W.O. | B.O. |<br/>
                        |_____________|_______________|______|______|<br/>
                        <br/>
                        BO => deslocamento da instrução dentro da palavra, tem a quantidade de bits necessária para endereçar cada byte da palavra (endereçamento a byte).<br/>
                        WO => deslocamento da palavra buscada dentro do do bloco, tem a quantidade de bits necessária para endereçar cada palavra dentro do bloco.<br/>
                        INDEX => bloco da cache onde se encontra a informação desse endereço de memória, tem a quantidade de bits necessária para endereçar o numero de blocos.<br/>
                        TAG => tirar a ambiguidade, tem o numero de bits que sobrar do endereço completo apos atribuir o necessário para os outros campos. <br/>
                    </pre>,
                    <p><b>Mapeamento Associativo Total:</b></p>,
                    <p>No mapeamento direto, cada bloco da memória principal é mapeado para um bloco do cache.</p>,
                    <pre>
                        31 ___________________________ ______ _____ 0<br/>
                        |                             |      |      |<br/>
                        |             tag             | W.O. | B.O. |<br/>
                        |_____________________________|______|______|<br/>
                        <br/>
                        BO => deslocamento da instrução dentro da palavra, tem a quantidade de bits necessária para endereçar cada byte da palavra (endereçamento a byte).<br/>
                        WO => deslocamento da palavra buscada dentro do do bloco, tem a quantidade de bits necessária para endereçar cada palavra dentro do bloco.<br/>
                        TAG => tirar a ambiguidade, tem o numero de bits que sobrar do endereço completo apos atribuir o necessário para os outros campos.<br/>
                    </pre>,
                    <p><b>Mapeamento Associativo por Conjuntos:</b></p>,
                    <p>No mapeamento direto, cada bloco da memória principal é mapeado para um bloco do cache.</p>,
                    <pre>
                        31 ___________________________ ______ _____ 0<br/>
                        |                   |         |      |      |<br/>
                        |        tag        |   set   | W.O. | B.O. |<br/>
                        |___________________|_________|______|______|<br/>
                        <br/>
                        BO => deslocamento da instrução dentro da palavra, tem a quantidade de bits necessária para endereçar cada byte da palavra (endereçamento a byte).<br/>
                        WO => deslocamento da palavra buscada dentro do do bloco, tem a quantidade de bits necessária para endereçar cada palavra dentro do bloco.<br/>
                        SET => conjunto onde se encontra a informação desse endereço de memória, tem a quantidade de bits necessária para endereçar o numero de conjuntos.<br/>
                        TAG => tirar a ambiguidade, tem o numero de bits que sobrar do endereço completo apos atribuir o necessário para os outros campos.<br/>
                    </pre>,
                    <p>Um mapeamento associativo por conjunto eh chamado "k-way" quando k é a quantidade de blocos que formam cada conjunto, k neste caso é o nível de associatividade da cache.</p>
                ]
            },
            {
                title: "Politicas",
                content: 
                [
                    <p>Existem duas politicas de vital importancia para o funcionamento da cache:</p>,
                    <ul>
                        <li>Politica de substituição</li>
                        <li>Politica de escrita</li>
                    </ul>,
                    <p><b>Politica de substituição:</b></p>,
                    <p>É a politica que define qual elemento deve ser removido da cache para que outo seja colocado em seu lugar. Na teoria, essa politica tenta buscar o bloco que não será mais utilizado.</p>,
                    <p>Exemplos de Politicas de substituição:</p>,
                    <ul>
                        <li>FIFO: substitui a linha que foi trazida primeiro.</li>
                        <li>LRU (Least Recently Used): substitui a linha que não foi usada a mais tempo, a linha menos recentemente usada.</li>
                        <li>LFU (Least Frequently Used): considera a frequência de acesso retirando aquela que é menos frequentemente acessada.</li>
                    </ul>,
                    <p><b>Politica de escrita:</b></p>,
                    <p>A politica de escrita define o comportamento que a cache terá quando alguma informação for alterada. Cada cache tem duas politicas de escrita: uma a ser 
                    usada quando o elemento está contido na cache (Write-hit), e outro a ser usado quando não está (Write-miss).</p>,
                    <p>Exemplos de Write-Hit:</p>,
                    <ul>
                        <li>Write-through: escreve na cache e nos níveis inferiores, ate alcançar a memoria RAM.</li>
                        <li>Write-back: escreve só no nível da cache e atualiza o bit de modificação (bit M), escrevendo no nivel inferior quando o bloco for removido.</li>
                    </ul>,
                    <p>Exemplos de Write-Miss:</p>,
                    <ul>
                        <li>Write-allocate: le a informação que deseja-se escrever da RAM para a cache e utiliza o procedimento de Write-Hit.</li>
                        <li>Write-no-allocate: escreve a informação diretamente na RAM.</li>
                    </ul>
                ]
            }

            
        ],
        exercise: 
        [
            {
                question: 'Questao 1: Quais são as 3 caracteristicas mais importantes sobre um componente de memoria?',
                options: 
                [
                    'A) Peso, custo e complexidade', 
                    'B) Velocidade, peso e custo', 
                    'C) Capacidade, custo e complexidade', 
                    'D) Custo, velocidade e capacidade'
                ],
                answer: 'D',
                explanation: "As caracteristicas mais importantes são: Capacidade (\"tamanho\" da memoria, quantos bits ela é capaz de armazenar), Velocidade (quão rapido é possivel acessar as informações na memória) e Custo (quão custoso em material e em recursos financeiros a confecção e implementação desse componente é)." 
            },
            {
                question: 'Questao 2: Qual a função da hierarquia de memória?',
                options: 
                [
                    'A) Contrabalancear vantagens e desvantagens dos diferentes tipos de memoria', 
                    'B) Reduzir o custo de produção.', 
                    'C) Identificar com facilidade qual memoria é mais eficiente e usá-la', 
                    'D) É um conceito teórico que, aplicado na pratica, não apresenta grandes diferenças'
                ],
                answer: 'A' , 
                explanation: "Memorias tem diferentes caracteristicas, o uso da hierarquia visa combinar essas memorias, com diferentes propriedades, a fim de se aproximar ao maximo da memória \"ideal\"."
            },
            {
                question: 'Questao 3: Qual a diferença entre memoria volátil e não volátil?',
                options: 
                [
                    'A) Voláteis perdem suas informações quando corta-se sua energia', 
                    'B) Voláteis são mais caras que as não voláteis', 
                    'C) Não voláteis são menos estaveis', 
                    'D) Não voláteis possuem abastecimento energético próprio'
                ],
                answer: 'A',
                explanation: "Numa memória volátil, como a RAM, os dados são apagados ao remover sua alimentação energetica."  
            },
            {
                question: 'Questao 4: Qual informação abaixo é INCORRETA sobre caches?',
                options: 
                [
                    'A) Visam aumentar a velocidade de acesso á memoria', 
                    'B) Varias caches com diferentes propriedades podem ser alinhadas, cirando diferentes níveis de cache', 
                    'C) Todo acesso a memoria realizado com cache é mais rápido que sem cache ', 
                    'D) Cada cache precisa ter definida uma unica politica de mapeamento'
                ],
                answer: 'C',
                explanation: "Embora a ideia seja acertar o maior numero de vezes possível, uma memória cache muitas vezes erra, e quando isso acontece, o tempo de acesso à memoria é maior do que seria sem cache, esse tempo perdido é chamado de \"penalidade por falha\"."
            },
            {
                question: 'Questao 5: Quanto a relação entre conjunto, bloco, palavra e byte qual afirmação abaixo é correta?',
                options: 
                [
                    'A) Conjuntos são formados por blocos, que são formados por bytes, que por sua vez são feitos de palavras', 
                    'B) Bytes formam blocos que formam palavras e todos podem ser agrupados para formar um conjunto', 
                    'C) Um conjunto é formado por blocos que são formados por palavras que são um agrupamento de bytes', 
                    'D) Palavras são formadas por bytes e podem formar blocos ou conjuntos'
                ],
                answer: 'C',
                explanation: "Um byte é a unidade base, juntos formam uma palavra que podem se agrupar em blocos, uma cache le sempre um certo numero de palavras, ou seja, le um bloco, quando esses blocos são unidos formam conjuntos"
            },
            {
                question: 'Questao 6: Qual a necesssidade de mapeamento da memoria cache?',
                options: 
                [
                    'A) Impedir que informações entrem em conflito dentro da memória', 
                    'B) Poder inserir e buscar informações na cache', 
                    'C) Para saber onde escrever as informações dopis de retira-las da cache', 
                    'D) Referenciar o nuvel da cache que contem a informação'
                ],
                answer: 'B',
                explanation: "O mapeamento serve para saber em que posição da cache deve ser inserido o bloco recebido da memoria RAM, e, portanto, saber como encontrá-lo numa busca." 
            },
            {
                question: 'Questao 7: Dado uma cache com mapeamento direto endereçado a byte, visto que é composta por 16 blocos, cada bloco com 4 palavras de 8 bytes, se ela é usada para uma RAM que tem 1024bytes, quantos bits do endereçamento serão destinados a: index, W.O., B.O. e tag?',
                options: 
                [
                    'A)  tag: 1bit, index: 4bits, W.O.: 2bit, B.O.: 3bits', 
                    'B) tag: 4bit, index: 1bits, W.O.: 2bit, B.O.: 3bits', 
                    'C)  tag: 2bits, index: 4bits, W.O.: 1bit, B.O.: 3bits', 
                    'D) tag: 3bits, index: 4bits, W.O.: 1bit, B.O.: 2bits'
                ],
                answer: 'A',
                explanation: "Endereçada a byte, então B.O. = numero de bits para endereçar 8 bytes, 8 = 2^3 então B.O. = 3bits, " + 
                              "W.O. = numero de bits para endereçar 4 palavras, 4 = 2^2 então W.O. = 2bits, " +
                              "index = numero de bits para endereçar 16 blocos, 16 = 2^4 então index = 4bits, " +
                              "tag = total - (B.O. + W.O. + index) total = numero de bits necesario para endereçar 1024bytes, 1024 = 2^10, então total = 10, " + 
                              "então tag = 10 - (3 + 2 + 4) = 10 - 9 = 1bit"
            },
            {
                question: 'Questao 8: Dado uma cache com mapeamento associativo por conjuntos, endereçado a byte, visto que é composta por 128 conjuntos de 16 blocos, cada bloco com 8 palavras de 4 bytes, se ela é usada para uma RAM que tem 1MB, quantos bits do endereçamento serão destinados a: index, W.O., B.O. e tag?',
                options: 
                [
                    'A)  tag: 7bit, set: 8bits, W.O.: 2bit, B.O.: 3bits', 
                    'B) tag: 4bit, set: 7bits, W.O.: 5bit, B.O.: 4bits', 
                    'C)  tag: 8bit, set: 7bits, W.O.: 3bit, B.O.: 2bits', 
                    'D) tag: 5bit, set: 7bits, W.O.: 4bit, B.O.: 4bits'
                ],
                answer: 'C',
                explanation: "Endereçada a byte, então B.O. = numero de bits para endereçar 4 bytes, 4 = 2^2 então B.O. = 2bits, " + 
                             "W.O. = numero de bits para endereçar 8 palavras, 8 = 2^3 então W.O. = 3bits, " +
                             "set = numero de bits para endereçar 128 conjuntos, 128 = 2^7 então index = 7bits, " +
                             "tag = total - (B.O. + W.O. + index) total = numero de bits necesario para endereçar 1MB, 1MB = 2^20, então total = 20, " + 
                             "então tag = 20 - (2 + 3 + 7) = 20 - 12 = 8bits" 
            },
            {
                question: 'Questao 9: O que significa quando uma memoria cache tem muito miss?',
                options: 
                [
                    'A) Significa que a cache em questão eh ruim e deve ser completamente trocada', 
                    'B) Significa que a cache em questão é apropriada para o serviço que esta realizando', 
                    'C) Significa que a cache não é eficiente, deve-se mudar sua politica de substituição', 
                    'D) Significa que a cache teve um resultado ruim mas é necessario mais informação para descobrir a causa'
                ],
                answer: 'D',
                explanation: "Uma memoria cache pode dar miss por inumeros motivos, o ideal é buscar uma memoria que para a media dos casos de o menor numero de miss possivel, mas, dependendo da implementação, existe uma sequencia de instruções que irá gerar uma quantidade grande de misses, portanto, é impossivel dizer pontualmento o motivo da cache ter sido tão ineficiente sem mais informações" 
            },
            {
                question: 'Questao 10: Para que servem as politicas da cache.',
                options: 
                [
                    'A) Para que ela possa de adaptar a situação atual, alterando sua politica para a mais eficiente', 
                    'B) Para definir em que posição as informações vindas da memoria serão colocadas na cache', 
                    'C) Servem para encontrar possiveis erros na cache e reportá-los', 
                    'D) Servem para definir como a cache se comportada em situações de remoção de um bloco ou atualização de alguma informação'
                ],
                answer: 'D',
                explanation: "As politicas das cache são usadas para definirem como serão realizadas trocas de blocos na cache (politica de substituição), visando retirar um bloco que não sera mais utilizado, e como serão realizadas escritas, definindo como a informação será salva" 
            }
        ]

    },
    {
    	title: 'Entrada e Saída',
    	subtopics:
    	[
            {
                title: 'Definição',
                content:
                [
                <p>Os dispositivos de entrada e saída tem a função de fazer o computador ter uma interface com o mundo exterior. Podem ser caracterizados de 3 formas</p>,
                <ul>
                    <li>Comportamento: Entrada (teclado, mouse) / Saída (monitor, impressora) / Armazenamento (disco, memória flash)</li>
                    <li>Relacionamento: com o ser humano (teclado, vídeo, impressora) ou com o computador (discos, sensores, interface de rede) </li>
                    <li>Taxa de transferência: bytes/seg ; transferências/seg</li>
                </ul>
                ]
            },
            {
                title: 'Módulo de E/S',
                content:
                [
                <p>Considerado o terceiro elemente de um sistema de computação, exerce a função de comunição entre os dispositivos periféricos e o barramento do sistema. Dessa forma, o módulo E/S faz a interface com o processador e a memória, faz interface entra os vários disposistivos periféricos de um computador e livra a CPU do gerenciamento dos mesmos.</p>,
                <p> O controle do fluxo de dados entre os disposistivos é feito da seguinte forma </p>,
                <ul>
                    <li>Processador verifica estado do dispositivo</li>
                    <li>Módulo de E/S retorna o estado</li>
                    <li>Se estiver pronto para transmitir, processador requisita transferência, enviando um comando para o módulo de E/S</li>
                    <li>O módulo de E/S obtém uma unidade de dados do dispositivo externo</li>
                    <li>Os dados são transferidos do módulo de E/S para o processador</li>
                </ul>,
                <p>Além disso, o módulo E/S identifica o endereço único de cada dispositivo. Os disposistivos, por sua vez, mandam sinais de controle, estado e dados para o módulo</p>,
                <p> Para equilibrar as taxas de transferência lentas dos disposistivos periféricos, o módulo E/S armazena dados dos disposistivos em um buffer para não ocupar a memória com uma taxa de transferência baixa, e então, o módulo faz uma transferência rápida com a memória</p>,
                <p>Como os disposistivos podem ter mau funcionamento, o módulo de E/S cuida de detectar possíveis erros com bit de paridade</p> 
                ]
            },
            {
                title: 'E/S programada',
                content:
                [
                    <p>Para trocar dados entre o processador e o módulo de E/S, há um programa que manipula as operações E/S</p>,
                    <ul>
                        <li>CPU requisita uma operação de E/S</li>
                        <li>Módulo de E/S realiza a operação</li>
                        <li>Módulo de E/S seta o bit de estado</li>
                        <li>CPU fica constantemente verificando o bit de estado</li>
                        <li>Módulo de E/S não informa a CPU diretamente</li>
                        <li>Módulo de E/S não interrompe a CPU</li>
                        <li>A CPU pode esperar ou voltar para verificar posteriormente</li>
                    </ul>
                ]
            },
            {
                title: 'E/S dirigida por interrupção.',
                content:
                [
                <p>Para evitar que o sistema fique travado no caso de falha nos disposistivos E/S, foi implementado um sistema de monitoração por um temporizador, que interrompe o processo caso exceda o tempo limite.Caso uma tarefa mais urgente suja, interrompe a execução atual para realizar a urgente </p>
                ]
            },
            {
                title: 'E/S com Acesso Direto à Memória (DMA)',
                content:
                [
                <p>Com o problema da taxa de transferência de E/S ficar limitada pela velocidade do processador, e este ficar sobrecarregado com as operações do módulo E/S, foi criado o DMA. O DMA permite que certos dispositivos de hardware num computador acessem a memória do sistema para leitura e escrita independentemente da CPU</p>,
                <p>Com esse novo módulo conctado ao barramento, o desempenho do computado é aumentado.</p>
                ]
            },
            {
                title: 'Barramento',
                content:
                [
                <p>Barramento é um conjunto de linhas de comunicação que permitem a interligação entre dispositivos, como a CPU, a memória e outros periféricos. São as linhas de transmissão que transmitem as informações entre o processador, memória e todos os demais periféricos do computador</p>,
                <p>Existem 3 funções distintas nos barramentos:</p>,
                <ul>
                    <li>Função de transporte dos dados. </li>
                    <li>Função de indicar endereço de memória dos dados que o processador deve retirar ou enviar. </li>
                    <li>Função que controla as ações dos barramentos anteriores. Controla solicitações e confirmações.</li>
                </ul>,
                <p>A largura (quantidade de bits que podem ser transmitidos ao mesmo tempo) apresenta grande influência no desempenho, podendo ser de 8, 16, 32, ou 64 bits</p>,
                ]
            }
    	],
    	exercise:
    	[
            {
                question:'Questão 1: Para que servem os disposistivos de entrada e saída?',
                options:
                [
                    'A) Para fazer a interface entre o computador e mundo exterior', 
                    'B) Tornar o processamento mais rapido', 
                    'C) Aumentar capacidade de memória', 
                    'D)Resolver as bolhas do pipeline'
                ],
                answer:'A',
                explanation:'Suprem a necessidade de interação entre o computador e o mundo'
            },
            {
                question:'Questão 2: Qual a principal função do módulo E/S?',
                options:
                [
                    'A) Transportar dados', 
                    'B)Conectar o processador e a memória', 
                    'C)Lidar com as velocidades e gerenciar os disposistivos E/S', 
                    'D)Proteger o computador'
                ],
                answer:'C',
                explanation:'O módulo E/S controla o fluxo de dados dos disposistivos externos e o computador'
            },
            {
                question:'Questão 3: O que são barramentos?',
                options:
                [
                    'A)Estrutura que serve para encontrar possiveis erros na cache e reportá-los', 
                    'B)Um conjunto de linhas de comunicação que permitem a interligação entre dispositivos', 
                    'C) Dispositivos que equilibram as taxas de transferência lentas dos disposistivos periféricos e a memória', 
                    'D) Um módulo que aumenta o clock do processador'
                ],
                answer: 'B',
                explanation:'Os barramentos são fios que ligam os componentes do processador'
            }
    	]
    }
]

export default contentData
