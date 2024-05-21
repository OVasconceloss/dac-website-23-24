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
                <article className="w-[40rem] p-5 mx-5 bg-zinc-50">
                    <h2 className="text-green-500 text-2xl uppercase mb-2">Título 1</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, placeat quae est molestiae
                        et tenetur quas laboriosam nisi illo minus sequi consequuntur maiores sed qui asperiores! Sit 
                        beatae mollitia maiores.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat non accusantium animi quis
                        quae odit, soluta voluptatem quidem quasi natus iste! Porro accusantium, nulla earum provident incidunt
                        a tenetur?
                    </p>
                </article>
                <article className="w-[40rem] p-5 mx-5 bg-zinc-50">
                <h2 className="text-green-500 text-2xl uppercase mb-2">Título 2</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, placeat quae est molestiae
                        et tenetur quas laboriosam nisi illo minus sequi consequuntur maiores sed qui asperiores! Sit 
                        beatae mollitia maiores.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat non accusantium animi quis
                        quae odit, soluta voluptatem quidem quasi natus iste! Porro accusantium, nulla earum provident incidunt
                        a tenetur?
                    </p>
                </article>
            </section>
            <Footer />
        </div>
        </>
    );
};

export default Content;