import { signOut } from 'firebase/auth';
import { firebaseAuth } from '@/firebase';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const handleSignOut = () => {
    signOut(firebaseAuth)
      .then()
      .catch(() => {
        console.log('Failed');
      });
  };

  return (
    <main>
      <h1 className='text-4xl font-bold'>Invenstore</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        similique repellendus cum voluptate cumque vitae voluptas exercitationem
        maxime fuga placeat. Vitae quam quisquam fugiat harum quae quo unde nam.
        Corporis?
      </p>
      <Button variant={'destructive'} onClick={handleSignOut}>
        Sign Out
      </Button>
      <Link to={'/sign-in'}>Sign In</Link>
    </main>
  );
};

export default Home;
