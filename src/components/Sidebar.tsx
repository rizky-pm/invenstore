import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import { firebaseAuth } from '@/firebase';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const { pathname } = useLocation();
  const pathWithoutNavbar = ['/sign-in', '/sign-up'];
  const defaultLinkStyle =
    'text-primary-foreground py-1 px-2 rounded inline-block w-full font-semibold hover:text-primary hover:bg-primary-foreground transition-all';
  const activeLinkStyle = cn(
    defaultLinkStyle,
    'text-primary bg-primary-foreground'
  );

  if (pathWithoutNavbar.includes(pathname)) {
    return null;
  }

  const handleSignOut = () => {
    signOut(firebaseAuth)
      .then()
      .catch(() => {
        console.log('Failed');
      });
  };

  return (
    <aside className='flex flex-col w-[15%] p-6 h-screen fixed top-0 left-0 bg-primary'>
      <h1 className='text-3xl font-black text-primary-foreground'>
        INVENSTORE
      </h1>
      <ul className='flex flex-col gap-2 h-screen mt-4'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? activeLinkStyle : defaultLinkStyle
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? activeLinkStyle : defaultLinkStyle
            }
          >
            About
          </NavLink>
        </li>
        <li className='mt-auto'>
          <Button
            variant={'destructive'}
            className='w-full'
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
