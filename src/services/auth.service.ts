import { SignInFormData } from '../modules/SignInForm/SignInForm';
import { SignUpFormData } from '../modules/SignUpForm/SignUpForm';
import axios from 'axios';

const url = 'http://localhost:3000/api';

export default class AuthService {
    static async signUp(formData: SignUpFormData) {
        try {
            const response = await axios.post(url + '/signup', formData);
            console.log(response.data);
            return true;
        } catch (error) {
            return false;
        }
    }

    static async singIn(formData: SignInFormData) {
        try {
            const { data } = (await axios.post('http://localhost:3000/api/auth/signin', formData)) as { data: { token: string } };

            console.log(data.token);

            localStorage.setItem('token', data.token);
            return true;
        } catch (error) {
            return false;
        }
    }
}
