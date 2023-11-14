export default function useJokerGame() {
  const gameID = localStorage.getItem('joker-gameID');
  const status = localStorage.getItem('joker-status');
  return [gameID, status];
}
