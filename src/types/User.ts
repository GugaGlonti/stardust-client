export interface User {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  authLevel: string;
  balance: number;
  dateOfBirth: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  country: string;
  profilePicture: string;

  notificationCount: number;
  friends?: string[];

  password?: string;
}
