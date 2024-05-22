import logoSchool from "../../assets/aesa-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col bg-light_black_two border-t-4 border-green-600 shadow">
      <section className="px-5 flex flex-row-reverse items-center justify-between">
        <img src={logoSchool} alt="Logo AESA" className="object-scale-down w-20 h-20"/>
        <h3 className="text-green-500">Copyright© {currentYear} AESA, All rights reserved.</h3>
      </section>
      <section className="flex flex-row-reverse items-center justify-between space-x-5 px-5 bg-zinc-900 rounded-t-lg">
        <nav id='footer-menu' className='py-5 space-x-5'>
        <Link to={'/'} className='p-2 text-[1.1rem] border-b-2 border-transparent text-zinc-50 
            transition ease-linear hover:border-green-600 hover:text-green-600'>
          Início
          </Link>
          <Link to={'/content'} className='p-2 text-[1.1rem] border-b-2 border-transparent text-zinc-50 
            transition ease-linear hover:border-green-600 hover:text-green-600'>
          Conteúdos
          </Link>
          <Link to={'/aboutus'} className='p-2 text-[1.1rem] border-b-2 border-transparent text-zinc-50 
            transition ease-linear hover:border-green-600 hover:text-green-600'>
          Sobre
          </Link>
        </nav>
        <h1 className="text-[1.5rem] text-zinc-50">TECIAESA</h1>
      </section>
    </footer>
  );
};