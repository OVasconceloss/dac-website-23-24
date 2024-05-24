import ReactPlayer from "react-player";
import imageConcept from "../assets/ai_concept.jpg";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import imageOne from "../assets/content/content_1.png";
import imageTwo from "../assets/content/content_2.jpg";
import imageThr from "../assets/content/content_3.jpg";
import imageFou from "../assets/content/content_4.jpg";

const Content = () => {
    return (
        <>
        <div className="bg-school-pattern bg-repeat-round bg-fixed">
            <Header />
            <section className="mt-32 mb-64 mx-16 h-[30rem] bg-gradient-to-r from-light_black_thr  to-transparent from-100%">
                <article className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="text-green-500 text-6xl text-center">Inteligência Artificial</h1>
                    <h2 className="py-7 text-zinc-50 text-2xl">O impacto da IA nas empresas/profissões/mundo do trabalho</h2>
                </article>
            </section>
            <section className="flex justify-center py-32 pb-10 bg-light_black_thr">
                <article className="w-[40rem] p-5 mx-5 bg-zinc-50 rounded-md">
                    <h2 className="text-green-500 text-2xl uppercase mb-5">Conceito de Inteligência Artifical</h2>
                    <p className="text-justify">
                        Inteligência Artificial refere-se ao uso de computadores para realizar várias tarefas que normalmente exigem inteligência humana. 
                        O objetivo da IA é ser capaz de fazer coisas como reconhecer padrões, tomar decisões e até julgar como os seres humanos.
                        Na definição do professor John McCarthy (“pai da Inteligência Artificial”), da Universidade de Stanford, "é a ciência e a 
                        engenharia de criar máquinas inteligentes, especialmente programas de computador inteligentes”. “A mesma está relacionada à 
                        tarefa semelhante de utilizar computadores para entender a inteligência humana, mas a IA não precisa de se limitar a métodos 
                        que são biologicamente observáveis", escreveu o mesmo em 1955.  
                    </p>
                    <div className="m-auto flex justify-center">
                        <img src={imageConcept} alt="Conceito de AI" className="object-scale-down max-h-64"/>
                    </div>
                </article>
                <article className="w-[40rem] p-5 mx-5 bg-zinc-50 rounded-md">
                <h2 className="text-green-500 text-2xl uppercase mb-5">História da Inteligência Artificial</h2>
                    <p className="text-justify">
                        A história da inteligência artificial não é recente, esta leva-nos de volta à década de 50, 
                        quando os pesquisadores começaram a explorar a possibilidade de criar máquinas capazes de imitar a inteligência humana. 
                        O termo "inteligência artificial" foi começado por John McCarthy em 1956, durante uma conferência na Universidade de Dartmouth.
                    </p>
                    <br />
                    <p className="text-justify">
                        Nos primeiros anos, os pesquisadores focaram-se em resolver vários problemas matemáticos e lógicos, 
                        desenvolvendo assim algoritmos e programas que pudessem executar tarefas complexas. Um marco importante 
                        foi o programa de xadrez desenvolvido por Claude Shannon em 1950, que foi um dos primeiros exemplos de IA aplicada. 
                        
                        Shannon e o seu famoso Teseu foram os pioneiros nos primeiros testes de inteligência artificial, utilizando assim labirintos para 
                        testar a capacidade de aprendizagem e das tomadas de decisões do mesmo. Estas experiências foram fundamentais para o desenvolvimento de 
                        algoritmos de aprendizagem da máquina.  
                    </p>
                </article>
            </section>
            <section className="flex justify-center py-5 pb-10 bg-light_black_thr">
                <article className="w-[82rem] p-5 py-10 mx-5 bg-zinc-50 rounded-md">
                    <h2 className="text-green-500 text-2xl uppercase mb-5 text-center">Vantagens e Desvantagens da Inteligência Artifical</h2>
                    <h3 className="px-5 text-xl mx-52 my-14">Vantagens da Inteligência Artifical</h3>
                    <p className="m-auto text-justify w-[50rem]">
                        No mundo atual, a Inteligência Artificial ajuda no crescimento das empresas e na nossa vida pessoal, 
                        mas ainda existe um longo caminho a percorrer até estar totalmente evoluída e concluída. Os chatbots 
                        (robôs assistentes de IA) e assistentes pessoais são exemplos de como a tecnologia pode ser introduzida 
                        nas nossas rotinas para melhorar aspetos essenciais para a qualidade de vida. De acordo com dados recentes, 
                        75% dos trabalhadores acreditam que a inteligência artificial pode criar os seus próprios postos de trabalho, 
                        mesmo que possibilite profissões relacionadas com processos e que suportem a automização. 
                    </p>
                    <hr className="m-auto w-[50rem] my-10" />
                    <h3 className="px-5 text-xl mx-52 my-10 ml-10 text-right">Desvantagens da Inteligência Artifical</h3>
                    <p className="m-auto text-justify w-[50rem]">
                        Em relação ao Alto custo de criação, para desenvolver e tornar útil uma inteligência artificial pode ser uma tarefa difícil, 
                        pois requer um alto investimento. A própria OpenAI recebeu investimentos bilionários dos fundadores e da Microsoft para poder 
                        desenvolver o ChatGPT e o DALL-E 2. A utilização de inteligência artificial causa o desemprego, as máquinas podem substituir os 
                        humanos em muitas tarefas, aumentando o desemprego. Ainda não há uma estimativa, pois alguns críticos acreditam que o efeito será 
                        revertido: as máquinas aumentarão o número de empregos disponíveis. Uma das grandes dificuldades da inteligência artificial é 
                        compreender as emoções as máquinas podem fazer um trabalho eficaz em muitas áreas, mas não podem substituir a conexão humana, 
                        a inteligência artificial não tem sentimentos, por isso não consegue compreender muitos aspetos da vida humana. 
                    </p>
                    <h2 className="text-center text-3xl mt-10 py-10">Vídeo Relacionado</h2>
                    <div className="m-auto">
                        <ReactPlayer
                            className="m-auto"
                            url="https://www.youtube.com/watch?v=gEJOvEP2r6A"
                        />
                    </div>
                </article>
            </section>
            <section className="flex justify-center py-5 pb-10 bg-light_black_thr">
                <article className="w-[82rem] p-5 py-10 mx-5 bg-zinc-50 rounded-md">
                    <h2 className="text-green-500 text-2xl uppercase mb-5 text-center">Impacto da utilização da Inteligência Artifical</h2>
                    <p className="m-auto text-justify w-[50rem]">
                        No quotidiano, a IA está cada vez mais presente nas nossas vidas, desde assistentes 
                        virtuais nos nossos smartphones até sistemas de recomendação em plataformas de streaming e 
                        comércio eletrónico. Essas tecnologias tornam as nossas vidas mais convenientes, personalizadas 
                        e eficientes, mas também levantam preocupações sobre privacidade, segurança e dependência excessiva 
                        de algoritmos. É essencial que a sociedade esteja atenta aos impactos da IA e trabalhe para garantir 
                        que ela seja desenvolvida e utilizada de maneira ética e responsável 
                    </p>
                    <hr className="m-auto w-[50rem] my-10" />
                    <div className="w-[50rem] m-auto my-5 flex-col justify-center space-y-2">
                        <h3 className="font-bold">Automatização de tarefas repetitivas</h3>
                        <div className="flex items-center space-x-2">
                            <img src={imageOne} alt="Automaticação de tarefas repetitivas" className="object-scale-down max-h-40"/>
                            <p className="py-2 text-justify">
                                A IA permite automatizar tarefas rotineiras e repetitivas, 
                                o que pode libertar os trabalhadores para se concentrarem 
                                em tarefas mais complexas e criativas. Por exemplo, em setores 
                                como a indústria e a logística, robôs e sistemas de IA podem assumir 
                                muitas das tarefas de montagem e transporte.
                            </p>
                        </div>
                    </div>
                    <div className="w-[50rem] m-auto my-5 flex flex-col space-y-2">
                        <h3 className="font-bold text-right">Eficiência operativa</h3>
                        <div className="flex items-center space-x-2">
                            <p className="py-2 text-justify">
                                Empresas podem usar IA para otimizar processos internos, melhorar a produtividade
                                e reduzir custos. Algoritmos de IA podem analisar grandes volumes de dados para identificar
                                padrões e tendências, ajudando as empresas a tomar decisões mais informadas e rápidas. 
                            </p>
                            <img src={imageTwo} alt="Eficiência operativa" className="object-scale-down max-h-40"/>
                        </div>
                    </div>
                    <div className="w-[50rem] m-auto my-5 flex-col justify-center space-y-2">
                        <h3 className="font-bold">Novas oportunidades de emprego</h3>
                        <div className="flex items-center space-x-2">
                            <img src={imageThr} alt="Novas oportunidades de emprego" className="object-scale-down max-h-40"/>
                            <p className="py-2 text-justify">
                                Embora a IA possa substituir algumas tarefas, também cria novas oportunidades 
                                de emprego em áreas relacionadas, como desenvolvimento de algoritmos, engenharia de IA, 
                                análise de dados e design de experiência do utilizador. 
                            </p>
                        </div>
                    </div>
                    <div className="w-[50rem] m-auto my-5 flex flex-col space-y-2">
                        <h3 className="font-bold text-right">Transformação de setores inteiros</h3>
                        <div className="flex items-center space-x-2">
                            <p className="py-2 text-justify">
                                Setores inteiros estão a ser transformados pela IA. Por exemplo, na área da saúde, 
                                a IA está a ser usada para diagnóstico médico, desenvolvimento de medicamentos e gestão 
                                de dados de pacientes. Na agricultura, a IA está sendo aplicada para otimizar o uso de recursos, 
                                monitorizar safras e prever condições climáticas. 
                            </p>
                            <img src={imageFou} alt="Transformação de setores inteiros" className="object-scale-down max-h-40"/>
                        </div>
                    </div>
                </article>
            </section>
            <Footer />
        </div>
        </>
    );
};

export default Content;