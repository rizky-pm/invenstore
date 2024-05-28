import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { pathname } = useLocation();
  const pathWithoutNavbar = ['/sign-in', '/sign-up'];

  if (pathWithoutNavbar.includes(pathname)) {
    return null;
  }

  return (
    <aside className='flex flex-col w-[15%] p-6 h-screen fixed top-0 left-0 bg-primary text-primary-foreground'>
      <h1 className='text-3xl font-black'>INVENSTORE</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        perferendis minima iusto dolores deserunt nihil quis autem quaerat eos
        nostrum dicta ex quia hic est minus, maiores, esse, illum doloribus?
      </p>
    </aside>
  );
};

export default Sidebar;
