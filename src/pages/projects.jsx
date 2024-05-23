import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";

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
                <article className="w-[40rem] p-5 mx-5 bg-zinc-50 rounded-md">

                </article>
            </section>
            <Footer />
        </div>
        </>
    );
};

export default Project;