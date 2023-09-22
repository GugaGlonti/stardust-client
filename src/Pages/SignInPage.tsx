import FormHeader from '../components/FormHeader';
import SignInForm from '../modules/SignInForm/SignInForm';
import SignUpHere from '../modules/SignInForm/components/SignUpHere';

export default function SignInPage() {
  return (
    <>
      <FormHeader
        text='Sign in to your account'
        className='mt-32 '
      />
      <SignInForm />
      <SignUpHere />
    </>
  );
}
