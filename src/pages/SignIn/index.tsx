import {
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from 'firebase/auth';
import { firebaseAuth } from '@/firebase';
import googleAuthProvider from '@/firebase/googelAuthProvider';
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

import { useEffect } from 'react';

const SignIn = () => {
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const { pathname } = useLocation();
  console.log(loaderData);

  const handleSignInWithGoogle = () => {
    setPersistence(firebaseAuth, browserSessionPersistence).then(() => {
      return signInWithPopup(firebaseAuth, googleAuthProvider)
        .then((result) => {
          const user = result.user;
          if (user) {
            navigate('/', { replace: true });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);

          console.error(errorCode);
          console.error(errorMessage);
          console.error(email);
          console.error(credential);
        });
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user && pathname === '/sign-in') {
        navigate('/', { replace: true });
      }
    });

    return () => unsubscribe();
  }, [navigate, pathname]);

  return (
    <main className='relative h-screen'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-1/3 p-8 rounded-md'>
        <h1 className='text-4xl font-black tracking-widest'>INVENSTORE</h1>
        <p>Sign in to continue</p>
        <form className='w-full mt-8 flex flex-col space-y-4' action=''>
          <div>
            <Label htmlFor='email'>Email Address</Label>
            <Input id='email' />
          </div>
          <div>
            <Label htmlFor='password'>Password</Label>
            <Input id='password' type='password' />
          </div>
          <Button type='submit'>Sign In</Button>
          <span className='text-center'>Or</span>
          <Button
            variant={'outline'}
            type='button'
            onClick={handleSignInWithGoogle}
          >
            Sign In With Google
          </Button>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
