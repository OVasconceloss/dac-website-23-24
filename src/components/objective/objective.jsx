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
              Apresentar algumas características da Escola, detalhando um pouco das áreas que a escola oferece.
              Descreve também a infraestrutura escolar as suas instalações como salas de aula, laboratórios, biblioteca e 
              ginásio. Demonstra os recursos que a escola tem a oferecer, como tecnologia em sala de aula e apoio para alunos, 
              e menciona Projetos e Atividades Extracurriculares que pode ser um possível desenvolvimento para os alunos para o 
              lado social e educativo. Também exibe a parte dos docentes e não docentes destacando um pouco das suas qualificações 
              e contribuições para a qualidade da escola.
            </p>
        </div>
      ) : (
          <div className="flex items-center space-x-5">
          <p className="text-justify">
            Disponibiliza os perfis da cada membro da turma o seu desempenho, com 
            informações como a idade média da turma, quantos membros é constituída. 
            Além disso, serão incluídas de fotografias de eventos/projetos importantes, 
            como projetos de grupo robótica, o Debate sobre Intelegencia Artificial na 
            disciplina de Português organizado por os professores das disciplinas de 
            Português (Elisabete Jesus) e de Arquitetura de Computadores (José Romeiro), e 
            uma atividade na disciplina de Física e Química com a professora Isabel Tomás 
            sobre o Isolamento Térmico de uma Casa, com um sensor programado pelos os alunos. 
            Assim destacando momentos que foram conquistados por um grupo de indivíduos na turma.
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