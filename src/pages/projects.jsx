import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import imageOne from "../assets/content/content_int_3.jpg";
import imageTwo from "../assets/content/content_int_2.png";

import imageD1 from "../assets/content/image_1.jpg";
import imageD2 from "../assets/content/image_2.jpg";
import imageD3 from "../assets/content/image_3.jpg";

const Project = () => {
    return (
        <>
        <div className="bg-school-pattern bg-repeat-round bg-fixed">
            <Header />
            <section className="mt-32 mb-64 mx-16 h-[30rem] bg-gradient-to-r from-light_black_thr  to-transparent from-100%">
                <article className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="text-green-500 text-6xl text-center">Projetos Interdisciplinares</h1>
                </article>
            </section>
            <section className="flex justify-center py-32 pb-10 bg-light_black_thr">
                <article className="w-[80rem] p-10 mx-5 bg-zinc-50 rounded-md">
                    <h2 className="text-green-500 text-2xl uppercase mb-5 text-center">Isolamento Térmico - Físico-Química</h2>
                    <p>

                    </p>
                </article>
            </section>
            <section className="flex justify-center py-32 pb-10 bg-light_black_thr">
                <article className="w-[80rem] p-10 mx-5 bg-zinc-50 rounded-md">
                    <h2 className="text-green-500 text-2xl uppercase mb-5 text-center">Clube de Robótica - Inforcodeclub</h2>
                    <h2 className="mt-10 py-5 text-xl">Debates do clube de robótica "Inforcode Club"</h2>
                    <p className="text-justify">
                        No âmbito do clube de robótica "InforcodeClub", realizámos uma série de apresentações para dar a conhecer o nosso clube e 
                        os projetos desenvolvidos ao longo do ano letivo. Foram efetuadas 10 apresentações direcionadas para turmas do 8º e 9º anos da 
                        Escola Básica da Quinta da Lomba - 2.º e 3.º ciclos do Ensino Básico. 
                    </p>
                    <br />
                    <p className="text-justify">
                        Durante estas sessões, além de apresentarmos o nosso clube e os projetos realizados, também partilhámos a nossa 
                        opinião sobre a cibersegurança, um tema de extrema relevância nos dias de hoje. Os alunos tiveram a oportunidade de 
                        aprender sobre as melhores práticas de segurança digital e a importância de proteger os seus dados pessoais online. 
                    </p>
                    <h2 className="py-2 mt-5 text-center text-2xl">Imagens da Atividade</h2>
                    <div className="m-auto my-2 justify-center flex space-x-5">
                        <img src={imageD1} alt="Revolução do Algoritmo Mestre" className="my-5 object-scale-down max-h-40" />
                        <img src={imageD2} alt="Revolução do Algoritmo Mestre" className="my-5 object-scale-down max-h-40" />
                        <img src={imageD3} alt="Revolução do Algoritmo Mestre" className="my-5 object-scale-down max-h-40" />
                    </div>
                    <hr />
                    <h2 className="text-right py-5 text-xl">Debates do clube de robótica "Inforcodeclub"</h2>
                    <p className="text-justify">
                        No âmbito do clube de robótica "Inforcodeclub", realizámos debates sobre vários temas, entre os quais a 
                        “Cibersegurança”, a “Utilização de Telemóveis na Sala de Aula” e “Redes Sociais e suas Vantagens e Desvantagens”. 
                        Os debates contaram com a participação ativa dos alunos do 9ºA e do 9ºE. 
                    </p>
                    <br />
                    <p className="text-justify">
                        Durante os debates, partilhámos as nossas opiniões e experiências sobre os temas abordados, proporcionando um espaço 
                        para uma troca de opiniões. Os alunos tiveram a oportunidade de expressar a sua opinião sobre a cibersegurança, discutindo 
                        a importância de se manterem seguros online. Também explorámos o impacto da utilização de telemóveis na sala de aula, 
                        analisando os benefícios e os desafios. Por último, debatemos as redes sociais, salientando as suas vantagens para a 
                        comunicação e a aprendizagem, mas também alertando para possíveis desvantagens, como a privacidade e o tempo de ecrã. 
                    </p>
                    <h2 className="text-center mt-5 py-5 text-xl">Projetos do Clube | 2023/2024</h2>

                </article>
            </section>
            <section className="flex justify-center py-32 pb-10 bg-light_black_thr">
                <article className="w-[80rem] p-10 mx-5 bg-zinc-50 rounded-md">
                    <h2 className="text-green-500 text-2xl uppercase mb-5 text-center">Debate sobre Inteligência Artificial - Português</h2>
                    <div className="my-10 flex justify-center space-x-10">
                        <img src={imageOne} alt="Revolução do Algoritmo Mestre" className="my-5 object-scale-down max-h-96" />
                        <img src={imageTwo} alt="Revolução do Algoritmo Mestre" className="my-5 object-scale-down max-h-96" />
                    </div>
                    <p className="text-justify">
                        A inteligência artificial tornou-se uma realidade para todas as pessoas. 
                        Na atualidade, é difícil desenvolver qualquer tópico sem pensar no recurso à 
                        IA, pois é uma tecnologia que assume um papel importante para a humanidade. 
                        Tendo em conta o seu impacto, foi dinamizado um debate entre os alunos do 2ºK 
                        da Escola Secundária de Santo André com o objetivo de refletir e trocar opiniões 
                        acerca da evolução da IA e respetivos benefícios e riscos. A atividade interdisciplinar denominada 
                        “O impacto da Inteligência Artificial nas empresas/profissões/mundo do trabalho” teve como ponto de partida a 
                        leitura e análise da obra A Revolução do Algoritmo Mestre, da autoria do português Pedro Domingos, formado no 
                        Instituto Superior Técnico em Lisboa e professor de Ciências da computação na Universidade de Washington. 
                    </p>
                    <br />
                    <p className="text-justify">
                        Após a tarefa inicial, no dia 22 de fevereiro de 2024, realizou-se um debate na 
                        presença dos docentes das disciplinas de Português e de Arquitetura de computadores, 
                        Elisabete de Jesus e José Romeiro, respetivamente. Como mediador, tivemos um dos membros da turma, 
                        o aluno Victor Vasconcelos, que seguiu um conjunto de tópicos fornecidos por todos os participantes. 
                        Ao longo do debate, abordaram-se diversas questões, tais como: "Consideram os algoritmos uma mais-valia 
                        para a sociedade?", "O algoritmo mestre pode assumir o controlo do mundo?" e "Qual é a importância da 
                        supervisão humana no desenvolvimento ético de inteligência artificial?". 
                    </p>
                    <br />
                    <p>
                        Foi possível analisar diferentes pontos de 
                        vista dadas as respostas obtidas, como por exemplo: a mudança no ambiente de trabalho, e em  
                        como a inteligência artificial vai "forçar" as pessoas a aprenderem a lidar com a  
                        nova tecnologia e o quão a inteligência artificial vai impactar no mercado de trabalho e na vida da humanidade.  
                    </p>
                </article>
            </section>
            <Footer />
        </div>
        </>
    );
};

export default Project;