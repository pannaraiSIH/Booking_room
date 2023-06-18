import { RxDashboard } from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';

const Nav = () => {
  return (
    <nav className="flex items-center gap-12 border-b md:max-w-1/3  md:min-h-screen md:flex-col md:drop-shadow-md md:border-r">
      <p className="uppercase font-bold text-3xl flex p-8">
        <RxDashboard className=" text-blue-500 mt-1 mr-2" /> Booking
      </p>
      <ul className="md:w-full">
        <li className="text-md font-semibold uppercase flex  hover:text-blue-500 md:bg-blue-100 md:w-full md:p-8">
          <HiHome className="hidden mt-1 mr-2 md:flex" /> Overview
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
