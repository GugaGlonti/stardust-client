import AuthBlock from '../components/AuthBlock';
import useAuthenticate from '../hooks/useAuthenticate';

export default function RoulettePage() {
  if (!useAuthenticate()) return <AuthBlock />;

  return <div>Roulette Pege</div>;
}
