export interface Notification {
  id: number;
  type: string;
  createdAt: Date;
  read: boolean;

  title?: string;
  senderId?: number;
  receiverId?: number;
  body?: string;
  link?: string;
}
