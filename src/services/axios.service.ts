import axios from 'axios';

type Params = { [key: string]: any };

export class AxiosService {
  static async get<T>(url: string, params?: Params, fallback?: T, errorMessage?: string) {
    try {
      return (await axios.get(url, { params })).data;
    } catch (error) {
      errorMessage ? console.error(errorMessage) : console.error(error);
      return fallback as T;
    }
  }

  static async post<T>(url: string, data?: any, fallback?: T, errorMessage?: string) {
    try {
      return (await axios.post(url, data)).data;
    } catch (error) {
      errorMessage ? console.error(errorMessage) : console.error(error);
      return fallback as T;
    }
  }

  static async put<T>(url: string, data?: any, fallback?: T, errorMessage?: string) {
    try {
      return (await axios.put(url, data)).data;
    } catch (error) {
      errorMessage ? console.error(errorMessage) : console.error(error);
      return fallback as T;
    }
  }

  static async delete<T>(url: string, fallback?: T, errorMessage?: string) {
    try {
      return (await axios.delete(url)).data;
    } catch (error) {
      errorMessage ? console.error(errorMessage) : console.error(error);
      return fallback as T;
    }
  }
}
