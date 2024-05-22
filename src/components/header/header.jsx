import { Link } from 'react-router-dom';
import schoolLogo from '../../assets/aesa-logo.png';

export const Header = () => {
  return (
    <header className='pr-5 flex items-center justify-between bg-light_black_two border-b-4 border-green-600 shadow'>
      <div className='flex items-center space-x-5'>
        <div className="flex items-center justify-center w-[8rem] bg-green-600">
          <img 
            src={schoolLogo} 
            alt="School Logo"
            className="object-scale-down max-h-full w-20 h-20 p-2 rounded-r-md"
          />
        </div>
        <h1 className="text-[1.7rem] text-zinc-50">TECIAESA</h1>
      </div>
        <nav id='header-menu' className='px-2 space-x-5'>
          <Link to={'/'} className='p-2 text-[1.1rem] border-b-2 border-transparent text-zinc-50 
            transition ease-linear hover:border-green-600 hover:text-green-600'>
          Início
          </Link>
          <Link to={'/content'} className='p-2 text-[1.1rem] border-b-2 border-transparent text-zinc-50 
            transition ease-linear hover:border-green-600 hover:text-green-600'>
          Início
          </Link>
          <Link to={'/aboutus'} className='p-2 text-[1.1rem] border-b-2 border-transparent text-zinc-50 
            transition ease-linear hover:border-green-600 hover:text-green-600'>
          Início
          </Link>
        </nav>
    </header>
  );
};