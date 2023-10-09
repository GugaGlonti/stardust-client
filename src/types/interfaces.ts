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

  password?: string;
}

export interface UpdateProfileData {
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  country: string;
}

export interface SearchUsersData {
  firstName: string;
  lastName: string;
  username: string;

  email: string;
}
