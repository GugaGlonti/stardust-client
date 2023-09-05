import axios from 'axios';

const url = 'http://localhost:3000/api/users/';

// const users = axios.create({ baseURL: url, timeout: 1000 });

export interface ProfileData {
    id: number;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    balance: number;
    password: string;
}

export default class UserService {
    static async getProfile(username: string) {
        try {
            return (await axios.get(url + username)).data;
        } catch (error) {
            throw new Error('User Not Found');
        }
    }
}
