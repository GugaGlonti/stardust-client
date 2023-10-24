export interface Message {
  id: number;
  chatId: string;
  sender: string;

  text: string;
  timestamp: Date;

  read?: boolean;
  imgae?: string;
}
