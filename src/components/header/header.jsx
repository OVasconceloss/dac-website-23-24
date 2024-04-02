import { Link } from 'react-router-dom';
import schoolLogo from '../../assets/aesa-logo.png';

export const Header = () => {
  return (
    <header className='pr-5 flex items-center justify-between border-b-2 border-zinc-100 shadow'>
      <Link to={'/'} className='flex items-center space-x-8'>
        <div id='logo-div' className="flex items-center justify-center w-[10rem] bg-zinc-800 rounded-r-md">
          <img 
            src={schoolLogo} 
            alt="School Logo"
            className="object-scale-down max-h-full w-24 h-24 p-2 rounded-r-md"
          />
        </div>
        <h1 className="text-[1.7rem] text-zinc-700">Título do Site</h1>
      </Link>
      <nav id='header-menu' className='px-2 space-x-3'>
        <a 
          href="/" 
          className='p-3 text-[1.1rem] border-b-2 border-transparent text-zinc-700 
          transition ease-linear hover:border-green-300 hover:text-green-400'>Início</a>
        <a 
          href="#" 
          className='p-3 text-[1.1rem] border-b-2 border-transparent text-zinc-700 
          transition ease-linear hover:border-green-300 hover:text-green-400'>Conteúdos</a>
        <a 
          href="#" 
          className='p-3 text-[1.1rem] border-b-2 border-transparent text-zinc-700 
          transition ease-linear hover:border-green-300 hover:text-green-400'>Sobre</a>
      </nav>
    </header>
  );
};