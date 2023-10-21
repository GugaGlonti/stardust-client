import AuthBlock from '../components/AuthBlock';
import useAuthenticate from '../hooks/useAuthenticate';

export default function JokerPage() {
  if (!useAuthenticate()) return <AuthBlock />;
  return <>JokerPage</>;
}
