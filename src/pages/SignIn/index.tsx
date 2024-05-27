import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { firebaseAuth } from '@/firebase';
import googleAuthProvider from '@/firebase/googelAuthProvider';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const SignIn = () => {
  const handleSignInWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleAuthProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        if (credential) {
          const token = credential.accessToken;
          console.log(token);
        }

        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.error(errorCode);
        console.error(errorMessage);
        console.error(email);
        console.error(credential);
      });
  };

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
