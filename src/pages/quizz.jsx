import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";

const Quizz = () => {
    return (
        <div className="bg-school-pattern bg-repeat-round bg-fixed">
        <Header />
        <section className="mt-16 mx-16 h-[30rem] bg-gradient-to-r from-light_black_thr  to-transparent from-100%">
          <article className="flex items-center justify-center w-full h-full">
              <h1 className="text-green-500 text-6xl text-center">Perguntas Interativas</h1>
          </article>
        </section>
        <section className="flex flex-col justify-center items-center py-32 pb-10 bg-light_black_thr">
            <article className="w-[70rem] h-[20rem] rounded-md p-10 mb-5 mx-5 bg-zinc-50">
                <h3 className="h-[5rem] p-5 text-green-500 text-center text-3xl">Quizz - Typeform</h3>
                <p className="m-auto mt-5 w-[40rem] text-justify">
                    O questionário a seguir reúne perguntas de todos os conteúdos do website, 
                    proporcionando uma ampla revisão de informações disponíveis na plataforma.
                </p>
                <div className="my-10 text-center">
                    <a href="https://38pwgy1rimv.typeform.com/to/lgq3PaEb" target={"_blank"} className="text-2xl transition-all underline hover:text-green-500">Iniciar o questionário</a>
                </div>
          </article>
        </section>
        <Footer />
      </div>
    )
}

export default Quizz;