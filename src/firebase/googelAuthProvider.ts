import { GoogleAuthProvider } from 'firebase/auth';

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  login_hint: 'user@gmail.com',
});

export default googleAuthProvider;
