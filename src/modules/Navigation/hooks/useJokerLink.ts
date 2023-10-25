export default function useJokerLink() {
  const gameID = localStorage.getItem('joker-gameID');
  const status = localStorage.getItem('joker-status');

  if (status === 'lobby') return `/joker/${gameID}`;
  if (status === 'inGame') return `/joker/${gameID}/game`;
  return '/joker';
}
