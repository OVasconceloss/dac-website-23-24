import { Link } from 'react-router-dom';
import schoolLogo from '../../assets/aesa-logo.png';

export const Header = () => {
  return (
    <header className='flex items-center justify-between border-b-2 border-green-100 rounded-b-md'>
      <Link to={'/'}>
        <div id='logo-div' className='flex items-center space-x-5'>
          <img 
            src={schoolLogo} 
            alt="School Logo"
            className="object-scale-down max-h-full w-24 h-24 p-2"
          />
          <h1 className="text-[1.7rem] text-zinc-700">Título do Site</h1>
        </div>
      </Link>
      <nav id='header-menu' className='px-2'>
        <a href="#" className='p-3 mx-3 text-[1.1rem] border-b-2 border-transparent text-zinc-700 transition ease-linear hover:border-green-300 hover:text-green-400'>Link 1</a>
        <a href="#" className='p-3 mx-3 text-[1.1rem] border-b-2 border-transparent text-zinc-700 transition ease-linear hover:border-green-300 hover:text-green-400'>Link 2</a>
        <a href="#" className='p-3 mx-3 text-[1.1rem] border-b-2 border-transparent text-zinc-700 transition ease-linear hover:border-green-300 hover:text-green-400'>Link 3</a>
        <a href="#" className='p-3 mx-3 text-[1.1rem] border-b-2 border-transparent text-zinc-700 transition ease-linear hover:border-green-300 hover:text-green-400'>Sobre</a>
      </nav>
    </header>
  );
};