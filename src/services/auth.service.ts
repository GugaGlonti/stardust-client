import { SignInFormData } from '../modules/SignInForm/SignInForm';
import { SignUpFormData } from '../modules/SignUpForm/SignUpForm';
import axios from 'axios';

export default class AuthService {
    static async signUp(formData: SignUpFormData) {
        try {
            const response = await axios.post('http://localhost:3000/api/auth/signup', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    static async singIn(formData: SignInFormData) {
        try {
            const { data } = (await axios.post('http://localhost:3000/api/auth/signin', formData)) as { data: { token: string } };

            console.log(data.token);

            return localStorage.setItem('token', data.token);
        } catch (error) {
            console.error(error);
        }
    }
}
