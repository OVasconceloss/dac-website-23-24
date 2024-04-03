import { Link } from 'react-router-dom';
import schoolLogo from '../../assets/aesa-logo.png';

export const Header = () => {
  return (
    <header className='pr-5 flex items-center justify-between border-b-2 border-zinc-100 bg-zinc-800 shadow'>
      <div className='flex items-center space-x-5'>
        <div className="flex items-center justify-center w-[8rem] bg-green-600 rounded-r-md">
          <img 
            src={schoolLogo} 
            alt="School Logo"
            className="object-scale-down max-h-full w-24 h-24 p-2 rounded-r-md"
          />
        </div>
        <h1 className="text-[1.7rem] text-zinc-50">Título do Website</h1>
      </div>
        <nav id='header-menu' className='px-2 space-x-5'>
          <a 
            href="/" 
            className='p-2 text-[1.1rem] border-b-2 border-transparent text-zinc-50 
            transition ease-linear hover:border-green-600 hover:text-green-600'>Início</a>
          <a 
            href="#" 
            className='p-2 text-[1.1rem] border-b-2 border-transparent text-zinc-50 
            transition ease-linear hover:border-green-600 hover:text-green-600'>Conteúdos</a>
          <a 
            href="#" 
            className='p-2 text-[1.1rem] border-b-2 border-transparent text-zinc-50 
            transition ease-linear hover:border-green-600 hover:text-green-600'>Sobre</a>
        </nav>
    </header>
  );
};