import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import schoolImage from "../assets/school-image-about.jpg";

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
          <article className="w-[35rem] h-[65rem] rounded-b-md p-10 mb-5 mx-5 bg-zinc-50">
            <h3 className="h-[5rem] p-5 text-green-500 text-center text-3xl">Agrupamento de Escolas de Santo André</h3>
            <p className="mt-14 text-justify">
              A Escola Secundária de Santo André (ESSA) proporciona um saudável ambiente para a aprendizagem com o objetivo de 
              promover o bom desempenho no percurso universitário. A ESSA possui instalações adequadas e bem cuidadas, onde todos 
              colaboram para um ambiente positivo, disponibiliza uma grande quantidade de cursos em diversas áreas, como ciências, 
              humanidades, artes, tecnologia e informática, entre outros. Assim, torna-se um agradável e potenciador local de boas práticas 
              educativas, permitindo que os alunos escolham os cursos, para que num futuro próximo gostem da sua atividade profissional. 
            </p>
            <img src={schoolImage} alt="Escola Secundária de Santo André" className="mt-10 my-5 object-scale-down max-h-96 rounded-md
            border border-green-500" />
            <figcaption className="text-center"><em>Fig.1 - Escola Secundária de Santo André</em></figcaption>
            <p className="mt-5 text-justify">
              Além disso, a escola é constituída por profissionais docentes e não docentes dedicados ao seu trabalho e qualificados para 
              desempenhar essa função, comprometendo-se em oferecer uma educação e um ambiente de qualidade. A Escola Secundária de Santo 
              André usa os seus investimentos na infraestrutura de tecnologia e equipamentos renováveis e atualizados, como os laboratórios 
              de ciências, salas de informática, biblioteca bem equipada com tecnologia e espaços de repouso/atividades desportivas, criando 
              um ambiente onde os alunos podem socializar e aprender. 
            </p>
          </article>
          <article className="w-[35rem] h-[50rem] rounded-b-md p-10 mb-5 mx-5 bg-zinc-50">
            <h3 className="h-[5rem] p-5 text-green-500 text-center text-3xl">2ºK - A Nossa Turma</h3>
            <p className="mt-14 text-justify">
              A nossa turma, o 11ºK do curso profissional de Informática na Escola Secundária de Santo André, é composta por 25 alunos, 
              23 rapazes e duas raparigas, com uma média de 16 anos de idade. Os alunos demonstram interesse nos conteúdos das diversas 
              disciplinas, procurando participar nas aulas, colaborar em trabalhos de grupo e ajudar os colegas quando necessário. No geral, 
              a turma revela capacidade de trabalho em grupo, visto que é uma metodologia que facilita a aprendizagem. 
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