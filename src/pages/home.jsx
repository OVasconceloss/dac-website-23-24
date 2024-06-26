import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import imageTwo from "../assets/school-image-2.jpg";
import { Objective } from "../components/objective/objective";

const Home = () => {
  return (
    <>
    <div className="bg-school-pattern bg-repeat-round bg-fixed">
      <Header />
      <section className="w-[50rem] h-screen p-5 bg-gradient-to-r from-light_black_thr to-transparent from-100%">
        <article className="flex w-full h-full items-center">
          <div>
            <h2 className="text-zinc-100 text-2xl">Domínios de Autonomia Curricular</h2>
            <h1 className="text-green-500 text-4xl">Escola Secundária de Santo André</h1>
          </div>
        </article>
      </section>
      <hr className="border-2 border-green-500" />
      <section className="justify-center flex items-center p-5 bg-light_black_thr">
        <article className="my-10 py-10 px-5 w-[80rem] bg-zinc-100 rounded-md">
          <h1 className="text-4xl text-center">Objetivos do Projeto</h1>
          <Objective />
          <Objective isInverted={true}/>
          <div className="flex items-center space-x-5">
            <p className="text-justify">
              Explica, ainda, os conceitos básicos de IA, incluindo a história, as vantagens e desvantagens, 
              exemplos do seu uso no quotidiano e o impacto na sociedade, abordando prós e contras.
            </p>
            <img src={imageTwo} alt="Objective One" className="object-scale-down max-h-full w-[35rem] h-[35rem] p-2 rounded-md z-10" />
            <div class="bg-opacity-25 flex justify-center items-center">
              <div class="absolute bg-green-600 w-[0.5rem] h-72 shadow z-0"></div>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
    </>
  );
};

export default Home;