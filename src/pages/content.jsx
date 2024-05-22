import imageConcept from "../assets/ai_concept.jpg";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";

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
                <article className="w-[82rem] mar p-5 mx-5 bg-zinc-50 rounded-md">
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
                        No mundo atual, a Inteligência Artificial ajuda no crescimento das empresas e na nossa vida pessoal, 
                        mas ainda existe um longo caminho a percorrer até estar totalmente evoluída e concluída. Os chatbots 
                        (robôs assistentes de IA) e assistentes pessoais são exemplos de como a tecnologia pode ser introduzida 
                        nas nossas rotinas para melhorar aspetos essenciais para a qualidade de vida. De acordo com dados recentes, 
                        75% dos trabalhadores acreditam que a inteligência artificial pode criar os seus próprios postos de trabalho, 
                        mesmo que possibilite profissões relacionadas com processos e que suportem a automização. 
                    </p>
                </article>
            </section>
            <Footer />
        </div>
        </>
    );
};

export default Content;