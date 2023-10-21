import axiosService from './axios.instance';

import { User } from '../types/interfaces';

import { SignInFormData } from '../modules/Authentication/SignInForm/SignInForm';
import { SignUpFormData } from '../modules/Authentication/SignUpForm/SignUpForm';

const url = 'http://localhost:3000/api/auth';

export default class AuthService {
  static async signUp(formData: SignUpFormData) {
    try {
      await axiosService.post(url + '/signup', formData);
      localStorage.removeItem('token');

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async singIn(formData: SignInFormData) {
    try {
      const { data } = (await axiosService.post(url + '/signin', formData)) as { data: { token: string; user: any } };
      const { token, user } = data;

      localStorage.setItem('token', token);

      return user;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async me(): Promise<User | undefined> {
    try {
      const { data } = await axiosService.get('http://localhost:3000/api/auth/me');
      if (!data) throw new Error('not data retrieved');

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  static isAuth() {
    return localStorage.getItem('token') ? true : false;
  }
}
