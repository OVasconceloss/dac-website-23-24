import imageOne from "../../assets/school-image.jpg";

export const Objective = ({isInverted}) => {
  return (
    <>
    {
      isInverted ? (
          <div className="flex items-center space-x-5">
            <div class="bg-opacity-25 flex justify-center items-center">
              <div class="absolute bg-zinc-800 w-[0.5rem] h-72 shadow z-0"></div>
            </div>
            <img src={imageOne} alt="Objective One" className="object-scale-down max-h-full w-[35rem] h-[35rem] p-2 rounded-md z-10" />
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Deserunt nesciunt fugit est neque harum porro voluptates, eaque maiores adipisci ducimus velit, 
              iusto esse quidem. Nisi alias libero totam distinctio fugit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              In beatae autem id perspiciatis totam culpa velit laboriosam nemo quod,
              deleniti magni quam impedit quos, reiciendis sunt iure maiores ab veniam.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nemo cum cupiditate at tempore,
              temporibus saepe maxime perspiciatis nostrum pariatur provident reiciendis, voluptatem accusamus recusandae, 
              inventore esse sint adipisci dicta!
            </p>
        </div>
      ) : (
          <div className="flex items-center space-x-5">
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Deserunt nesciunt fugit est neque harum porro voluptates, eaque maiores adipisci ducimus velit, 
            iusto esse quidem. Nisi alias libero totam distinctio fugit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In beatae autem id perspiciatis totam culpa velit laboriosam nemo quod,
            deleniti magni quam impedit quos, reiciendis sunt iure maiores ab veniam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nemo cum cupiditate at tempore,
            temporibus saepe maxime perspiciatis nostrum pariatur provident reiciendis, voluptatem accusamus recusandae, 
            inventore esse sint adipisci dicta!
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