import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";

const About = () => {
  return (
    <>
    <div className="bg-school-pattern bg-repeat-round bg-fixed">
      <Header />
      <section className="mt-16 mx-16 h-[30rem] bg-gradient-to-r from-light_black_thr  to-transparent from-100%">
        <article className="flex items-center justify-center w-full h-full">
            <h1 className="text-green-500 text-6xl text-center">Caracterização do Agrupamento e Turma</h1>
        </article>
      </section>
      <section className="flex flex-col justify-center items-center py-32 pb-10 bg-light_black_thr">
        <hr className="w-[80rem] border-4 border-green-500"/>
        <div className="flex justify-center">
          <article className="w-[35rem] h-[50rem] rounded-b-md p-10 mb-5 mx-5 bg-zinc-50">
            <h3 className="h-[5rem] p-5 text-green-500 text-center text-3xl">Agrupamento de Escolas de Santo André</h3>
            <p className="mt-14">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              A quos sunt excepturi nisi. Perspiciatis maiores, repellendus qui
              explicabo distinctio totam? Corporis explicabo accusantium deleniti
              officia nobis eveniet odio fuga eum?
            </p>
          </article>
          <article className="w-[35rem] h-[50rem] rounded-b-md p-10 mb-5 mx-5 bg-zinc-50">
            <h3 className="h-[5rem] p-5 text-green-500 text-center text-3xl">2ºK - Nossa Turma</h3>
            <p className="mt-14">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              A quos sunt excepturi nisi. Perspiciatis maiores, repellendus qui
              explicabo distinctio totam? Corporis explicabo accusantium deleniti
              officia nobis eveniet odio fuga eum?
            </p>
          </article>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
};

export default About;