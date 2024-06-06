import imageOne from "../../assets/school-image.jpg";
import imageTwo from "../../assets/school-image-1.jpg";

export const Objective = ({isInverted}) => {
  return (
    <>
    {
      isInverted ? (
          <div className="flex items-center space-x-5">
            <div class="bg-opacity-25 flex justify-center items-center">
              <div class="absolute bg-zinc-800 w-[0.5rem] h-72 shadow z-0"></div>
            </div>
            <img src={imageTwo} alt="Objective One" className="object-scale-down max-h-full w-[35rem] h-[35rem] p-2 rounded-md z-10" />
            <p className="text-justify">
              O site pretende apresentar algumas características da Escola Secundária de Santo André. 
              Descreve a infraestrutura escolar, as suas instalações como salas de aula, laboratórios, biblioteca e 
              ginásio e demonstra os recursos que a escola tem a oferecer, como tecnologia em sala de aula e apoio 
              para alunos. Também menciona projetos e atividades extracurriculares que favorecem o desenvolvimento 
              social e educativo dos alunos e destaca as qualificações e contribuições para a qualidade da escola do 
              pessoal docente e não docente.
            </p>
        </div>
      ) : (
          <div className="flex items-center space-x-5">
          <p className="text-justify">
            Disponibiliza o perfil da turma, bem como o seu desempenho nas diversas atividades. 
            Além disso, inclui fotografias de eventos/projetos importantes, como projetos do grupo 
            robótica, o debate sobre Inteligência Artificial dinamizado pelos professores das disciplinas 
            de Português (Elisabete Jesus) e de Arquitetura de Computadores (José Romeiro) e uma atividade 
            realizada na disciplina de Física e Química com a professora Isabel Tomás sobre o isolamento 
            térmico de uma casa, com um sensor programado pelos alunos.
        </p>
        <img src={imageOne} alt="Objective One" className="object-scale-down max-h-full w-[35rem] h-[35rem] p-2 rounded-md z-10" />
        <div class="bg-opacity-25 flex justify-center items-center">
            <div class="absolute bg-green-600 w-[0.5rem] h-72 shadow z-0"></div>
        </div>
      </div>
      )
    }
    </>
  );
};