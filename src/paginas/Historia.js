import React from 'react';
import remadores from '../assets/remadores.jpg'; 
import leonidas from '../assets/leonidas.jpg'; 
import zico from '../assets/zico.jpg'; 
import angelim from '../assets/angelim.jpg'; 
import gabigol from '../assets/gabigol.jpg'; 
import './Historia.css';

const HistoriaPage = () => (
    <div className="historia-container">
        <h2>Uma pequena parte da História do Clube de Regatas do Flamengo</h2>
        <div className="linha">
            <div className="legenda">
                Os seis jovens remadores que fundaram o Clube de Regatas do Flamengo, em 17 de novembro de 1895, deram início a uma paixão que transcende gerações. O clube surgiu na praia do Flamengo, no Rio de Janeiro, com o objetivo de competir no remo, esporte popular na época. A dedicação e o espírito de união dos fundadores logo tornaram o Flamengo conhecido no meio esportivo carioca. Em 1912, o clube expandiu suas atividades e criou o departamento de futebol, conquistando rapidamente a simpatia de torcedores de todas as classes sociais.

                O Flamengo foi crescendo junto com o povo, tornando-se um símbolo de inclusão e diversidade. Foi durante a Era Vargas, nos anos 1930 e 1940, que o clube ganhou o título de 'Mais Querido do Brasil'. Naquele período, o Flamengo já era famoso por atrair grandes multidões e representar as massas populares, unindo torcedores de diferentes origens em torno de sua paixão rubro-negra. Esse apelido foi reforçado pelo rádio, meio de comunicação que ajudou a levar o nome do clube para todo o Brasil, consolidando seu lugar especial no coração do povo.
            </div>
            <img src={remadores} alt="Remadores" className="imagem-direita" />
        </div>
        <div className="linha">
            <img src={leonidas} alt="Leônidas" className="imagem-esquerda" />
            <div className="legenda">
                Entre as décadas de 1930 e 1960, o Flamengo começou a consolidar sua popularidade como um dos clubes mais queridos do Brasil, especialmente no futebol. Durante esse período, o esporte crescia como uma paixão nacional, e o Flamengo, com seu carisma e apelo popular, se tornava cada vez mais aclamado pelas multidões. Foi também nessa época que o clube começou a atrair grandes jogadores, transformando o futebol em um espetáculo para torcedores de todas as classes sociais.

                Um dos principais nomes desse período foi Leônidas da Silva, o 'Homem Borracha', conhecido por sua habilidade acrobática e por popularizar a bicicleta, movimento que encantava os torcedores. Leônidas jogou pelo Flamengo de 1936 a 1941 e deixou sua marca como um dos maiores ídolos da história do clube. Seu talento era tão impressionante que ele inspirou a marca Lacta a criar, em 1938, o famoso chocolate 'Diamante Negro', usando o apelido dado ao craque pela imprensa por causa de sua performance brilhante em campo. Leônidas não apenas elevou o Flamengo a novos patamares no futebol, mas também ajudou a expandir a conexão do clube com a cultura popular, tornando-o um símbolo de carisma e raça no esporte brasileiro.

                Esse período marcou o início da hegemonia rubro-negra no coração dos torcedores, com jogos lotados e a construção de uma identidade que reforçava o Flamengo como o clube do povo. Foi uma era de crescimento e popularização que preparou o terreno para as glórias que viriam nas décadas seguintes.
            </div>
        </div>
        <div className="linha">
            <div className="legenda">
                Na década de 1970, o Flamengo começou a construir uma base sólida para o sucesso, investindo em jovens talentos das categorias de base. Esse trabalho deu frutos com o surgimento de craques como Zico, Júnior, Leandro, Andrade e Adílio. Essa geração conquistou o primeiro título do Campeonato Brasileiro em 1980, marcando o início de uma era de domínio.

                O ápice veio em 1981, quando o Flamengo conquistou a Taça Libertadores da América, com atuações históricas, e posteriormente sagrou-se campeão do Mundial de Clubes ao vencer o Liverpool por 3 a 0, em Tóquio. Comandado por Zico, o time encantou o mundo com seu futebol ofensivo e técnico, tornando-se referência internacional.

                Nos anos seguintes, o Flamengo manteve sua força, conquistando mais títulos importantes, como os Campeonatos Brasileiros de 1982, 1983 e 1987, este último no inesquecível título do Módulo Verde da Copa União, consolidando-se como campeão nacional.

                A década de 1990 trouxe novos desafios, mas o clube ainda brilhou em momentos marcantes, como a conquista da Copa do Brasil de 1990, o Campeonato Carioca de 1991 com o famoso gol de falta de Júnior, e a Copa Ouro de 1996. Em 1999, o Flamengo celebrou seu centenário com mais um título do Campeonato Carioca, em uma emocionante vitória sobre o Vasco no gol histórico de Rodrigo Mendes.

                Esse período de 30 anos foi fundamental para construir a identidade vencedora e a imensa torcida do Flamengo, com Zico como o símbolo máximo de uma era inesquecível, que marcou gerações e escreveu o nome do clube na história do futebol mundial.
            </div>
            <img src={zico} alt="Zico" className="imagem-direita" />
        </div>
        <div className="linha">
            <img src={angelim} alt="Angelim" className="imagem-esquerda" />
            <div className="legenda">
                Entre 2000 e 2015, o Flamengo enfrentou altos e baixos, mas manteve sua força como uma das maiores potências do futebol brasileiro. Apesar das dificuldades financeiras, o clube seguiu conquistando títulos importantes e reforçando sua conexão com a torcida.

                A primeira grande conquista foi a Copa dos Campeões de 2001, que garantiu vaga na Libertadores de 2002. Nos anos seguintes, o Flamengo brilhou nos estaduais, conquistando o Campeonato Carioca em 2001, 2004, 2007, 2008, 2009, 2011 e 2014. O título da Copa do Brasil de 2006 derrotando o Vasco da Gama foi um marco, resgatando a confiança do clube em torneios nacionais.

                O Flamengo viveu um momento especial em 2009, ao conquistar seu sexto título do Campeonato Brasileiro, com uma arrancada histórica liderada por jogadores como Petkovic e Adriano 'Imperador'. Esse título foi simbólico, marcando o retorno do clube ao topo do futebol nacional.

                Em 2013, o Flamengo brilhou mais uma vez na Copa do Brasil, superando adversários favoritos e contando com o apoio da torcida no Maracanã. Apesar de altos e baixos em campo, o período foi marcado pela reestruturação financeira, que começou em 2013 sob nova gestão. Essa fase preparou o Flamengo para os anos de glórias que estavam por vir.
            </div>
        </div>
        <div className="linha">
            <div className="legenda">
                Entre 2016 e 2024, o Flamengo entrou em uma era de reestruturação e glórias, marcada por investimentos, conquistas expressivas e o fortalecimento da sua posição como potência no futebol sul-americano e mundial.

                A partir de 2016, com uma gestão financeira sólida, o clube começou a montar elencos mais competitivos. Esse esforço deu frutos em 2019, sob o comando de Jorge Jesus, quando o Flamengo viveu um ano histórico. O time conquistou o Campeonato Brasileiro com uma campanha recorde e a tão esperada Taça Libertadores da América, ao vencer o River Plate com uma virada épica por 2 a 1 nos minutos finais. O Flamengo ainda disputou o Mundial de Clubes, chegando à final contra o Liverpool, onde foi derrotado na prorrogação.

                Nos anos seguintes, o clube continuou acumulando títulos: os Campeonatos Brasileiros de 2020 e os Cariocas de 2017, 2019, 2020 e 2021, além da Supercopa do Brasil em 2020 e 2021. Em 2022, o Flamengo brilhou novamente ao conquistar sua terceira Taça Libertadores da América e a Copa do Brasil, derrotando o Corinthians nos pênaltis.

                Em 2023, apesar de não conquistar o Campeonato Carioca, o Flamengo manteve sua competitividade em torneios nacionais e internacionais. Em 2024, o clube levantou a quinta taça da Copa do Brasil se tornando o segundo maior campeão da competição, reforçando sua hegemonia no futebol brasileiro.

                Com a vaga garantida na Libertadores de 2025, o Flamengo também se classificou para a Copa do Mundo de Clubes de 2025, consolidando sua força no cenário internacional. Durante esse período, a Nação Rubro-Negra continuou a ser um dos maiores patrimônios do clube, acompanhando cada conquista e reafirmando o Flamengo como símbolo de raça, amor e paixão.
            </div>
            <img src={gabigol} alt="Gabigol" className="imagem-direita" />
        </div>
    </div>
);

export default HistoriaPage;