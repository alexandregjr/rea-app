import React from 'react'

const contentData =
[
    {
        title: 'MIPS',
        subtopics: 
        [
            {
                title: 'Arquitetura',
                content:[
                            <p>A arquitetura MIPS, Microprocessor without interlocked pipeline stages, é uma arquitetura de 32-bits, desenvolvida pela MIPS Computer System (fundada pelo Hennessy em 1984)</p>
                        ]
            },
            {
                title: 'Assembly',
                content:[  
                            <p>A estrutura de um programa assembly possui o segmento de dados, onde são declaradas as variáveis, e o segmento de texto onde há o código fonte.</p>,
                            <p>São usados rótulos para identificar uma linha de código, e esse rótulo pode ser utilizado posteriormente, em desvos e chamadas de procedimento para voltar à essa linha.</p>,
                            <p>Além disso, o assembly mips conta com diretivas do montado para determinar configurações ao código, como alinhamento (.aling), se uma dada variável é string (.ascii) entre outros.</p>,
                            <p>O montador chama o sistema para realizar operações de escrita na tela e leitura do teclado, além de indicar término do pragrama, através do comando syscall</p>
                        ]
            },
            {
                title: 'Memória',
                content:[
                            <p>A memória do MIPS é divida em três partes: o segmmento de texto, que armazena as instruções do programa, o segmento de dados, que reserva espaço para "variáveis"(dados que podem ser estáticos ou dinâmicos), e o segmento de pilha, que é uma pilha onde pode-se empilhar dados durante o programa para uso posterior</p>
                        ]
            },
            {
                title: 'Procedimentos',
                content:[
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
                content:[
                            <p>ISA, Instruction Set Architecture, é o conjunto de instruções (código de máquina) representados através de minemônicos. O MIPS possui instruções aritméticas, lógicas, de uso da memória, de controle de fluxo e comparações, separadas em 3 tipos: Tipo R (register), que evolve registrador-registrador, Tipo I(immediate), que envolve um valor imadiato, e Tipo J(jump), de desvio</p>
                        ]
            }
        ],
        exercise: 
        [
            {
                question: 'Questao 1: Para que servem rótulos?',
                options: ['A) Auxiliar em operações aritméticas', 'B) Ser referencias para desvios', 'C) Ser diretiva do montador', 'D) Referenciar variáveis'],
                answer: 'B',
                explanation: 'O rótulo é referencia uma linha de código, sendo é usado para fazer o código voltar à essa linha. Portanto, é utilizado para desvios.'  
            },
            {
                question: 'Questao 2: O que diretivas do montador fazem?',
                options: ['A) Definem configurações do código', 'B) Identificam uma linha no código para referência', 'C) Faz chamada ao sistema', 'D) Efetua um procedimento'],
                answer: 'A',
                explanation: 'As diretivas não são instruções, elas são destinadas ao assembler(montador) que as utiliza para saber de que maneira ele deve montar o arquivo executável.'
            },
            {
                question: 'Questao 3: Qual o tipo da instrução jr?',
                options: ['A) Jump', 'B) Immediate', 'C) Register', 'D) Híbrido Register e Jump'],
                answer: 'C',
                explanation:'A instrução jr é do tipo R, já que a instrução precisa de registradore e nao envolve valor imediato. Não existem instruções híbridas'  
            },
            {
                question: 'Questao 4: Quais componentes fazem parte da divisão de memória do MIPS',
                options: ['A) texto e dados', 'B) dados e pilha', 'C) pilha e texto', 'D) texto, dados e pilha'],
                answer: 'D', 
                explanation: 'A divisão de memória do MIPS possui o segmento de texto, de dados e de pilha.'
            },
            {
                question: 'Questao 5: Quais registradores são usados para argumento e retorno em um procedimento por convenção?',
                options: ['A) ra e sp', 'B) s\'s e t\'s', 'C) a\'s e v\'s', 'D) t\'s e v\'s'],
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
                        <li>Pipeline: executa cada instrução em vários passos, cada passo em um clock, e processa multiplas isntruções em paralelo.</li>
                    </ul>
                ]
            },
            {
                title:'Caminho de Dados Monociclo',
                content: <img src='http://gec.di.uminho.pt/discip/TextoAC/Fig-12.12.gif' alt='datapath-monocicle'></img>
            },
            {
                title:'Caminho de Dados Pipeline',
                content: <img src='' alt='datapath-pipeline'></img>
            }
        ],
        exercise: []
    }
]

export default contentData